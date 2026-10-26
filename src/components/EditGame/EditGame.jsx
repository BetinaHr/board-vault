import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import GameForm from '../shared/GameForm.jsx';
import useAuth from '../../hooks/useAuth.js';
import * as gameService from '../../services/gameService.js';

export default function EditGame() {
    const { gameId } = useParams();
    const { user, accessToken } = useAuth();
    const navigate = useNavigate();

    const [saving, setSaving] = useState(false);
    const [saveError, setSaveError] = useState(null);

    const [result, setResult] = useState(null);

    const loading = result?.gameId !== gameId;
    const game = loading ? null : result.game;
    const error = loading ? null : result.error;

    useEffect(() => {

        // Prevents an outdated request from updating the component’s state
        // like opening a game and switching to another before it finishes loading
        let ignore = false;

        gameService.getById(gameId)
            .then(game => {
                if (!ignore) {
                    setResult({ gameId, game, error: null });
                }
            })
            .catch(error => {
                if (!ignore) {
                    setResult({
                        gameId,
                        game: null,
                        error: error.message,
                    });
                }
            });

        return () => {
            ignore = true;
        };
    }, [gameId]);

    const editAction = async (formData) => {
        if (!user || user.id !== game?.owner_id || !accessToken || saving) {
            return;
        }

        const year = formData.get('release_year');
        const difficulty = formData.get('difficulty');

        const gameData = {
            title: formData.get('game-title').trim(),
            description: formData.get('description').trim(),
            story: formData.get('story').trim(),
            image_url: formData.get('image-url').trim(),
            release_year: year ? Number(year) : null,
            designer: formData.get('designer').trim(),
            min_players: Number(formData.get('min-players')),
            max_players: Number(formData.get('max-players')),
            min_playtime: Number(formData.get('min-playtime')),
            max_playtime: Number(formData.get('max-playtime')),
            category: formData.get('game-category'),
            difficulty: difficulty ? Number(difficulty) : null,
        };

        setSaveError(null);

        if (
            gameData.min_players > gameData.max_players ||
            gameData.min_playtime > gameData.max_playtime
        ) {
            setSaveError('Minimum values cannot exceed maximum values.');
            return;
        }

        setSaving(true);

        try {
            await gameService.update(gameId, gameData, accessToken);
            navigate(`/game-details/${gameId}`);
        } catch (error) {
            setSaveError(error.message);
        } finally {
            setSaving(false);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p role="alert">{error}</p>;
    if (!game) return <p>Game not found.</p>;

    if (!user || user.id !== game.owner_id) {
        return <p>You do not have permission to edit this game.</p>;
    }



    return (
        <>
            <div className="page-heading">
                <div>
                    <p className="eyebrow">Update your game</p>
                    <h1>Edit {game.title}</h1>
                </div>
            </div>

            <div className="editor-layout">
                <div>

                    {saveError && <p role="alert">{saveError}</p>}
                    <GameForm
                        key={game.id}
                        initialValues={game}
                        onSubmit={editAction}
                        submitLabel={saving ? 'Saving...' : 'Save changes'}
                        saving={saving}
                        cancelTo={`/game-details/${gameId}`}
                    />

                </div>
                <aside className="editor-guide">
                    <h2>Keep the details accurate.</h2>
                    <p>
                        Update the information below and save your changes.
                    </p>
                    <ul>
                        <li>Use the full, published game title.</li>
                        <li>Double-check player counts and play time.</li>
                        <li>Choose the category that fits best.</li>
                    </ul>
                </aside>
            </div>
        </>
    );
}

