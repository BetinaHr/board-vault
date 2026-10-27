import { useState, useEffect, useRef } from 'react';
import AuthContext from './AuthContext.js';
import * as authService from '../services/authService.js';

const STORAGE_KEY = 'board-vault-session';
const REFRESH_EARLY_MS = 60_000;

function prepareSession(sessionData) {
    if (
        !sessionData?.user ||
        !sessionData.access_token ||
        !sessionData.refresh_token
    ) {
        throw new Error('Invalid authentication session.');
    }

    const expiresAt =
        sessionData.expires_at ??
        Math.floor(Date.now() / 1000) + sessionData.expires_in;

    if (!Number.isFinite(expiresAt)) {
        throw new Error('Session expiry is missing.');
    }

    return {
        ...sessionData,
        expires_at: expiresAt,
    };
}

function readStoredAuth() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);

        if (!saved) {
            return { session: null, ready: true };
        }

        const session = JSON.parse(saved);

        if (
            !session?.user ||
            !session.access_token ||
            !session.refresh_token
        ) {
            return { session: null, ready: true };
        }

        // An older stored session without expires_at needs refreshing.
        const expiresAt = Number(session.expires_at) || 0;

        return {
            session: { ...session, expires_at: expiresAt },
            ready: expiresAt * 1000 > Date.now(),
        };
    } catch {
        return { session: null, ready: true };
    }
}


export default function AuthProvider({ children }) {
    const [auth, setAuth] = useState(readStoredAuth);

    // Updated immediately so pending requests can detect logout.
    const sessionRef = useRef(auth.session);

    const refreshRef = useRef(null);

    const session = auth.session;

    const onAuthenticate = (sessionData) => {
        const nextSession = prepareSession(sessionData);

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(nextSession)
        );

        sessionRef.current = nextSession;
        setAuth({ session: nextSession, ready: true });
    };

    const onLogout = async () => {
        const currentSession = sessionRef.current;

        // Clear locally before waiting for the server.
        sessionRef.current = null;
        localStorage.removeItem(STORAGE_KEY);
        setAuth({ session: null, ready: true });

        if (currentSession) {
            await authService.logout(currentSession.access_token);
        }
    };

    useEffect(() => {
        if (!session) return;

        let active = true;

        const refresh = async () => {
            if (!active || sessionRef.current !== session) return;

            try {
                let pending = refreshRef.current;

                if (!pending || pending.token !== session.refresh_token) {
                    pending = {
                        token: session.refresh_token,
                        promise: authService.refreshSession(
                            session.refresh_token
                        ),
                    };

                    refreshRef.current = pending;
                }

                const sessionData = await pending.promise;

                // Do not restore a session after logout or another login.
                if (!active || sessionRef.current !== session) {
                    return;
                }

                const nextSession = prepareSession(sessionData);

                localStorage.setItem(
                    STORAGE_KEY,
                    JSON.stringify(nextSession)
                );

                sessionRef.current = nextSession;
                setAuth({ session: nextSession, ready: true });
            } catch {
                if (!active || sessionRef.current !== session) {
                    
                    return;
                }

                sessionRef.current = null;
                localStorage.removeItem(STORAGE_KEY);
                setAuth({ session: null, ready: true });
            }
        };

        const refreshAt =
            session.expires_at * 1000 - REFRESH_EARLY_MS;

        const delay = Math.max(0, refreshAt - Date.now());

        const timer = window.setTimeout(refresh, delay);

        const checkExpiry = () => {
            if (Date.now() >= refreshAt) {
                void refresh();
            }
        };

        const handleVisibilityChange = () => {
            if (document.visibilityState === 'visible') {
                checkExpiry();
            }
        };

        window.addEventListener('focus', checkExpiry);
        window.addEventListener('online', checkExpiry);
        document.addEventListener(
            'visibilitychange',
            handleVisibilityChange
        );

        return () => {
            active = false;
            window.clearTimeout(timer);
            window.removeEventListener('focus', checkExpiry);
            window.removeEventListener('online', checkExpiry);
            document.removeEventListener(
                'visibilitychange',
                handleVisibilityChange
            );
        };
    }, [session]);

    if (!auth.ready) {
        return <p role="status">Restoring your session...</p>;
    }

    return (
        <AuthContext.Provider
            value={{
                user: session?.user ?? null,
                accessToken: session?.access_token ?? null,
                onAuthenticate,
                onLogout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}