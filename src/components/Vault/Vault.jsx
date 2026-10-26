import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import useAuth from '../../hooks/useAuth.js';
import GameCard from '../shared/GameCard.jsx';
import * as gameService from '../../services/gameService.js';

export default function MyVault() {
    const { user, accessToken } = useAuth();
    const userId = user?.id;

    const [result, setResult] = useState(null);

    const loading = result?.userId !== userId;
    const games = loading ? [] : result.games;
    const error = loading ? null : result.error;

    useEffect(() => {
        if (!userId || !accessToken) return;

        let ignore = false;

        gameService.getOwned(userId, accessToken)
            .then(games => {
                if (!ignore) {
                    setResult({ userId, games, error: null });
                }
            })
            .catch(error => {
                if (!ignore) {
                    setResult({
                        userId,
                        games: [],
                        error: error.message,
                    });
                }
            });

        return () => {
            ignore = true;
        };
    }, [userId, accessToken]);

    if (!user) {
        return (
            <p>
                Please <Link to="/login">log in</Link> to view your vault.
            </p>
        );
    }

    return (
        <>
            <a className="skip-link" href="#main-content">Skip to content</a>
            {/* <PageHeading />.*/}
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
            {/* <CollectionStats />*/}
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
            {/* <VaultFilters /> */}
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
            {/* <VaultCollection /> */}
            <section aria-labelledby="vault-games">
                <h2 id="vault-games" className="visually-hidden">
                    Games in your vault
                </h2>

                {loading ? (
                    <p>Loading your games...</p>
                ) : error ? (
                    <p role="alert">{error}</p>
                ) : games.length > 0 ? (
                    <div className="game-grid">
                        {games.map(game => (
                            <GameCard key={game.id} game={game} />
                        ))}
                    </div>
                ) : (
                    <section className="empty-state">
                        <span className="empty-state__symbol" aria-hidden="true">
                            ◇
                        </span>

                        <p className="eyebrow">A fresh start</p>
                        <h2>Your vault is empty</h2>

                        <p>
                            You haven't added any board games yet.
                            <br />
                            Add your first game to start your collection.
                        </p>

                        <Link
                            className="button button--primary"
                            to="/create-game"
                        >
                            + Add Game
                        </Link>
                    </section>
                )}
            </section>
{/* 
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
            </details> */}

        </>
    );
}

