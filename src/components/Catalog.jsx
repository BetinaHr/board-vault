export default function Catalog() {
    return (
        <>
            {/* ====================================================== PAGE INTRODUCTION Page heading and contextual actions. Future React component: <PageHeading />. ======================================================= */}
            <div className="page-heading">
                <div>
                    <p className="eyebrow">
                        The collection
                    </p>
                    <h1>
                        Board Game Catalog
                    </h1>
                    <p className="lead">
                        Discover your next game. A world of possibilities, one table at a time.
                    </p>
                </div>
            </div>
            {/* ====================================================== CATALOG SEARCH AND FILTERS Visual search, filters, and sorting controls; no filtering is implemented. Future React component: <FilterBar />. ======================================================= */}
            <section className="filter-panel" aria-label="Catalog filters">
                <div className="catalog-search form-group">
                    <label htmlFor="catalog-search" className="form-label">
                        Search the collection
                    </label>
                    <input className="form-input" type="search" id="catalog-search" placeholder="Search by game name…" />
                </div>
                <div className="filter-bar">
                    <div className="form-group">
                        <label className="form-label" htmlFor="category">
                            Category
                        </label>
                        <select className="form-input" id="category"
                            name="category">
                            <option>
                                All categories
                            </option>
                            <option>
                                Strategy
                            </option>
                            <option>
                                Family
                            </option>
                            <option>
                                Party
                            </option>
                            <option>
                                Cooperative
                            </option>
                            <option>
                                Card Games
                            </option>
                            <option>
                                Abstract
                            </option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="players">
                            Players
                        </label>
                        <select className="form-input" id="players"
                            name="players">
                            <option>
                                Any player count
                            </option>
                            <option>
                                1–2 players
                            </option>
                            <option>
                                3–4 players
                            </option>
                            <option>
                                5+ players
                            </option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="play-time">
                            Play time
                        </label>
                        <select className="form-input" id="play-time"
                            name="play-time">
                            <option>
                                Any duration
                            </option>
                            <option>
                                Under 30 min
                            </option>
                            <option>
                                Under 60 min
                            </option>
                            <option>
                                60–120 min
                            </option>
                            <option>
                                Over 120 min
                            </option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="rating">
                            Rating
                        </label>
                        <select className="form-input" id="rating"
                            name="rating">
                            <option>
                                Any rating
                            </option>
                            <option>
                                7.0 and above
                            </option>
                            <option>
                                8.0 and above
                            </option>
                            <option>
                                9.0 and above
                            </option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="sort">
                            Sort by
                        </label>
                        <select className="form-input" id="sort"
                            name="sort">
                            <option>
                                Highest Rated
                            </option>
                            <option>
                                Newest
                            </option>
                            <option>
                                Alphabetical
                            </option>
                        </select>
                    </div>
                </div>
            </section>
            {/* ====================================================== CATALOG RESULTS Eight realistic sample games; all detail links lead to the example Wingspan page. Future React component: <CatalogResults />. ======================================================= */}
            <section className="section" aria-labelledby="results-title">
                <div className="section-heading">
                    <h2 id="results-title">
                        All games <span className="count">
                            8
                        </span>
                    </h2>
                    <span className="muted">
                        A great game night starts here.
                    </span>
                </div>
                {/* ====================================================== GAME GRID Responsive collection of game previews: one, two, or four columns. Future React component: <GameGrid />. ======================================================= */}
                <div className="game-grid">
                    {/* ====================================================== GAME CARD Catalog preview for Wingspan; metadata and actions share a reusable structure. Future React component: <GameCard />. ======================================================= */}
                    <article className="game-card">
                        <a className="game-card__cover" href="game-details.html" aria-label="View Wingspan details">
                            <img
                                className="game-card__image" src="assets/images/wingspan.svg" alt="Illustrated Wingspan cover"
                                width="600" height="600" loading="lazy" />
                            <span className="badge badge--cover">
                                Featured
                            </span>
                        </a>
                        <div className="game-card__body">
                            <div className="game-card__eyebrow">
                                <span>
                                    Strategy
                                </span>
                                <span className="rating">
                                    <span aria-hidden="true">
                                        ★</span> 8.1<span
                                            className="visually-hidden"> out of 10
                                    </span>
                                </span>
                            </div>
                            <h3 className="game-card__title">
                                <a href="game-details.html">
                                    Wingspan
                                </a>
                            </h3>
                            <p className="game-card__description">
                                Build a sanctuary, attract beautiful birds, and let your engine take flight.
                            </p>
                            <div className="game-card__meta">
                                <span>
                                    <span aria-hidden="true">
                                        ♙</span> 1–5 players
                                </span>
                                <span>
                                    <span
                                        aria-hidden="true">
                                        ◷</span> 40–70
                                    min
                                </span>
                            </div>
                            <div className="game-card__actions">
                                <a className="button button--secondary button--small" href="game-details.html">
                                    View details
                                </a>
                                <button className="favorite-button" type="button" aria-label="Add Wingspan to favorites" aria-pressed="false">♡</button>
                            </div>
                        </div>
                    </article>
                    {/* ====================================================== GAME CARD Catalog preview for Terraforming Mars; metadata and actions share a reusable structure. Future React component: <GameCard />. ======================================================= */}
                    <article className="game-card">
                        <a className="game-card__cover" href="game-details.html" aria-label="View Terraforming Mars details">
                            <img className="game-card__image"
                                src="assets/images/mars.svg" alt="Illustrated Terraforming Mars cover" width="600"
                                height="600" loading="lazy" />
                            <span className="badge badge--cover">
                                Community favorite
                            </span>
                        </a>
                        <div className="game-card__body">
                            <div className="game-card__eyebrow">
                                <span>
                                    Strategy
                                </span>
                                <span className="rating">
                                    <span aria-hidden="true">
                                        ★</span> 8.4<span
                                            className="visually-hidden"> out of 10
                                    </span>
                                </span>
                            </div>
                            <h3 className="game-card__title">
                                <a href="game-details.html">
                                    Terraforming Mars
                                </a>
                            </h3>
                            <p className="game-card__description">
                                Turn the red planet into a thriving new world, one ambitious project at a time.
                            </p>
                            <div className="game-card__meta">
                                <span>
                                    <span aria-hidden="true">
                                        ♙</span> 1–5 players
                                </span>
                                <span>
                                    <span
                                        aria-hidden="true">
                                        ◷</span> 120
                                    min
                                </span>
                            </div>
                            <div className="game-card__actions">
                                <a className="button button--secondary button--small" href="game-details.html">
                                    View details
                                </a>
                                <button className="favorite-button" type="button" aria-label="Add Terraforming Mars to favorites" aria-pressed="false">♡</button>
                            </div>
                        </div>
                    </article>
                    {/* ====================================================== GAME CARD Catalog preview for Azul; metadata and actions share a reusable structure. Future React component: <GameCard />. ======================================================= */}
                    <article className="game-card">
                        <a className="game-card__cover" href="game-details.html" aria-label="View Azul details">
                            <img
                                className="game-card__image" src="assets/images/azul.svg" alt="Illustrated Azul cover"
                                width="600" height="600" loading="lazy" />
                        </a>
                        <div className="game-card__body">
                            <div className="game-card__eyebrow">
                                <span>
                                    Abstract
                                </span>
                                <span className="rating">
                                    <span aria-hidden="true">
                                        ★</span> 7.8<span
                                            className="visually-hidden"> out of 10
                                    </span>
                                </span>
                            </div>
                            <h3 className="game-card__title">
                                <a href="game-details.html">
                                    Azul
                                </a>
                            </h3>
                            <p className="game-card__description">
                                Draft colorful tiles and create a mosaic worthy of a royal palace.
                            </p>
                            <div className="game-card__meta">
                                <span>
                                    <span aria-hidden="true">
                                        ♙</span> 2–4 players
                                </span>
                                <span>
                                    <span
                                        aria-hidden="true">
                                        ◷</span> 30–45
                                    min
                                </span>
                            </div>
                            <div className="game-card__actions">
                                <a className="button button--secondary button--small" href="game-details.html">
                                    View details
                                </a>
                                <button className="favorite-button" type="button" aria-label="Add Azul to favorites" aria-pressed="false">♡</button>
                            </div>
                        </div>
                    </article>
                    {/* ====================================================== GAME CARD Catalog preview for Catan; metadata and actions share a reusable structure. Future React component: <GameCard />. ======================================================= */}
                    <article className="game-card">
                        <a className="game-card__cover" href="game-details.html" aria-label="View Catan details">
                            <img
                                className="game-card__image" src="assets/images/catan.svg" alt="Illustrated Catan cover"
                                width="600" height="600" loading="lazy" />
                            <span className="badge badge--cover">
                                Classic
                            </span>
                        </a>
                        <div className="game-card__body">
                            <div className="game-card__eyebrow">
                                <span>
                                    Strategy
                                </span>
                                <span className="rating">
                                    <span aria-hidden="true">
                                        ★</span> 7.1<span
                                            className="visually-hidden"> out of 10
                                    </span>
                                </span>
                            </div>
                            <h3 className="game-card__title">
                                <a href="game-details.html">
                                    Catan
                                </a>
                            </h3>
                            <p className="game-card__description">
                                Trade, build, and settle an island where every resource tells a story.
                            </p>
                            <div className="game-card__meta">
                                <span>
                                    <span aria-hidden="true">
                                        ♙</span> 3–4 players
                                </span>
                                <span>
                                    <span
                                        aria-hidden="true">
                                        ◷</span> 60–120
                                    min
                                </span>
                            </div>
                            <div className="game-card__actions">
                                <a className="button button--secondary button--small" href="game-details.html">
                                    View details
                                </a>
                                <button className="favorite-button" type="button" aria-label="Add Catan to favorites" aria-pressed="false">♡</button>
                            </div>
                        </div>
                    </article>
                    {/* ====================================================== GAME CARD Catalog preview for Carcassonne; metadata and actions share a reusable structure. Future React component: <GameCard />. ======================================================= */}
                    <article className="game-card">
                        <a className="game-card__cover" href="game-details.html" aria-label="View Carcassonne details">
                            <img
                                className="game-card__image" src="assets/images/carcassonne.svg"
                                alt="Illustrated Carcassonne cover" width="600" height="600" loading="lazy" />
                        </a>
                        <div className="game-card__body">
                            <div className="game-card__eyebrow">
                                <span>
                                    Family
                                </span>
                                <span className="rating">
                                    <span aria-hidden="true">
                                        ★</span> 7.4<span
                                            className="visually-hidden"> out of 10
                                    </span>
                                </span>
                            </div>
                            <h3 className="game-card__title">
                                <a href="game-details.html">
                                    Carcassonne
                                </a>
                            </h3>
                            <p className="game-card__description">
                                Shape a medieval landscape of winding roads, cities, and quiet fields.
                            </p>
                            <div className="game-card__meta">
                                <span>
                                    <span aria-hidden="true">
                                        ♙</span> 2–5 players
                                </span>
                                <span>
                                    <span
                                        aria-hidden="true">
                                        ◷</span> 30–45
                                    min
                                </span>
                            </div>
                            <div className="game-card__actions">
                                <a className="button button--secondary button--small" href="game-details.html">
                                    View details
                                </a>
                                <button className="favorite-button" type="button" aria-label="Add Carcassonne to favorites" aria-pressed="false">♡</button>
                            </div>
                        </div>
                    </article>
                    {/* ====================================================== GAME CARD Catalog preview for Pandemic; metadata and actions share a reusable structure. Future React component: <GameCard />. ======================================================= */}
                    <article className="game-card">
                        <a className="game-card__cover" href="game-details.html" aria-label="View Pandemic details">
                            <img
                                className="game-card__image" src="assets/images/pandemic.svg" alt="Illustrated Pandemic cover"
                                width="600" height="600" loading="lazy" />
                            <span
                                className="badge badge--cover">
                                Cooperative
                            </span>
                        </a>
                        <div className="game-card__body">
                            <div className="game-card__eyebrow">
                                <span>
                                    Cooperative
                                </span>
                                <span className="rating">
                                    <span aria-hidden="true">
                                        ★</span> 7.6<span
                                            className="visually-hidden"> out of 10
                                    </span>
                                </span>
                            </div>
                            <h3 className="game-card__title">
                                <a href="game-details.html">
                                    Pandemic
                                </a>
                            </h3>
                            <p className="game-card__description">
                                Team up to save the world. Every decision matters, and everyone wins together.
                            </p>
                            <div className="game-card__meta">
                                <span>
                                    <span aria-hidden="true">
                                        ♙</span> 2–4 players
                                </span>
                                <span>
                                    <span
                                        aria-hidden="true">
                                        ◷</span> 45
                                    min
                                </span>
                            </div>
                            <div className="game-card__actions">
                                <a className="button button--secondary button--small" href="game-details.html">
                                    View details
                                </a>
                                <button className="favorite-button" type="button" aria-label="Add Pandemic to favorites" aria-pressed="false">♡</button>
                            </div>
                        </div>
                    </article>
                    {/* ====================================================== GAME CARD Catalog preview for Ticket to Ride; metadata and actions share a reusable structure. Future React component: <GameCard />. ======================================================= */}
                    <article className="game-card">
                        <a className="game-card__cover" href="game-details.html" aria-label="View Ticket to Ride details">
                            <img
                                className="game-card__image" src="assets/images/ticket.svg"
                                alt="Illustrated Ticket to Ride cover" width="600" height="600" loading="lazy" />
                        </a>
                        <div className="game-card__body">
                            <div className="game-card__eyebrow">
                                <span>
                                    Family
                                </span>
                                <span className="rating">
                                    <span aria-hidden="true">
                                        ★</span> 7.4<span
                                            className="visually-hidden"> out of 10
                                    </span>
                                </span>
                            </div>
                            <h3 className="game-card__title">
                                <a href="game-details.html">
                                    Ticket to Ride
                                </a>
                            </h3>
                            <p className="game-card__description">
                                Connect cities and chase your next great railway adventure.
                            </p>
                            <div className="game-card__meta">
                                <span>
                                    <span aria-hidden="true">
                                        ♙</span> 2–5 players
                                </span>
                                <span>
                                    <span
                                        aria-hidden="true">
                                        ◷</span> 30–60
                                    min
                                </span>
                            </div>
                            <div className="game-card__actions">
                                <a className="button button--secondary button--small" href="game-details.html">
                                    View details
                                </a>
                                <button className="favorite-button" type="button" aria-label="Add Ticket to Ride to favorites" aria-pressed="false">♡</button>
                            </div>
                        </div>
                    </article>
                    {/* ====================================================== GAME CARD Catalog preview for 7 Wonders; metadata and actions share a reusable structure. Future React component: <GameCard />. ======================================================= */}
                    <article className="game-card">
                        <a className="game-card__cover" href="game-details.html" aria-label="View 7 Wonders details">
                            <img
                                className="game-card__image" src="assets/images/wonders.svg" alt="Illustrated 7 Wonders cover"
                                width="600" height="600" loading="lazy" />
                        </a>
                        <div className="game-card__body">
                            <div className="game-card__eyebrow">
                                <span>
                                    Card Games
                                </span>
                                <span className="rating">
                                    <span aria-hidden="true">
                                        ★</span> 7.7<span
                                            className="visually-hidden"> out of 10
                                    </span>
                                </span>
                            </div>
                            <h3 className="game-card__title">
                                <a href="game-details.html">
                                    7 Wonders
                                </a>
                            </h3>
                            <p className="game-card__description">
                                Lead an ancient civilization and leave a wonder for the ages.
                            </p>
                            <div className="game-card__meta">
                                <span>
                                    <span aria-hidden="true">
                                        ♙</span> 2–7 players
                                </span>
                                <span>
                                    <span
                                        aria-hidden="true">
                                        ◷</span> 30
                                    min
                                </span>
                            </div>
                            <div className="game-card__actions">
                                <a className="button button--secondary button--small" href="game-details.html">
                                    View details
                                </a>
                                <button className="favorite-button" type="button" aria-label="Add 7 Wonders to favorites" aria-pressed="false">♡</button>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
            {/* ====================================================== API PRESENTATION STATES Expandable demonstrations of future loading and failure states. Future React component: <CatalogStates />. ======================================================= */}
            <details className="state-preview">
                <summary>
                    Collection loading &amp; connection states
                </summary>
                {/* ====================================================== LOADING STATE Static skeleton cards displayed while future API requests are pending. Future React component: <LoadingState />. ======================================================= */}
                <section className="state-section" aria-labelledby="loading-title">
                    <h3 id="loading-title">
                        Loading games…
                    </h3>
                    <div className="skeleton-grid" aria-hidden="true">
                        <div className="skeleton-card">
                            <div className="skeleton skeleton-image">
                            </div>
                            <div className="skeleton skeleton-text">
                            </div>
                            <div className="skeleton skeleton-text skeleton-text--short">
                            </div>
                        </div>
                        <div className="skeleton-card">
                            <div className="skeleton skeleton-image">
                            </div>
                            <div className="skeleton skeleton-text">
                            </div>
                            <div className="skeleton skeleton-text skeleton-text--short">
                            </div>
                        </div>
                        <div className="skeleton-card">
                            <div className="skeleton skeleton-image">
                            </div>
                            <div className="skeleton skeleton-text">
                            </div>
                            <div className="skeleton skeleton-text skeleton-text--short">
                            </div>
                        </div>
                        <div className="skeleton-card">
                            <div className="skeleton skeleton-image">
                            </div>
                            <div className="skeleton skeleton-text">
                            </div>
                            <div className="skeleton skeleton-text skeleton-text--short">
                            </div>
                        </div>
                    </div>
                </section>
                {/* ====================================================== API ERROR STATE Recoverable connection error with a visual retry action. Future React component: <ApiError />. ======================================================= */}
                <section className="error-state" aria-labelledby="error-title">
                    <span className="state-icon" aria-hidden="true">
                        !
                    </span>
                    <h3 id="error-title">
                        Something went wrong
                    </h3>
                    <p>
                        We couldn't load the board games. Please try again.
                    </p>
                    <button className="button button--secondary" type="button">
                        Try Again
                    </button>
                </section>
            </details>
        </>
    );
}