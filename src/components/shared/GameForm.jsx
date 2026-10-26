import { useState } from 'react';
import { Link } from 'react-router';

export default function GameForm({ onSubmit, submitLabel = 'Create Game', cancelTo = '/catalog', initialValues = {} }) {
    const [values, setValues] = useState(() => ({
        'game-title': initialValues.title ?? '',
        description: initialValues.description ?? '',
        story: initialValues.story ?? '',
        'image-url': initialValues.image_url ?? '',
        release_year: initialValues.release_year ?? '',
        designer: initialValues.designer ?? '',
        'min-players': initialValues.min_players ?? '',
        'max-players': initialValues.max_players ?? '',
        'min-playtime': initialValues.min_playtime ?? '',
        'max-playtime': initialValues.max_playtime ?? '',
        'game-category': initialValues.category ?? '',
        difficulty: initialValues.difficulty ?? '',
    }));

    const [validationError, setValidationError] = useState(null);
    const [submitting, setSubmitting] = useState(false);

    const changeHandler = (event) => {
        const { name, value } = event.target;

        setValues(current => ({
            ...current,
            [name]: value,
        }));

        setValidationError(null);
    };

    const submitHandler = async (event) => {
        event.preventDefault();

        if (submitting) return;

        setValidationError(null);

        const title = values['game-title'].trim();

        if (title.length < 3 || title.length > 100) {
            setValidationError('Title must contain 3–100 characters.');
            return;
        }

        if (!values.description.trim()) {
            setValidationError('Description cannot be empty or only spaces.');
            return;
        }

        try {
            const imageUrl = new URL(values['image-url'].trim());

            if (!['http:', 'https:'].includes(imageUrl.protocol)) {
                throw new Error();
            }
        } catch {
            setValidationError('Enter a valid HTTP or HTTPS image URL.');
            return;
        }

        if (
            Number(values['min-players']) >
            Number(values['max-players'])
        ) {
            setValidationError(
                'Maximum players must be at least the minimum players.'
            );
            return;
        }


        if (
            Number(values['min-playtime']) >
            Number(values['max-playtime'])
        ) {
            setValidationError(
                'Maximum play time must be at least the minimum play time.'
            );
            return;
        }

        // Keep the FormData interface expected by CreateGame and EditGame.
        const formData = new FormData(event.currentTarget);

        setSubmitting(true);

        try {
            await onSubmit(formData);
        } catch (error) {
            setValidationError(error.message);
        } finally {
            setSubmitting(false);
        }
    };

    return (

        <form className="game-form surface" onSubmit={submitHandler}>
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
                        value={values['game-title']}
                        onChange={changeHandler}
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
                        value={values['description']}
                        onChange={changeHandler}
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
                        value={values['story']}
                        onChange={changeHandler}
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
                        value={values['image-url']}
                        onChange={changeHandler}
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
                            value={values['release_year']}
                            onChange={changeHandler}
                            min={1900}
                            max={new Date().getFullYear()}
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
                            value={values['designer']}
                            onChange={changeHandler}
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
                            value={values['min-players']}
                            onChange={changeHandler}
                            required
                            min={1}
                        />
                        <p className="form-helper" id="max-players-help">
                            Must be at least the minimum player count.
                        </p>
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
                            value={values['max-players']}
                            onChange={changeHandler}
                            required
                            min={1}
                            aria-describedby="max-players-help"
                        />
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
                            value={values['min-playtime']}
                            onChange={changeHandler}
                            min={1}
                            required
                        />

                        <p className="form-helper" id="playing-time-help">
                            Approximate time for a single session.
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
                            value={values['max-playtime']}
                            onChange={changeHandler}
                            required
                            min={1}
                            aria-describedby="playing-time-help"
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
                            value={values['game-category']}
                            onChange={changeHandler}
                            required
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
                            value={values['difficulty']}
                            onChange={changeHandler}
                            required
                            min={1}
                            max={5}
                            step={0.1}
                        />
                    </div>
                </div>
            </div>

            {validationError && (
                <p className="form-error" role="alert">
                    {validationError}
                </p>
            )}
            <div className="form-actions">
                <Link className="button button--secondary" to={cancelTo}>
                    Cancel
                </Link>
                <button className="button button--primary" type="submit" disabled={submitting}>
                    {submitLabel}
                </button>
            </div>
        </form>
    );
}
