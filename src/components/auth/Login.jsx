import { Link, useNavigate, useLocation } from 'react-router';
import azulImage from '../../assets/images/azul.svg';
import wingspanImage from '../../assets/images/wingspan.svg';
import * as authService from '../../services/authService.js';
import useAuth from '../../hooks/useAuth.js';

export default function Login() {
    const navigate = useNavigate();

    const location = useLocation();
    const redirectTo = location.state?.from || '/catalog';

    const { onAuthenticate } = useAuth();

    const loginAction = async (formData) => {
        const email = formData.get("email");
        const password = formData.get("password");


        if (!email || !password) {
            alert("All fields should be filled.");
            return;
        }

        try {
            const result = await authService.login(email, password);
            onAuthenticate(result);
            navigate(redirectTo, { replace: true });


        } catch (error) {
            alert(error.message);
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

                {/* Guests only: add authentication redirection later. */}
                <section className="auth-panel" aria-labelledby="login-title">
                    <p className="eyebrow">Your table is waiting</p>
                    <h1 id="login-title">Welcome back.</h1>

                    <p className="lead">
                        Log in to your personal Board Vault.
                    </p>

                    {/* Show this only when login fails. */}
                    {/* <div className="form-alert" role="alert">
                    Invalid email or password.
                </div> */}

                    <form action={loginAction}>
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

                        <label className="checkbox-label">
                            <input type="checkbox" name="remember" />
                            {' '}Remember me
                        </label>

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