import { Link } from 'react-router';

export default function CreateGame() {
    return (
        <>
            <div className="page-heading">
                <div>
                    <p className="eyebrow">Grow the collection</p>
                    <h1>Add a new game</h1>
                </div>
            </div>

            <div className="editor-layout">
                <form className="game-form surface">
                    <div className="form-section">
                        <div className="form-section__heading">
                            <span className="step-number">01</span>
                            <div>
                                <h2>The essentials</h2>
                                <p>Give your game a place in the collection.</p>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="game-title">
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
                            <label className="form-label" htmlFor="description">
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
                            <label className="form-label" htmlFor="image-url">
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
                                <label className="form-label" htmlFor="year">
                                    Year published
                                </label>
                                <input
                                    className="form-input"
                                    id="year"
                                    name="year"
                                    type="number"
                                    min={1}
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
                                <label className="form-label" htmlFor="publisher">
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
                                <label className="form-label" htmlFor="min-players">
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
                                <label className="form-label" htmlFor="max-players">
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
                                <label className="form-label" htmlFor="playing-time">
                                    Maximum play time (minutes){' '}
                                    <span className="required" aria-hidden="true">*</span>
                                </label>
                                <input
                                    className="form-input"
                                    id="playing-time"
                                    name="playing-time"
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
                                <label className="form-label" htmlFor="min-age">
                                    Minimum play time
                                </label>
                                <input
                                    className="form-input"
                                    id="min-age"
                                    name="min-age"
                                    type="number"
                                    min={1}
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="game-category">
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
                                <label className="form-label" htmlFor="difficulty">
                                    Difficulty
                                </label>
                                <select
                                    className="form-input"
                                    id="difficulty"
                                    name="difficulty"
                                    defaultValue=""
                                >
                                    <option value="" disabled>Select difficulty</option>
                                    <option value="Light">Light</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Heavy">Heavy</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="form-actions">
                        <Link className="button button--secondary" to="/catalog">
                            Cancel
                        </Link>
                        <button className="button button--primary" type="button">
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