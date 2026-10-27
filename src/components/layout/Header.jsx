import vaultIcon from '../../assets/icons/vault.svg'
import Navigation from './Navigation'
import { Link } from 'react-router';
import useAuth from '../../hooks/useAuth.js';


export default function Header() {
    const { user, onLogout } = useAuth();

    const handleLogout = async () => {
        try {
            await onLogout();
        } catch (error) {
            alert(error.message);
        }
    };

    const username = user?.user_metadata?.username?.trim() || 'User';

    const initials = username.slice(0, 2).toUpperCase();

    return (
        <header className="site-header">
            <div className="container header-layout">
                <Link className="brand" to="/"><img src={vaultIcon} width="36" height="36"
                    alt="" /><span>Board<span className="brand__accent">Vault</span></span>
                </Link>

                <Navigation user={user} />

                {/* <div className="header-search">
                    <label className="visually-hidden" htmlFor="header-search">Search board games</label>
                    <span aria-hidden="true">⌕</span><input id="header-search" type="search"
                        placeholder="Find your next game…" />
                </div> */}
                
                <div className="header-account">
                    {/* AUTHENTICATED USERS ONLY */}
                    {user ? (
                        <>
                            <span
                                className="avatar"
                                title={username}
                                aria-label={`Signed in as ${username}`}
                            >
                                {initials}
                            </span>

                            <button
                                className="button button--text"
                                type="button"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link className="button button--text" to="/login">
                                Login
                            </Link>
                            <Link className="button button--text" to="/register">
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}
