import { Link } from "react-router";

export default function GameNotFound() {
  return (
                <section className="empty-state">
                <span className="empty-state__symbol" aria-hidden="true">
                    ◇
                </span>

                <p className="eyebrow">Nothing here</p>
                <h1>Game not found</h1>
                <p>
                    This game may have been deleted or the link is incorrect.
                </p>

                <Link className="button button--primary" to="/catalog">
                    Explore the catalog
                </Link>
            </section>
  );
}
