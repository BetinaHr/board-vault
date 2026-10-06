import wingspanImage from '../assets/images/wingspan.svg'
import marsImage from '../assets/images/mars.svg'
import azulImage from '../assets/images/azul.svg'
import catanImage from '../assets/images/catan.svg'
import carcassonneImage from '../assets/images/carcassonne.svg'
import pandemicImage from '../assets/images/pandemic.svg'
import ticketImage from '../assets/images/ticket.svg'
import wondersImage from '../assets/images/wonders.svg'
// import './App.css'


export default function DiscoverGames() {
    return (

        < section className="section" aria-labelledby="discover-title" >
            <div className="section-heading">
                <div>
                    <p className="eyebrow">
                        Worth making room for
                    </p>
                    <h2 id="discover-title">
                        Discover your next favorite
                    </h2>
                </div>
                <span className="muted">Handpicked for your table</span>
            </div>
            {/* ======================================================
                   GAME GRID
                   Responsive collection of game previews: one, two, or four columns.
                   Future React component: <GameGrid />.
              ======================================================= */}
            <div className="game-grid">
                {/* ======================================================
                     GAME CARD
                     Catalog preview for Wingspan; metadata and actions share a reusable structure.
                     Future React component: <GameCard />.
                ======================================================= */}
                <article className="game-card">
                    <a className="game-card__cover" href="game-details.html" aria-label="View Wingspan details"><img
                            className="game-card__image" src={wingspanImage} alt="Illustrated Wingspan cover"
                            width="600" height="600" loading="lazy" /><span className="badge badge--cover">Featured</span></a>
                    <div className="game-card__body">
                        <div className="game-card__eyebrow">
                            <span>Strategy</span><span className="rating"><span aria-hidden="true">★</span> 8.1<span
                                className="visually-hidden"> out of 10</span></span>
                        </div>
                        <h3 className="game-card__title">
                            <a href="game-details.html">Wingspan</a>
                        </h3>
                        <p className="game-card__description">
                            Build a sanctuary, attract beautiful birds, and let your engine take flight.
                        </p>
                        <div className="game-card__meta">
                            <span><span aria-hidden="true">♙</span> 1–5 players</span><span><span
                                aria-hidden="true">◷</span> 40–70 min</span>
                        </div>
                        <div className="game-card__actions">
                            <a className="button button--secondary button--small" href="game-details.html">View details</a>
                            <button className="favorite-button" type="button" aria-label="Add Wingspan to favorites"
                                aria-pressed="false">♡</button>
                        </div>
                    </div>
                </article>
                {/* ======================================================
                     GAME CARD
                     Catalog preview for Terraforming Mars; metadata and actions share a reusable structure.
                     Future React component: <GameCard />.
                ======================================================= */}
                <article className="game-card">
                    <a className="game-card__cover" href="game-details.html"
                        aria-label="View Terraforming Mars details"><img className="game-card__image"
                            src={marsImage} alt="Illustrated Terraforming Mars cover" width="600"
                            height="600" loading="lazy" /><span className="badge badge--cover">Community favorite</span></a>
                    <div className="game-card__body">
                        <div className="game-card__eyebrow">
                            <span>Strategy</span><span className="rating"><span aria-hidden="true">★</span> 8.4<span
                                className="visually-hidden"> out of 10</span></span>
                        </div>
                        <h3 className="game-card__title">
                            <a href="game-details.html">Terraforming Mars</a>
                        </h3>
                        <p className="game-card__description">
                            Turn the red planet into a thriving new world, one ambitious project at a time.
                        </p>
                        <div className="game-card__meta">
                            <span><span aria-hidden="true">♙</span> 1–5 players</span><span><span
                                aria-hidden="true">◷</span> 120 min</span>
                        </div>
                        <div className="game-card__actions">
                            <a className="button button--secondary button--small" href="game-details.html">View details</a>
                            <button className="favorite-button" type="button"
                                aria-label="Add Terraforming Mars to favorites" aria-pressed="false">♡</button>
                        </div>
                    </div>
                </article>
                {/* ======================================================
                     GAME CARD
                     Catalog preview for Azul; metadata and actions share a reusable structure.
                     Future React component: <GameCard />.
                ======================================================= */}
                <article className="game-card">
                    <a className="game-card__cover" href="game-details.html" aria-label="View Azul details"><img
                        className="game-card__image" src={azulImage} alt="Illustrated Azul cover"
                        width="600" height="600" loading="lazy" /></a>
                    <div className="game-card__body">
                        <div className="game-card__eyebrow">
                            <span>Abstract</span><span className="rating"><span aria-hidden="true">★</span> 7.8<span
                                className="visually-hidden"> out of 10</span></span>
                        </div>
                        <h3 className="game-card__title">
                            <a href="game-details.html">Azul</a>
                        </h3>
                        <p className="game-card__description">
                            Draft colorful tiles and create a mosaic worthy of a royal palace.
                        </p>
                        <div className="game-card__meta">
                            <span><span aria-hidden="true">♙</span> 2–4 players</span><span><span
                                aria-hidden="true">◷</span> 30–45 min</span>
                        </div>
                        <div className="game-card__actions">
                            <a className="button button--secondary button--small" href="game-details.html">View details</a>
                            <button className="favorite-button" type="button" aria-label="Add Azul to favorites"
                                aria-pressed="false">♡</button>
                        </div>
                    </div>
                </article>
                {/* ======================================================
                     GAME CARD
                     Catalog preview for Catan; metadata and actions share a reusable structure.
                     Future React component: <GameCard />.
                ======================================================= */}
                <article className="game-card">
                    <a className="game-card__cover" href="game-details.html" aria-label="View Catan details"><img
                        className="game-card__image" src={catanImage} alt="Illustrated Catan cover"
                        width="600" height="600" loading="lazy" /><span className="badge badge--cover">Classic</span></a>
                    <div className="game-card__body">
                        <div className="game-card__eyebrow">
                            <span>Strategy</span><span className="rating"><span aria-hidden="true">★</span> 7.1<span
                                className="visually-hidden"> out of 10</span></span>
                        </div>
                        <h3 className="game-card__title">
                            <a href="game-details.html">Catan</a>
                        </h3>
                        <p className="game-card__description">
                            Trade, build, and settle an island where every resource tells a story.
                        </p>
                        <div className="game-card__meta">
                            <span><span aria-hidden="true">♙</span> 3–4 players</span><span><span
                                aria-hidden="true">◷</span> 60–120 min</span>
                        </div>
                        <div className="game-card__actions">
                            <a className="button button--secondary button--small" href="game-details.html">View details</a>
                            <button className="favorite-button" type="button" aria-label="Add Catan to favorites"
                                aria-pressed="false">♡</button>
                        </div>
                    </div>
                </article>
                {/* ======================================================
                     GAME CARD
                     Catalog preview for Carcassonne; metadata and actions share a reusable structure.
                     Future React component: <GameCard />.
                ======================================================= */}
                <article className="game-card">
                    <a className="game-card__cover" href="game-details.html" aria-label="View Carcassonne details"><img
                        className="game-card__image" src={carcassonneImage}
                        alt="Illustrated Carcassonne cover" width="600" height="600" loading="lazy" /></a>
                    <div className="game-card__body">
                        <div className="game-card__eyebrow">
                            <span>Family</span><span className="rating"><span aria-hidden="true">★</span> 7.4<span
                                className="visually-hidden"> out of 10</span></span>
                        </div>
                        <h3 className="game-card__title">
                            <a href="game-details.html">Carcassonne</a>
                        </h3>
                        <p className="game-card__description">
                            Shape a medieval landscape of winding roads, cities, and quiet fields.
                        </p>
                        <div className="game-card__meta">
                            <span><span aria-hidden="true">♙</span> 2–5 players</span><span><span
                                aria-hidden="true">◷</span> 30–45 min</span>
                        </div>
                        <div className="game-card__actions">
                            <a className="button button--secondary button--small" href="game-details.html">View details</a>
                            <button className="favorite-button" type="button" aria-label="Add Carcassonne to favorites"
                                aria-pressed="false">♡</button>
                        </div>
                    </div>
                </article>
                {/* ======================================================
                     GAME CARD
                     Catalog preview for Pandemic; metadata and actions share a reusable structure.
                     Future React component: <GameCard />.
                ======================================================= */}
                <article className="game-card">
                    <a className="game-card__cover" href="game-details.html" aria-label="View Pandemic details"><img
                        className="game-card__image" src={pandemicImage} alt="Illustrated Pandemic cover"
                        width="600" height="600" loading="lazy" /><span
                            className="badge badge--cover">Cooperative</span></a>
                    <div className="game-card__body">
                        <div className="game-card__eyebrow">
                            <span>Cooperative</span><span className="rating"><span aria-hidden="true">★</span> 7.6<span
                                className="visually-hidden"> out of 10</span></span>
                        </div>
                        <h3 className="game-card__title">
                            <a href="game-details.html">Pandemic</a>
                        </h3>
                        <p className="game-card__description">
                            Team up to save the world. Every decision matters, and everyone wins together.
                        </p>
                        <div className="game-card__meta">
                            <span><span aria-hidden="true">♙</span> 2–4 players</span><span><span
                                aria-hidden="true">◷</span> 45 min</span>
                        </div>
                        <div className="game-card__actions">
                            <a className="button button--secondary button--small" href="game-details.html">View details</a>
                            <button className="favorite-button" type="button" aria-label="Add Pandemic to favorites"
                                aria-pressed="false">♡</button>
                        </div>
                    </div>
                </article>
                {/* ======================================================
                     GAME CARD
                     Catalog preview for Ticket to Ride; metadata and actions share a reusable structure.
                     Future React component: <GameCard />.
                ======================================================= */}
                <article className="game-card">
                    <a className="game-card__cover" href="game-details.html" aria-label="View Ticket to Ride details"><img
                        className="game-card__image" src={ticketImage}
                        alt="Illustrated Ticket to Ride cover" width="600" height="600" loading="lazy" /></a>
                    <div className="game-card__body">
                        <div className="game-card__eyebrow">
                            <span>Family</span><span className="rating"><span aria-hidden="true">★</span> 7.4<span
                                className="visually-hidden"> out of 10</span></span>
                        </div>
                        <h3 className="game-card__title">
                            <a href="game-details.html">Ticket to Ride</a>
                        </h3>
                        <p className="game-card__description">
                            Connect cities and chase your next great railway adventure.
                        </p>
                        <div className="game-card__meta">
                            <span><span aria-hidden="true">♙</span> 2–5 players</span><span><span
                                aria-hidden="true">◷</span> 30–60 min</span>
                        </div>
                        <div className="game-card__actions">
                            <a className="button button--secondary button--small" href="game-details.html">View details</a>
                            <button className="favorite-button" type="button" aria-label="Add Ticket to Ride to favorites"
                                aria-pressed="false">♡</button>
                        </div>
                    </div>
                </article>
                {/* ======================================================
                     GAME CARD
                     Catalog preview for 7 Wonders; metadata and actions share a reusable structure.
                     Future React component: <GameCard />.
                ======================================================= */}
                <article className="game-card">
                    <a className="game-card__cover" href="game-details.html" aria-label="View 7 Wonders details"><img
                        className="game-card__image" src={wondersImage} alt="Illustrated 7 Wonders cover"
                        width="600" height="600" loading="lazy" /></a>
                    <div className="game-card__body">
                        <div className="game-card__eyebrow">
                            <span>Card Games</span><span className="rating"><span aria-hidden="true">★</span> 7.7<span
                                className="visually-hidden"> out of 10</span></span>
                        </div>
                        <h3 className="game-card__title">
                            <a href="game-details.html">7 Wonders</a>
                        </h3>
                        <p className="game-card__description">
                            Lead an ancient civilization and leave a wonder for the ages.
                        </p>
                        <div className="game-card__meta">
                            <span><span aria-hidden="true">♙</span> 2–7 players</span><span><span
                                aria-hidden="true">◷</span> 30 min</span>
                        </div>
                        <div className="game-card__actions">
                            <a className="button button--secondary button--small" href="game-details.html">View details</a>
                            <button className="favorite-button" type="button" aria-label="Add 7 Wonders to favorites"
                                aria-pressed="false">♡</button>
                        </div>
                    </div>
                </article>
            </div>
        </section >
    );
}