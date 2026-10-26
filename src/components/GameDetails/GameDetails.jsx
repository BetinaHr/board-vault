import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router'
import * as gameService from '../../services/gameService.js'
import useAuth from '../../hooks/useAuth.js';


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

    if (loading) return <p>Loading...</p>;
    if (error) return <p role="alert">{error.message}</p>;
    if (!game) return <p>Game not found.</p>;

    return (
        <>
            <section className="game-details" aria-labelledby="game-title">
                <div className="game-details__art">
                    <img src={game.image_url} alt={`Illustrated ${game.title} game cover`} width="600" height="600" /><span className="art-caption">A game as beautiful as the birds it celebrates.</span>
                </div>
                <div className="game-details__content">
                    <div className="details-title">
                        <h1 id="game-title">
                            {game.title}
                        </h1>
                    </div>

                    <div className="chip-list">
                        <span className="badge">{game.category}</span>

                        {/* Mechanics is an array of strings in the database */}
                        {/* Add each mechanic in a separate badge */}
                        {game.mechanics?.map(mechanic => {
                            return <span key={mechanic} className="badge">{mechanic}</span>;
                        })}
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
                        {/* <div>
                            <dt>
                                Age
                            </dt>
                            <dd>
                                10+
                            </dd>
                        </div> */}
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
                    {/* Future React component: <GameAbout />. */}
                    <section className="surface section" aria-labelledby="about-title">
                        <p className="eyebrow">
                            The story behind the game
                        </p>
                        <h2 id="about-title">
                            About Wingspan
                        </h2>
                        <p>
                            {game.story}
                        </p>

                        <h3>
                            Categories &amp; mechanics
                        </h3>
                        <div className="chip-list">
                            <span className="badge">Strategy</span><span className="badge">Card Drafting</span><span className="badge">Engine Building</span><span className="badge">Set Collection</span>
                        </div>
                    </section>
                    {/* ======================================================
               COMMUNITY INTERACTION
          ======================================================= */}
                    <section className="surface section" aria-labelledby="community-title">
                        <div className="section-heading">
                            <h2 id="community-title">
                                Around the table <span className="count">2</span>
                            </h2>
                            <button className="button button--text" type="button" aria-pressed="false">♡ Like · 128</button>
                        </div>
                        <div className="comment-list">
                            {/* ======================================================
                   COMMUNITY COMMENT
                   One member’s name, date, and game impression.
                   Future React component: <Comment />.
              ======================================================= */}
                            <article className="comment-card">
                                <span className="avatar" aria-hidden="true">AM</span>
                                <div>
                                    <h3>
                                        Alex <span className="comment-date">October 2, 2026</span>
                                    </h3>
                                    <p>
                                        Great strategy game with beautiful artwork. The engine really comes together in the final round!
                                    </p>
                                </div>
                            </article>
                            {/* ======================================================
                   COMMUNITY COMMENT
              ======================================================= */}
                            <article className="comment-card">
                                <span className="avatar avatar--sage" aria-hidden="true">MR</span>
                                <div>
                                    <h3>
                                        Maria <span className="comment-date">October 4, 2026</span>
                                    </h3>
                                    <p>
                                        Works surprisingly well with two players. It's become our favorite quiet Sunday game.
                                    </p>
                                </div>
                            </article>
                        </div>
                        {/* ======================================================
                 COMMENT COMPOSER
                 Authenticated members can later post a comment through React.
                 Future React component: <CommentForm />.
            ======================================================= */}
                        {/* AUTHENTICATED USERS ONLY: guests should see a login invitation instead. */}
                        <form className="comment-form">
                            <label className="form-label" htmlFor="comment">Share your experience</label>
                            <textarea className="form-input" id="comment" name="comment" rows="4" placeholder="What makes this game special at your table?"></textarea>
                            <div className="form-actions">
                                <button className="button button--primary" type="button">Post Comment</button>
                            </div>
                        </form>
                    </section>
                </div>
                {/* ======================================================
             GAME INFORMATION
             Structured information for the game, suitable for a reusable detail list.
             Future React component: <GameInformation />.
        ======================================================= */}
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
