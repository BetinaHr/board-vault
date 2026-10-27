import { Link, useNavigate, useLocation } from 'react-router';
import azulImage from '../../assets/images/azul.svg';
import wingspanImage from '../../assets/images/wingspan.svg';
import * as authService from '../../services/authService.js';
import useAuth from '../../hooks/useAuth.js';
import { useState } from 'react';
import FormError from '../shared/FormError.jsx';

export default function Login() {
    const navigate = useNavigate();

    const location = useLocation();
    const redirectTo = location.state?.from || '/catalog';

    const [loginError, setLoginError] = useState(null);

    const { onAuthenticate } = useAuth();

    const loginAction = async (event) => {
        event.preventDefault();
        
        const formData = new FormData(event.currentTarget);

        setLoginError(null);
        const email = formData.get("email");
        const password = formData.get("password");


        if (!email || !password) {
            setLoginError("All fields should be filled.");
            return;
        }

        try {
            const result = await authService.login(email, password);
            onAuthenticate(result);
            navigate(redirectTo, { replace: true });


        } catch {
            setLoginError("We couldn’t log you in. Check your email and password, then try again.");
        }
    };



    return (
        <>
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

                <section className="auth-panel" aria-labelledby="login-title">
                    <p className="eyebrow">Your table is waiting</p>
                    <h1 id="login-title">Welcome back.</h1>

                    <p className="lead">
                        Log in to your personal Board Vault.
                    </p>

                    <FormError message={loginError} />

                    <form onSubmit={loginAction}>
                        <div className="form-group">
                            <label className="form-label" htmlFor="email">
                                Email <span className="required" aria-hidden="true">*</span>
                            </label>
                            <input
                                className="form-input"
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="password">
                                Password <span className="required" aria-hidden="true">*</span>
                            </label>
                            <input
                                className="form-input"
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                            />
                        </div>

                        <button
                            className="button button--primary button--full" type="submit">
                            Login
                        </button>
                    </form>

                    <p className="auth-switch">
                        Don't have an account? <Link to="/register">Register</Link>
                    </p>
                </section>
            </div>
        </>
    );
}