import wingspanImage from '../../assets/images/wingspan.svg';
import azulImage from '../../assets/images/azul.svg';
import { Link } from 'react-router';
import useAuth from '../../hooks/useAuth.js';
import { useState } from 'react';
import * as authService from '../../services/authService.js';

export default function Register() {
    const [passwordMismatch, setPasswordMismatch] = useState(false);
    const { onAuthenticate } = useAuth();

    const registerAction = async (formData) => {
        const username = formData.get("username").trim();
        const email = formData.get("email");
        const password = formData.get("password");
        const confirmPassword = formData.get("confirm-password");

        setPasswordMismatch(false);
        if (password !== confirmPassword) {
            setPasswordMismatch(true);

            return;
        }

        if (!username || !email || !password || !confirmPassword) {
            alert("All fields should be filled.");
            return;
        }

        if (username.length < 3 || username.length > 30) {
            alert('Username must contain between 3 and 30 characters.');
            return;
        }

        if (
            password.length < 8 ||
            !/[a-zA-Z]/.test(password) ||
            !/[0-9]/.test(password)
        ) {
            alert(
                'Password must contain at least 8 characters, including a letter and a number.'
            );
            return;
        }

        try {
            const result = await authService.register(username, email, password);

            // Pass the whole user to App.jsx
            if (result.access_token) {
                onAuthenticate(result);
                console.log("Login successful")
            } else {
                alert('Check your email to confirm your account.');
            }

        } catch (error) {
            alert(error.message);
        }
    };



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

                <form action={registerAction}>
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
                        {/* <input
                            className="form-input form-input--error"
                            id="confirm-password"
                            name="confirm-password"
                            type="password"
                            required
                            autoComplete="new-password"
                            aria-describedby="confirm-password-error"
                            aria-invalid="true"
                        /> */}

                        {/* If there is password mismatch -> change the styling of the field to red */}
                        <input
                            className={`form-input${passwordMismatch ? ' form-input--error' : ''}`}
                            id="confirm-password"
                            name="confirm-password"
                            type="password"
                            required
                            autoComplete="new-password"
                            aria-invalid={passwordMismatch}
                            aria-describedby={passwordMismatch ? 'confirm-password-error' : undefined}
                        />

                        {/* If there is password mismatch -> show error message */}
                        {passwordMismatch && (
                            <p className="form-error" id="confirm-password-error">
                                Passwords must match.
                            </p>

                        )}
                    </div>

                    <button className="button button--primary button--full" type="submit">
                        Create Account
                    </button>
                </form>

                <p className="auth-switch">
                    Already have an account? <Link to="/login">Log in</Link>
                </p>
            </section>
        </div>
    );
}