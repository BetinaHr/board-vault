// import { useState } from 'react'
import vaultIcon from './assets/icons/vault.svg'
import wingspanImage from './assets/images/wingspan.svg'
import marsImage from './assets/images/mars.svg'
import azulImage from './assets/images/azul.svg'
import catanImage from './assets/images/catan.svg'
import carcassonneImage from './assets/images/carcassonne.svg'
import pandemicImage from './assets/images/pandemic.svg'
import ticketImage from './assets/images/ticket.svg'
import wondersImage from './assets/images/wonders.svg'

import './App.css'
import Header from './components/Header'

function App() {
    // const [count, setCount] = useState(0)

    return (
        <>
            <a className="skip-link" href="#main-content">Skip to content</a>
            <Header />

            <main id="main-content" className="container main-content">
                {/* ======================================================
                 FEATURED GAME
                 Future React component: <FeaturedGame />.
            ======================================================= */}
                <section className="hero" aria-labelledby="featured-title">
                    <div className="hero__content">
                        <span className="badge badge--light"><span aria-hidden="true">✦</span> Featured game of the week</span>
                        <p className="hero__eyebrow">
                            A little wonder. A lot of strategy.
                        </p>
                        <h1 id="featured-title">
                            Let your next<br />game take flight.
                        </h1>
                        <p className="hero__description">
                            Discover <strong>Wingspan</strong>. Build a thriving bird sanctuary in a beautifully crafted game of
                            thoughtful choices and unexpected connections.
                        </p>
                        <div className="hero__meta">
                            <span>★ <strong>8.1</strong> rating</span><span>1–5 players</span><span>40–70
                                min</span><span>Strategy</span>
                        </div>
                        <div className="button-row">
                            <a className="button button--white" href="game-details.html">View Details <span
                                aria-hidden="true">↗</span></a>
                            {/* AUTHENTICATED USERS ONLY: collection actions require login. */}
                            <button className="button button--hero" type="button">+ Add to Vault</button>
                        </div>
                        <p className="hero__note">
                            For the curious. For the collectors. For game night.
                        </p>
                    </div>
                    <div className="hero__image">
                        <div className="hero__orbit" aria-hidden="true">
                        </div>
                        <img src={wingspanImage} alt="Illustrated Wingspan cover with a bird perched on a branch"
                            width="600" height="600" /><span className="hero__art-note">Your next favorite awaits.</span>
                    </div>
                </section>
                {/* ======================================================
                 DISCOVERY FILTERS
                 Future React component: <FilterBar />.
            ======================================================= */}
                <section className="discovery-filters" aria-label="Browse by category">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">
                                Find your kind of fun
                            </p>
                            <h2>
                                A seat at every table.
                            </h2>
                        </div>
                        <a className="text-link" href="catalog.html">Browse the full catalog <span aria-hidden="true">→</span></a>
                    </div>
                    <div className="chip-list">
                        <button type="button" className="chip is-active" aria-pressed="true">All Games</button>
                        <button type="button" className="chip" aria-pressed="false">Strategy</button>
                        <button type="button" className="chip" aria-pressed="false">Family</button>
                        <button type="button" className="chip" aria-pressed="false">Party</button>
                        <button type="button" className="chip" aria-pressed="false">Cooperative</button>
                        <button type="button" className="chip" aria-pressed="false">Card Games</button>
                        <button type="button" className="chip" aria-pressed="false">Abstract</button>
                    </div>
                    <div className="session-filters">
                        <span>Make it a game night:</span>
                        <div className="chip-list">
                            <button type="button" className="chip" aria-pressed="false">1–2 Players</button>
                            <button type="button" className="chip" aria-pressed="false">3–4 Players</button>
                            <button type="button" className="chip" aria-pressed="false">5+ Players</button>
                            <button type="button" className="chip" aria-pressed="false">Under 60 min</button>
                        </div>
                    </div>
                </section>
                {/* ======================================================
                 DISCOVER GAMES
                 Future React component: <DiscoverGames />.
            ======================================================= */}
                <section className="section" aria-labelledby="discover-title">
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
                </section>
                {/* ======================================================
                 COLLECTION INVITATION
                 Encourages visitors to curate a personal vault.
                 Future React component: <CollectionInvitation />.
            ======================================================= */}
                <section className="collection-banner">
                    <div>
                        <p className="eyebrow">
                            More than a shelf
                        </p>
                        <h2>
                            Your games. Your stories. Your vault.
                        </h2>
                        <p>
                            Keep the ones you love close, and leave a little room for what comes next.
                        </p>
                    </div>
                    <a className="button button--primary" href="my-vault.html">Explore My Vault →</a>
                </section>
            </main>
            {/* ======================================================
               SITE FOOTER
               Shared identity and secondary navigation.
               Future React component: <Footer />.
          ======================================================= */}
            <footer className="site-footer">
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
            </footer>
        </>
    );
}

export default App
