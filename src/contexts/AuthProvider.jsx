import { useState } from 'react';
import AuthContext from './AuthContext.js';
import * as authService from '../services/authService.js';

export default function AuthProvider({ children }) {

    // Saves the session from local storage is there is one
    const [session, setSession] = useState(() => {
        try {
            const savedSession = localStorage.getItem('board-vault-session');
            return savedSession ? JSON.parse(savedSession) : null;
        } catch {
            return null;
        }
    });

    const onAuthenticate = (sessionData) => {
        localStorage.setItem(
            'board-vault-session',
            JSON.stringify(sessionData)
        );

        setSession(sessionData);
    };

    const onLogout = async () => {
        await authService.logout(session.access_token);

        localStorage.removeItem('board-vault-session');
        setSession(null);
    };

    return (
        <AuthContext.Provider value={{
            user: session?.user ?? null,
            accessToken: session?.access_token ?? null,
            onAuthenticate,
            onLogout,
        }}>

            {children}

        </AuthContext.Provider>
    );
}