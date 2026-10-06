import {Link} from "react-router";

export default function Navigation() {
    return (
        <nav className="site-nav" aria-label="Primary">
            <Link to="/" aria-current="page">Home</Link>
            <Link to="/catalog">Catalog</Link>
            <Link to="/my-vault">My Vault</Link>
            <Link to="/create-game">Add Game</Link>
        </nav>
    );
}