import vaultIcon from '../../assets/icons/vault.svg'
import Navigation from './Navigation'
import { Link } from 'react-router';

export default function Header({ user, onLogout }) {
    return (
        <header className="site-header">
            <div className="container header-layout">
                <a className="brand" href="/"><img src={vaultIcon} width="36" height="36"
                    alt="" /><span>Board<span className="brand__accent">Vault</span></span>
                </a>

                <Navigation user = {user}/>
                {/* ======================================================
                   HEADER SEARCH
              ======================================================= */}
                <div className="header-search">
                    <label className="visually-hidden" htmlFor="header-search">Search board games</label>
                    <span aria-hidden="true">⌕</span><input id="header-search" type="search"
                        placeholder="Find your next game…" />
                </div>
                <div className="header-account">
                    {/* AUTHENTICATED USERS ONLY: render account actions after login. */}
                    <a className="avatar" href="profile.html" aria-label="Alex Morgan's profile">AM</a>
                    {user ? (
                        <button className="button button--text" type="button" onClick={onLogout}>Logout</button>
                    ) : (
                        <>
                            <Link className="button button--text" to="/login">Login</Link>
                            <Link className="button button--text" to="/register">Register</Link>
                        </>

                    )
                    }
                </div>
            </div>
        </header>
    );
}
