import { Link } from 'react-router';
import azulImage from '../../assets/images/azul.svg';
import wingspanImage from '../../assets/images/wingspan.svg';

export default function Register() {
    return (
        <div className="auth-layout">
            <aside className="auth-introduction">
                <p className="eyebrow">
                    Good company. Great games.
                </p>

                <h2>
                    Make room for<br />your next favorite.
                </h2>

                <p>
                    A home for the games you love, the ones you're curious
                    about, and the stories made around the table.
                </p>

                <div className="auth-art">
                    <img
                        src={azulImage}
                        alt="Illustrated Azul mosaic cover"
                        width="600"
                        height="600"
                    />
                    <img
                        src={wingspanImage}
                        alt="Illustrated Wingspan bird cover"
                        width="600"
                        height="600"
                    />
                </div>

                <span className="auth-note">
                    The best collections are personal.
                </span>
            </aside>

            {/* Guests only: show registration before authentication. */}
            <section className="auth-panel" aria-labelledby="register-title">
                <p className="eyebrow">Start your collection</p>

                <h1 id="register-title">
                    Find your people.<br />Keep your games.
                </h1>

                <p className="lead">
                    Create your own corner of Board Vault.
                </p>

                <form>
                    <div className="form-group">
                        <label className="form-label" htmlFor="username">
                            Username{' '}
                            <span className="required" aria-hidden="true">*</span>
                        </label>
                        <input
                            className="form-input"
                            id="username"
                            name="username"
                            type="text"
                            required
                            aria-describedby="username-help"
                        />
                        <p className="form-helper" id="username-help">
                            3–30 characters. Make it yours.
                        </p>
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="email">
                            Email{' '}
                            <span className="required" aria-hidden="true">*</span>
                        </label>
                        <input
                            className="form-input"
                            id="email"
                            name="email"
                            type="email"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="password">
                            Password{' '}
                            <span className="required" aria-hidden="true">*</span>
                        </label>
                        <input
                            className="form-input"
                            id="password"
                            name="password"
                            type="password"
                            required
                            autoComplete="new-password"
                            aria-describedby="password-help"
                        />
                        <p className="form-helper" id="password-help">
                            Use at least 8 characters, including a letter
                            and a number.
                        </p>
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="confirm-password">
                            Confirm Password{' '}
                            <span className="required" aria-hidden="true">*</span>
                        </label>
                        <input
                            className="form-input form-input--error"
                            id="confirm-password"
                            name="confirm-password"
                            type="password"
                            required
                            autoComplete="new-password"
                            aria-describedby="confirm-password-error"
                            aria-invalid="true"
                        />
                        <p className="form-error" id="confirm-password-error">
                            Passwords must match.
                        </p>
                    </div>

                    <button
                        className="button button--primary button--full"
                        type="button"
                    >
                        Create Account <span aria-hidden="true">→</span>
                    </button>
                </form>

                <p className="auth-switch">
                    Already have an account? <Link to="/login">Log in</Link>
                </p>
            </section>
        </div>
    );
}