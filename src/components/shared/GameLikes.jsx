import { useEffect, useState } from 'react';
import LikeButton from './LikeButton.jsx';
import * as likeService from '../../services/likeService.js';

export default function GameLikes({ game }) {
    const [result, setResult] = useState(null);
    const [revision, setRevision] = useState(0);

    const loading =
        !result ||
        result.gameId !== game.id ||
        result.revision !== revision;

    const count = loading ? null : result.count;
    const error = loading ? null : result.error;

    useEffect(() => {
        let ignore = false;

        likeService.getCount(game.id)
            .then(count => {
                if (!ignore) {
                    setResult({
                        gameId: game.id,
                        revision,
                        count,
                        error: null,
                    });
                }
            })
            .catch(() => {
                if (!ignore) {
                    setResult({
                        gameId: game.id,
                        revision,
                        count: null,
                        error: 'Could not load the like count.',
                    });
                }
            });

        return () => {
            ignore = true;
        };
    }, [game.id, revision]);

    const handleLikeChange = () => {
        // Fetch the latest total after a successful like or unlike.
        setRevision(current => current + 1);
    };

    return (
        <div className="button-row">
            <LikeButton
                game={game}
                onLikeChange={handleLikeChange}
            />

            {loading ? (
                <span className="muted" role="status">
                    Loading likes...
                </span>
            ) : error ? (
                <span className="form-error" role="alert">
                    {error}
                </span>
            ) : (
                <span className="muted" aria-live="polite">
                    {count} {count === 1 ? 'like' : 'likes'}
                </span>
            )}
        </div>
    );
}