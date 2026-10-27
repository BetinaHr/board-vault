import { Link } from 'react-router';
import vaultIcon from '../../assets/icons/vault.svg'

export default function Footer() {
    return (

        < footer className="site-footer" >
            <div className="container footer-layout">
                <Link className="brand" to="/"><img src={vaultIcon} alt="" width="30" height="30" />BoardVault</Link>
                <p>
                    A good game brings people together.
                </p>
                <nav aria-label="Footer">

                    <Link to="/">Home</Link>
                    <Link to="/catalog">Catalog</Link>
                    <Link to="/my-vault">My Vault</Link>
                </nav>
                <small>© 2026 Board Vault</small>
            </div>
        </footer >
    );
}
