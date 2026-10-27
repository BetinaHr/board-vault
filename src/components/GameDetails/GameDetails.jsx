import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router'
import * as gameService from '../../services/gameService.js'
import useAuth from '../../hooks/useAuth.js';
import GameLikes from '../shared/GameLikes.jsx';
import Spinner from '../shared/Spinner.jsx';
import GameNotFound from '../shared/GameNotFound.jsx';
import GameError from '../shared/GameError.jsx';


export default function GameDetails() {
    // ID params from the URL
    const { gameId } = useParams();
    const navigate = useNavigate();

    // User state
    const { user, accessToken } = useAuth();

    // Saves the game data fetched from the API
    const [game, setGame] = useState(null);

    // Status handling for the API request: loading, error, and game data.
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [deleting, setDeleting] = useState(false);
    const [deleteError, setDeleteError] = useState(null);

    // Only the owner of the game should be able to delete it
    // Compares the logged-in user’s ID with the creator’s ID stored on the game.
    const isOwner = Boolean(user && game && user.id === game.owner_id);

    useEffect(() => {
        gameService.getById(gameId)
            .then(setGame)
            .catch(error => setError(error))
            .finally(() => setLoading(false));
    }, [gameId]);

    const deleteHandler = async () => {
        if (!isOwner || !accessToken || deleting) return;

        const confirmed = window.confirm(
            `Are you sure you want to delete "${game.title}"?`
        );

        if (!confirmed) return;

        setDeleting(true);
        setDeleteError(null);

        try {
            await gameService.remove(gameId, accessToken);
            navigate('/catalog');
        } catch (error) {
            setDeleteError(error.message);
            setDeleting(false);
        }
    };

    if (loading) {
        return (
            <Spinner />
        );
    }

    if (error) {
        return (
            <GameError />
        );
    }

    if (!game) {
        return (
            <GameNotFound />
        );
    }

    return (
        <>
            <section className="game-details" aria-labelledby="game-title">
                <div className="game-details__art">
                    <img src={game.image_url} alt={`Illustrated ${game.title} game cover`} width="600" height="600" />
                </div>
                <div className="game-details__content">
                    <div className="details-title">
                        <h1 id="game-title">
                            {game.title}
                        </h1>
                    </div>

                    <div className="chip-list">
                        <span className="badge">{game.category}</span>

                    </div>
                    
                    <p>
                        {game.description}
                    </p>

                    <dl className="game-facts">
                        <div>
                            <dt>
                                Players
                            </dt>
                            <dd>
                                {game.min_players}–{game.max_players}
                            </dd>
                        </div>
                        <div>
                            <dt>
                                Play time
                            </dt>
                            <dd>
                                {game.min_playtime !== game.max_playtime
                                    ? `${game.min_playtime}–${game.max_playtime}`
                                    : game.max_playtime}
                                {' '}
                                <small>min</small>
                            </dd>
                        </div>
                        <GameLikes key={game.id} game={game} />
                    </dl>

                    {isOwner && (
                        <div className="button-row">
                            <Link
                                className="button button--secondary button--small"
                                to={`/edit-game/${gameId}`}
                            >
                                Edit game
                            </Link>

                            <button
                                className="button button--danger-outline button--small"
                                type="button"
                                onClick={deleteHandler}
                                disabled={deleting}
                            >
                                {deleting ? 'Deleting...' : 'Delete game'}
                            </button>

                            {deleteError && (
                                <p role="alert">{deleteError}</p>
                            )}
                        </div>
                    )}
                </div>
            </section>

            <div className="details-layout">
                <div>
                    <section className="surface section" aria-labelledby="about-title">
                        <p className="eyebrow">
                            The story behind the game
                        </p>
                        <h2 id="about-title">
                            About {game.title}
                        </h2>
                        <p>
                            {game.story}
                        </p>

                        <h3>
                            Categories &amp; mechanics
                        </h3>
                        <div className="chip-list">
                            <span className="badge">{game.category}</span>
                        </div>
                    </section>
                </div>

                <aside className="surface game-information" aria-labelledby="info-title">

                    <h2 id="info-title">
                        Game information
                    </h2>

                    <dl className="information-list">
                        <div>
                            <dt>
                                Designer
                            </dt>
                            <dd>
                                {game.designer}
                            </dd>
                        </div>
                        <div>
                            <dt>
                                Release year
                            </dt>
                            <dd>
                                {game.release_year}
                            </dd>
                        </div>
                        <div>
                            <dt>
                                Minimum players
                            </dt>
                            <dd>
                                {game.min_players}
                            </dd>
                        </div>
                        <div>
                            <dt>
                                Maximum players
                            </dt>
                            <dd>
                                {game.max_players}
                            </dd>
                        </div>
                        <div>
                            <dt>
                                Playing time
                            </dt>
                            <dd>
                                {/* If the minimum playtime is equal to the maximum playtime, do not display it as an interval: 40-40 min */}
                                {game.min_playtime !== game.max_playtime
                                    ? `${game.min_playtime}–${game.max_playtime}`
                                    : game.max_playtime}
                                {' '}
                                <small>min</small>
                            </dd>
                        </div>
                        <div>
                            <dt>
                                Difficulty
                            </dt>
                            <dd>
                                {game.difficulty}
                            </dd>
                        </div>
                    </dl>
                </aside>
            </div>
        </>
    )
}
