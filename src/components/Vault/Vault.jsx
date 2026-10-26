import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import useAuth from '../../hooks/useAuth.js';
import * as likeService from '../../services/likeService.js';
import * as gameService from '../../services/gameService.js';
import VaultStats from './VaultStats.jsx';
import VaultFilters from './VaultFilters.jsx';
import VaultCollection from './VaultCollection.jsx';

export default function MyVault() {
    const { user, accessToken } = useAuth();
    const userId = user?.id;

    const [result, setResult] = useState(null);
    const [filter, setFilter] = useState('all');

    const loading =
        !result ||
        result.userId !== userId ||
        result.accessToken !== accessToken;

    const ownedGames = loading ? [] : result.ownedGames;
    const likedGames = loading ? [] : result.likedGames;

    const error = loading ? null : result.error;

    useEffect(() => {
        if (!userId || !accessToken) return;

        let ignore = false;

        Promise.all([
            gameService.getOwned(userId, accessToken),
            likeService.getLikedGames(accessToken),
        ])
            .then(([ownedGames, likedGames]) => {
                if (!ignore) {
                    setResult({
                        userId,
                        accessToken,
                        ownedGames,
                        likedGames,
                        error: null,
                    });
                }
            })
            .catch(error => {
                if (!ignore) {
                    setResult({
                        userId,
                        accessToken,
                        ownedGames: [],
                        likedGames: [],
                        error: error.message,
                    });
                }
            });

        return () => {
            ignore = true;
        };
    }, [userId, accessToken]);

    const allGames = [
        ...new Map(
            [...ownedGames, ...likedGames].map(game => [game.id, game])
        ).values(),
    ];

    const gamesByFilter = {
        all: allGames,
        owned: ownedGames,
        liked: likedGames,
    };

    const visibleGames = gamesByFilter[filter];

    const handleLikeChange = (game, liked) => {
        setResult(current => {
            if (
                !current ||
                current.userId !== userId ||
                current.accessToken !== accessToken
            ) {
                return current;
            }

            const remainingLikes = current.likedGames.filter(
                item => item.id !== game.id
            );

            return {
                ...current,
                likedGames: liked
                    ? [...remainingLikes, game]
                    : remainingLikes,
            };
        });
    };

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
                <Link className="button button--primary" to="/create-game"> + Add Game </Link>
            </div>

            {loading ? (
                <p>Loading your vault...</p>
            ) : error ? (
                <p role="alert">{error}</p>
            ) : (
                <>
                    <VaultStats
                        total={allGames.length}
                        owned={ownedGames.length}
                        liked={likedGames.length}
                    />

                    <VaultFilters
                        filter={filter}
                        onFilterChange={setFilter}
                        count={visibleGames.length}
                    />

                    <VaultCollection
                        games={visibleGames}
                        filter={filter}
                        vaultIsEmpty={allGames.length === 0}
                        onLikeChange={handleLikeChange}
                    />
                </>
            )}

        </>
    );
}

