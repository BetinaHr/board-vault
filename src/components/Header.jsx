import vaultIcon from '../assets/icons/vault.svg'
import Navigation from './Navigation'


export default function Header() {
    return (
        <header className="site-header">
            <div className="container header-layout">
                <a className="brand" href="/"><img src={vaultIcon} width="36" height="36"
                    alt="" /><span>Board<span className="brand__accent">Vault</span></span>
                </a>

                <Navigation />
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
                    <button className="button button--text" type="button">Logout</button>
                </div>
            </div>
        </header>
    );
}