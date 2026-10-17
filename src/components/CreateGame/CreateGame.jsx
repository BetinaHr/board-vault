import { Link, useNavigate } from 'react-router';
import * as gameService from '../../services/gameService.js';
import useAuth from '../../hooks/useAuth.js';

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
                <form className="game-form surface" action={createAction}>
                    <div className="form-section">
                        <div className="form-section__heading">
                            <span className="step-number">01</span>
                            <div>
                                <h2>The essentials</h2>
                                <p>Give your game a place in the collection.</p>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">
                                Game title{' '}
                                <span className="required" aria-hidden="true">*</span>
                            </label>
                            <input
                                className="form-input"
                                id="game-title"
                                name="game-title"
                                type="text"
                                required
                                minLength={3}
                                maxLength={100}
                                aria-describedby="game-title-help"
                            />

                            <p className="form-helper" id="game-title-help">
                                Please enter a title between 3 and 100 characters.
                            </p>
                        </div>

                        <div className="form-group">
                            <label className="form-label">
                                Description{' '}
                                <span className="required" aria-hidden="true">*</span>
                            </label>
                            <textarea
                                className="form-input"
                                id="description"
                                name="description"
                                rows={5}
                                required
                                aria-describedby="description-help"
                            />

                            <p className="form-helper" id="description-help">
                                Describe the experience, theme, and what makes the game stand out.
                            </p>
                        </div>

                        <div className="form-group">
                            <label className="form-label">
                                Story
                            </label>
                            <textarea
                                className="form-input"
                                id="story"
                                name="story"
                                rows={6}
                                placeholder="Share the story or background of the game."
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">
                                Image URL{' '}
                                <span className="required" aria-hidden="true">*</span>
                            </label>
                            <input
                                className="form-input"
                                id="image-url"
                                name="image-url"
                                type="url"
                                required
                                aria-describedby="image-url-help"
                            />
                            <p className="form-helper" id="image-url-help">
                                Use a direct link to a game cover image.
                            </p>
                        </div>

                        <div className="form-grid">
                            <div className="form-group">
                                <label className="form-label">
                                    Year published
                                </label>
                                <input
                                    className="form-input"
                                    id="release-year"
                                    name="release_year"
                                    type="number"
                                    min={1900}
                                    max={2026}
                                    placeholder="2026"
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="designer">
                                    Designer
                                </label>
                                <input
                                    className="form-input"
                                    id="designer"
                                    name="designer"
                                    type="text"
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">
                                    Publisher
                                </label>
                                <input
                                    className="form-input"
                                    id="publisher"
                                    name="publisher"
                                    type="text"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-section">
                        <div className="form-section__heading">
                            <span className="step-number">02</span>
                            <div>
                                <h2>At the table</h2>
                                <p>Help players find the right fit for game night.</p>
                            </div>
                        </div>

                        <div className="form-grid form-grid--two">
                            <div className="form-group">
                                <label className="form-label">
                                    Minimum players{' '}
                                    <span className="required" aria-hidden="true">*</span>
                                </label>
                                <input
                                    className="form-input"
                                    id="min-players"
                                    name="min-players"
                                    type="number"
                                    required
                                    min={1}
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">
                                    Maximum players{' '}
                                    <span className="required" aria-hidden="true">*</span>
                                </label>
                                <input
                                    className="form-input"
                                    id="max-players"
                                    name="max-players"
                                    type="number"
                                    required
                                    min={1}
                                    aria-describedby="max-players-help"
                                />
                                <p className="form-helper" id="max-players-help">
                                    Must be at least the minimum player count.
                                </p>
                            </div>

                            <div className="form-group">
                                <label className="form-label">
                                    Maximum play time (minutes){' '}
                                    <span className="required" aria-hidden="true">*</span>
                                </label>
                                <input
                                    className="form-input"
                                    id="max-playtime"
                                    name="max-playtime"
                                    type="number"
                                    required
                                    min={1}
                                    aria-describedby="playing-time-help"
                                />
                                <p className="form-helper" id="playing-time-help">
                                    Approximate time for a single session.
                                </p>
                            </div>

                            <div className="form-group">
                                <label className="form-label">
                                    Minimum play time
                                </label>
                                <input
                                    className="form-input"
                                    id="min-playtime"
                                    name="min-playtime"
                                    type="number"
                                    min={1}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label" >
                                    Category
                                </label>
                                <select
                                    className="form-input"
                                    id="game-category"
                                    name="game-category"
                                    defaultValue=""
                                >
                                    <option value="" disabled>Select a category</option>
                                    <option value="Strategy">Strategy</option>
                                    <option value="Family">Family</option>
                                    <option value="Party">Party</option>
                                    <option value="Cooperative">Cooperative</option>
                                    <option value="Card Games">Card Games</option>
                                    <option value="Abstract">Abstract</option>
                                </select>
                            </div>

                            <div className="form-group">


                                <label className="form-label">
                                    Difficulty (1–5)
                                </label>
                                <input
                                    className="form-input"
                                    id="difficulty"
                                    name="difficulty"
                                    type="number"
                                    min={1}
                                    max={5}
                                    step={0.1}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-actions">
                        <Link className="button button--secondary" to="/catalog">
                            Cancel
                        </Link>
                        <button className="button button--primary" type="submit" >
                            Create Game
                        </button>
                    </div>
                </form>

                <aside className="editor-guide">
                    <span className="guide-symbol" aria-hidden="true">✦</span>
                    <h2>A thoughtful addition.</h2>
                    <p>
                        Hello,  project examiner xD! Add a game to your liking.
                    </p>
                    <ul>
                        <li>Use the full, published game title.</li>
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