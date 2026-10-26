import { useNavigate } from 'react-router';
import * as gameService from '../../services/gameService.js';
import useAuth from '../../hooks/useAuth.js';
import GameForm from '../shared/GameForm.jsx';

export default function CreateGame() {
    const { accessToken } = useAuth();
    const navigate = useNavigate();

    const createAction = async (formData) => {
        const title = formData.get("game-title");
        const description = formData.get("description");
        const story = formData.get("story");
        const imageUrl = formData.get("image-url");
        const year = formData.get("release_year");
        const designer = formData.get("designer");

        const minPlayers = Number(formData.get('min-players'));
        const maxPlayers = Number(formData.get('max-players'));

        const minPlaytime = Number(formData.get('min-playtime'));
        const maxPlaytime = Number(formData.get('max-playtime'));

        const category = formData.get('game-category');
        const difficulty = Number(formData.get('difficulty'));

        const gameData = {
            title: title.trim(),
            description: description.trim(),
            story: story.trim(),
            image_url: imageUrl.trim(),
            release_year: year ? Number(year) : null,
            designer: designer.trim(),
            min_players: minPlayers,
            max_players: maxPlayers,
            min_playtime: minPlaytime,
            max_playtime: maxPlaytime,
            category,
            difficulty,
        };

        try {
            await gameService.create(gameData, accessToken);
            navigate("/my-vault");
        } catch (error) {
            alert(error.message);
        }

    }

    return (
        <>
            <div className="page-heading">
                <div>
                    <p className="eyebrow">Grow the collection</p>
                    <h1>Add a new game</h1>
                </div>
            </div>

            <div className="editor-layout">
                <GameForm onSubmit={createAction} />
                <aside className="editor-guide">
                    <span className="guide-symbol" aria-hidden="true">✦</span>
                    <h2>A thoughtful addition.</h2>
                    <p>
                        Hello,  project examiner xD! Add a game to your liking.
                    </p>
                    <ul>
                        <li>I have included some template games for easy testing in the readme.</li>
                        <li>Double-check player counts and play time.</li>
                        <li>Choose the category that fits best.</li>
                    </ul>
                    <p className="form-helper">
                        Fields marked <span className="required">*</span> are required.
                    </p>
                    <div className="note">
                        You’ll be able to edit or delete games you add.
                    </div>
                </aside>
            </div>
        </>
    );
}

