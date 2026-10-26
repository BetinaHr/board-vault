import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth.js';
import * as likeService from '../../services/likeService.js';

export default function LikeButton({ game, onLikeChange }) {
    const { user, accessToken } = useAuth();
    const userId = user?.id;

    const [result, setResult] = useState(null);
    const [pending, setPending] = useState(false);
    const [actionError, setActionError] = useState(null);

    const loading =
        result?.userId !== userId ||
        result?.gameId !== game.id;

    const liked = loading ? false : result.liked;
    const loadError = loading ? null : result.error;

    useEffect(() => {
        if (!userId || !accessToken) return;

        let ignore = false;

        likeService.isLiked(game.id, accessToken)
            .then(liked => {
                if (!ignore) {
                    setResult({
                        userId,
                        gameId: game.id,
                        liked,
                        error: null,
                    });
                }
            })
            .catch(error => {
                if (!ignore) {
                    setResult({
                        userId,
                        gameId: game.id,
                        liked: false,
                        error: error.message,
                    });
                }
            });

        return () => {
            ignore = true;
        };
    }, [game.id, userId, accessToken]);

    const toggleLike = async () => {
        if (!user || !accessToken || loading || pending || loadError) {
            return;
        }

        setPending(true);
        setActionError(null);

        try {
            if (liked) {
                await likeService.remove(game.id, accessToken);
            } else {
                await likeService.add(game.id, accessToken);
            }

            setResult({
                userId,
                gameId: game.id,
                liked: !liked,
                error: null,
            });

            onLikeChange?.(game, !liked);
        } catch (error) {
            setActionError(error.message);
        } finally {
            setPending(false);
        }
    };

    if (!user) return null;

    return (
        <div>
            <button
                className={`favorite-button${liked ? ' is-favorite' : ''}`}
                type="button"
                onClick={toggleLike}
                disabled={loading || pending || Boolean(loadError)}
                aria-label={
                    liked
                        ? `Unlike ${game.title}`
                        : `Like ${game.title}`
                }
                aria-pressed={liked}
                aria-busy={loading || pending}
            >
                {liked ? '♥' : '♡'}
            </button>

            {(loadError || actionError) && (
                <p className="form-error" role="alert">
                    {loadError || actionError}
                </p>
            )}
        </div>
    );
}