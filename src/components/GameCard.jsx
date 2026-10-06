import marsImage from '../assets/images/mars.svg'


export default function GameCard() {
  return (
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
  );
}