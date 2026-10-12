import { NavLink } from "react-router";

export default function Navigation() {
    return (
        <nav className="site-nav" aria-label="Primary">
            <NavLink to="/" aria-current="page">Home</NavLink>
            <NavLink to="/catalog">Catalog</NavLink>
            <NavLink to="/my-vault">My Vault</NavLink>
            <NavLink to="/create-game">Add Game</NavLink>
        </nav>
    );
}