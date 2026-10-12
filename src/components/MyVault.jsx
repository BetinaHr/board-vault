export default function MyVault() {
  return (
  <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    {/* ======================================================
         SITE HEADER
         Shared branding, navigation, search, and account actions.
         Future React component: <Header />.
    ======================================================= */}
    <header className="site-header">
      <div className="container header-layout">
        <a className="brand" href="index.html"><img src="assets/icons/vault.svg" width="36" height="36" alt="" /><span>Board<span className="brand__accent">Vault</span></span></a>
        {/* ======================================================
             PRIMARY NAVIGATION
             Current page is marked with aria-current.
             Future React component: <Navigation />.
        ======================================================= */}
        <nav className="site-nav" aria-label="Primary">
          <a href="index.html">Discover</a>
          <a href="catalog.html">Catalog</a>
          <a href="my-vault.html" aria-current="page">My Vault</a>
          <a href="create-game.html">Add Game</a>
        </nav>
        {/* ======================================================
             HEADER SEARCH
             Visual search field; future search behavior belongs in React.
             Future React component: <SearchBar />.
        ======================================================= */}
        <div className="header-search">
          <label className="visually-hidden" htmlFor="header-search">Search board games</label>
          <span aria-hidden="true">⌕</span><input id="header-search" type="search" placeholder="Find your next game…" />
        </div>
        <div className="header-account">
          {/* AUTHENTICATED USERS ONLY: render account actions after login. */}
          <a className="avatar" href="profile.html" aria-label="Alex Morgan's profile">AM</a>
          <button className="button button--text" type="button">Logout</button>
        </div>
      </div>
    </header>
    <main id="main-content" className="container main-content">
      {/* AUTHENTICATED USERS ONLY: this page represents a private collection. */}
      {/* ======================================================
           PAGE INTRODUCTION
           Page heading and contextual actions.
           Future React component: <PageHeading />.
      ======================================================= */}
      <div className="page-heading">
        <div>
          <p className="eyebrow">
            Collected with care
          </p>
          <h1>
            My Vault
          </h1>
          <p className="lead">
            Your personal board game collection. Every box has a story.
          </p>
        </div>
        <a className="button button--primary" href="create-game.html">+ Add Game</a>
      </div>
      {/* ======================================================
           COLLECTION STATISTICS
           Summary counts for a personal collection.
           Future React component: <CollectionStats />.
      ======================================================= */}
      <dl className="profile-stats">
        <div>
          <dt>
            Games
          </dt>
          <dd>
            24
          </dd>
        </div>
        <div>
          <dt>
            Played
          </dt>
          <dd>
            12
          </dd>
        </div>
        <div>
          <dt>
            Favorites
          </dt>
          <dd>
            8
          </dd>
        </div>
        <div>
          <dt>
            Wishlist
          </dt>
          <dd>
            4
          </dd>
        </div>
      </dl>
      {/* ======================================================
           COLLECTION FILTERS
           Visual status filters; counts summarize a larger future collection.
           Future React component: <VaultFilters />.
      ======================================================= */}
      <section className="vault-filters" aria-label="Filter your collection">
        <div className="chip-list">
          <button type="button" className="chip is-active" aria-pressed="true">All</button>
          <button type="button" className="chip" aria-pressed="false">Owned</button>
          <button type="button" className="chip" aria-pressed="false">Favorites</button>
          <button type="button" className="chip" aria-pressed="false">Wishlist</button>
          <button type="button" className="chip" aria-pressed="false">Played</button>
        </div>
        <span className="muted">8 highlights from your vault</span>
      </section>
      {/* ======================================================
           PERSONAL COLLECTION
           Representative collection cards with ownership and play status.
           Future React component: <VaultCollection />.
      ======================================================= */}
      <section aria-labelledby="vault-games">
        <h2 id="vault-games" className="visually-hidden">
          Games in your vault
        </h2>
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
            <a className="game-card__cover" href="game-details.html" aria-label="View Wingspan details"><img className="game-card__image" src="assets/images/wingspan.svg" alt="Illustrated Wingspan cover" width="600" height="600" loading="lazy" /><span className="badge badge--cover">Featured</span></a>
            <div className="game-card__body">
              <div className="game-card__eyebrow">
                <span>Strategy</span><span className="rating"><span aria-hidden="true">★</span> 8.1<span className="visually-hidden"> out of 10</span></span>
              </div>
              <h3 className="game-card__title">
                <a href="game-details.html">Wingspan</a>
              </h3>
              <p className="game-card__description">
                Build a sanctuary, attract beautiful birds, and let your engine take flight.
              </p>
              <div className="game-card__meta">
                <span><span aria-hidden="true">♙</span> 1–5 players</span><span><span aria-hidden="true">◷</span> 40–70 min</span>
              </div>
              <span className="badge badge--status">Owned</span>
              <div className="game-card__actions">
                <a className="button button--secondary button--small" href="game-details.html">View details</a>
                <button className="favorite-button" type="button" aria-label="Add Wingspan to favorites" aria-pressed="false">♡</button>
              </div>
            </div>
          </article>
          {/* ======================================================
               GAME CARD
               Catalog preview for Terraforming Mars; metadata and actions share a reusable structure.
               Future React component: <GameCard />.
          ======================================================= */}
          <article className="game-card">
            <a className="game-card__cover" href="game-details.html" aria-label="View Terraforming Mars details"><img className="game-card__image" src="assets/images/mars.svg" alt="Illustrated Terraforming Mars cover" width="600" height="600" loading="lazy" /><span className="badge badge--cover">Community favorite</span></a>
            <div className="game-card__body">
              <div className="game-card__eyebrow">
                <span>Strategy</span><span className="rating"><span aria-hidden="true">★</span> 8.4<span className="visually-hidden"> out of 10</span></span>
              </div>
              <h3 className="game-card__title">
                <a href="game-details.html">Terraforming Mars</a>
              </h3>
              <p className="game-card__description">
                Turn the red planet into a thriving new world, one ambitious project at a time.
              </p>
              <div className="game-card__meta">
                <span><span aria-hidden="true">♙</span> 1–5 players</span><span><span aria-hidden="true">◷</span> 120 min</span>
              </div>
              <span className="badge badge--status">Wishlist</span>
              <div className="game-card__actions">
                <a className="button button--secondary button--small" href="game-details.html">View details</a>
                <button className="favorite-button" type="button" aria-label="Add Terraforming Mars to favorites" aria-pressed="false">♡</button>
              </div>
            </div>
          </article>
          {/* ======================================================
               GAME CARD
               Catalog preview for Azul; metadata and actions share a reusable structure.
               Future React component: <GameCard />.
          ======================================================= */}
          <article className="game-card">
            <a className="game-card__cover" href="game-details.html" aria-label="View Azul details"><img className="game-card__image" src="assets/images/azul.svg" alt="Illustrated Azul cover" width="600" height="600" loading="lazy" /></a>
            <div className="game-card__body">
              <div className="game-card__eyebrow">
                <span>Abstract</span><span className="rating"><span aria-hidden="true">★</span> 7.8<span className="visually-hidden"> out of 10</span></span>
              </div>
              <h3 className="game-card__title">
                <a href="game-details.html">Azul</a>
              </h3>
              <p className="game-card__description">
                Draft colorful tiles and create a mosaic worthy of a royal palace.
              </p>
              <div className="game-card__meta">
                <span><span aria-hidden="true">♙</span> 2–4 players</span><span><span aria-hidden="true">◷</span> 30–45 min</span>
              </div>
              <span className="badge badge--status">Favorite</span>
              <div className="game-card__actions">
                <a className="button button--secondary button--small" href="game-details.html">View details</a>
                <button className="favorite-button is-favorite" type="button" aria-label="Remove Azul from favorites" aria-pressed="true">♥</button>
              </div>
            </div>
          </article>
          {/* ======================================================
               GAME CARD
               Catalog preview for Catan; metadata and actions share a reusable structure.
               Future React component: <GameCard />.
          ======================================================= */}
          <article className="game-card">
            <a className="game-card__cover" href="game-details.html" aria-label="View Catan details"><img className="game-card__image" src="assets/images/catan.svg" alt="Illustrated Catan cover" width="600" height="600" loading="lazy" /><span className="badge badge--cover">Classic</span></a>
            <div className="game-card__body">
              <div className="game-card__eyebrow">
                <span>Strategy</span><span className="rating"><span aria-hidden="true">★</span> 7.1<span className="visually-hidden"> out of 10</span></span>
              </div>
              <h3 className="game-card__title">
                <a href="game-details.html">Catan</a>
              </h3>
              <p className="game-card__description">
                Trade, build, and settle an island where every resource tells a story.
              </p>
              <div className="game-card__meta">
                <span><span aria-hidden="true">♙</span> 3–4 players</span><span><span aria-hidden="true">◷</span> 60–120 min</span>
              </div>
              <span className="badge badge--status">Played</span>
              <div className="game-card__actions">
                <a className="button button--secondary button--small" href="game-details.html">View details</a>
                <button className="favorite-button" type="button" aria-label="Add Catan to favorites" aria-pressed="false">♡</button>
              </div>
            </div>
          </article>
          {/* ======================================================
               GAME CARD
               Catalog preview for Carcassonne; metadata and actions share a reusable structure.
               Future React component: <GameCard />.
          ======================================================= */}
          <article className="game-card">
            <a className="game-card__cover" href="game-details.html" aria-label="View Carcassonne details"><img className="game-card__image" src="assets/images/carcassonne.svg" alt="Illustrated Carcassonne cover" width="600" height="600" loading="lazy" /></a>
            <div className="game-card__body">
              <div className="game-card__eyebrow">
                <span>Family</span><span className="rating"><span aria-hidden="true">★</span> 7.4<span className="visually-hidden"> out of 10</span></span>
              </div>
              <h3 className="game-card__title">
                <a href="game-details.html">Carcassonne</a>
              </h3>
              <p className="game-card__description">
                Shape a medieval landscape of winding roads, cities, and quiet fields.
              </p>
              <div className="game-card__meta">
                <span><span aria-hidden="true">♙</span> 2–5 players</span><span><span aria-hidden="true">◷</span> 30–45 min</span>
              </div>
              <span className="badge badge--status">Owned</span>
              <div className="game-card__actions">
                <a className="button button--secondary button--small" href="game-details.html">View details</a>
                <button className="favorite-button" type="button" aria-label="Add Carcassonne to favorites" aria-pressed="false">♡</button>
              </div>
            </div>
          </article>
          {/* ======================================================
               GAME CARD
               Catalog preview for Pandemic; metadata and actions share a reusable structure.
               Future React component: <GameCard />.
          ======================================================= */}
          <article className="game-card">
            <a className="game-card__cover" href="game-details.html" aria-label="View Pandemic details"><img className="game-card__image" src="assets/images/pandemic.svg" alt="Illustrated Pandemic cover" width="600" height="600" loading="lazy" /><span className="badge badge--cover">Cooperative</span></a>
            <div className="game-card__body">
              <div className="game-card__eyebrow">
                <span>Cooperative</span><span className="rating"><span aria-hidden="true">★</span> 7.6<span className="visually-hidden"> out of 10</span></span>
              </div>
              <h3 className="game-card__title">
                <a href="game-details.html">Pandemic</a>
              </h3>
              <p className="game-card__description">
                Team up to save the world. Every decision matters, and everyone wins together.
              </p>
              <div className="game-card__meta">
                <span><span aria-hidden="true">♙</span> 2–4 players</span><span><span aria-hidden="true">◷</span> 45 min</span>
              </div>
              <span className="badge badge--status">Favorite</span>
              <div className="game-card__actions">
                <a className="button button--secondary button--small" href="game-details.html">View details</a>
                <button className="favorite-button is-favorite" type="button" aria-label="Remove Pandemic from favorites" aria-pressed="true">♥</button>
              </div>
            </div>
          </article>
          {/* ======================================================
               GAME CARD
               Catalog preview for Ticket to Ride; metadata and actions share a reusable structure.
               Future React component: <GameCard />.
          ======================================================= */}
          <article className="game-card">
            <a className="game-card__cover" href="game-details.html" aria-label="View Ticket to Ride details"><img className="game-card__image" src="assets/images/ticket.svg" alt="Illustrated Ticket to Ride cover" width="600" height="600" loading="lazy" /></a>
            <div className="game-card__body">
              <div className="game-card__eyebrow">
                <span>Family</span><span className="rating"><span aria-hidden="true">★</span> 7.4<span className="visually-hidden"> out of 10</span></span>
              </div>
              <h3 className="game-card__title">
                <a href="game-details.html">Ticket to Ride</a>
              </h3>
              <p className="game-card__description">
                Connect cities and chase your next great railway adventure.
              </p>
              <div className="game-card__meta">
                <span><span aria-hidden="true">♙</span> 2–5 players</span><span><span aria-hidden="true">◷</span> 30–60 min</span>
              </div>
              <span className="badge badge--status">Played</span>
              <div className="game-card__actions">
                <a className="button button--secondary button--small" href="game-details.html">View details</a>
                <button className="favorite-button" type="button" aria-label="Add Ticket to Ride to favorites" aria-pressed="false">♡</button>
              </div>
            </div>
          </article>
          {/* ======================================================
               GAME CARD
               Catalog preview for 7 Wonders; metadata and actions share a reusable structure.
               Future React component: <GameCard />.
          ======================================================= */}
          <article className="game-card">
            <a className="game-card__cover" href="game-details.html" aria-label="View 7 Wonders details"><img className="game-card__image" src="assets/images/wonders.svg" alt="Illustrated 7 Wonders cover" width="600" height="600" loading="lazy" /></a>
            <div className="game-card__body">
              <div className="game-card__eyebrow">
                <span>Card Games</span><span className="rating"><span aria-hidden="true">★</span> 7.7<span className="visually-hidden"> out of 10</span></span>
              </div>
              <h3 className="game-card__title">
                <a href="game-details.html">7 Wonders</a>
              </h3>
              <p className="game-card__description">
                Lead an ancient civilization and leave a wonder for the ages.
              </p>
              <div className="game-card__meta">
                <span><span aria-hidden="true">♙</span> 2–7 players</span><span><span aria-hidden="true">◷</span> 30 min</span>
              </div>
              <span className="badge badge--status">Wishlist</span>
              <div className="game-card__actions">
                <a className="button button--secondary button--small" href="game-details.html">View details</a>
                <button className="favorite-button" type="button" aria-label="Add 7 Wonders to favorites" aria-pressed="false">♡</button>
              </div>
            </div>
          </article>
        </div>
      </section>
      {/* ======================================================
           EMPTY COLLECTION DEMONSTRATION
           Expandable preview for members before their first collection addition.
           Future React component: <EmptyState />.
      ======================================================= */}
      <details className="state-preview">
        <summary>
          First-visit collection state
        </summary>
        <section className="empty-state">
          <span className="empty-state__symbol" aria-hidden="true">◇</span>
          <p className="eyebrow">
            A fresh start
          </p>
          <h2>
            Your vault is empty
          </h2>
          <p>
            You haven't added any board games yet.<br />Find something you'll want to bring to the table.
          </p>
          <a className="button button--primary" href="catalog.html">Explore Games →</a>
        </section>
      </details>
    </main>
    {/* ======================================================
         SITE FOOTER
         Shared identity and secondary navigation.
         Future React component: <Footer />.
    ======================================================= */}
    <footer className="site-footer">
      <div className="container footer-layout">
        <a className="brand" href="index.html"><img src="assets/icons/vault.svg" alt="" width="30" height="30" />BoardVault</a>
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

