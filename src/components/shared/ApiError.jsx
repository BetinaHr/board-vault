export default function ApiError() {
    return (
        <section className="error-state" aria-labelledby="error-title">
            <span className="state-icon" aria-hidden="true">
                !
            </span>
            <h3 id="error-title">
                Something went wrong
            </h3>
            <p>
                We couldn't load the board games. Please try again.
            </p>
            <button className="button button--secondary" type="button" onClick={() => window.location.reload()}>
                Try Again
            </button>
        </section>
    );
}