import vaultIcon from '../assets/icons/vault.svg'

export default function NotFound() {
  return (
     <section className="not-found" aria-labelledby="not-found-title">
      <div className="not-found__art" role="img" aria-label="404">
        <span>4</span>
        <img src={vaultIcon} alt="" width="120" height="120" />
        <span>4</span>
      </div>

      <p className="eyebrow">A piece is missing</p>

      <h1 id="not-found-title">Game not found</h1>

      <p className="lead">
        The page you're looking for doesn't exist.
        <br />
        Let's get you back to the table.
      </p>

      <div className="button-row">
        <a className="button button--primary" href="index.html">
          Return Home
        </a>
        <a className="button button--secondary" href="catalog.html">
          Browse Games
        </a>
      </div>
    </section>
  );
}