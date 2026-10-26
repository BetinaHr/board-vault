import { NavLink } from "react-router";
import LikeButton from './LikeButton.jsx';


export default function GameCard({ game, onLikeChange }) {
    return (

        <article className="game-card">
            <div className="game-card__cover"
                aria-label="View Terraforming Mars details">
                <img className="game-card__image"
                    src={game.image_url} alt="Illustrated Terraforming Mars cover" width="600"
                    height="600" loading="lazy" />
            </div>
            <div className="game-card__body">

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
                    <NavLink className="button button--secondary button--small" to={`/game-details/${game.id}`}>View details</NavLink>
                    <LikeButton game={game} onLikeChange={onLikeChange} />
                </div>
            </div>
        </article>
    );
}