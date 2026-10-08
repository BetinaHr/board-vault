import { NavLink } from "react-router";

export default function GameCard({ game }) {
    return (

        <article className="game-card">
            <a className="game-card__cover" href="game-details.html"
                aria-label="View Terraforming Mars details">
                <img className="game-card__image"
                    src={game.image_url} alt="Illustrated Terraforming Mars cover" width="600"
                    height="600" loading="lazy" />
                {/* <span className="badge badge--cover">Community favorite</span> */}
            </a>
            <div className="game-card__body">
                {/* <div className="game-card__eyebrow">
                    <span>Strategy</span><span className="rating"><span aria-hidden="true">★</span> 8.4<span
                        className="visually-hidden"> out of 10</span></span>
                </div> */}
                <h3 className="game-card__title">
                    <a href="game-details.html">{game.title}</a>
                </h3>
                <p className="game-card__description">
                    {game.description}
                </p>
                <div className="game-card__meta">
                    <span>
                        <span aria-hidden="true">♙</span>
                        {game.min_players}–{game.max_players} players
                    </span>

                    <span>
                        <span aria-hidden="true">◷</span>

                        {game.min_playtime !== game.max_playtime ? game.min_playtime + '-' + game.max_playtime : game.min_playtime}
                        min</span>
                </div>

                <div className="game-card__actions">
                    {/* TODO: Implement dynamic game details view */}
                    <NavLink className="button button--secondary button--small" to={`/game-details/${game.id}`}>View details</NavLink>
                    {/* <a className="button button--secondary button--small" href="game-details.html">View details</a> */}
                    <button className="favorite-button" type="button" aria-label={`Add ${game.title} to favorites`} aria-pressed="false">
                        ♡
                    </button>
                </div>
            </div>
        </article>
    );
}