import vaultIcon from '../assets/icons/vault.svg'

export default function Footer() {
    return (

        < footer className="site-footer" >
            <div className="container footer-layout">
                <a className="brand" href="index.html"><img src={vaultIcon} alt="" width="30"
                    height="30" />BoardVault</a>
                <p>
                    A good game brings people together.
                </p>
                <nav aria-label="Footer">
                    <a href="index.html">Discover</a>
                    <a href="catalog.html">Catalog</a>
                    <a href="my-vault.html">My Vault</a>
                </nav>
                <small>© 2026 Board Vault</small>
            </div>
        </footer >
    );
}