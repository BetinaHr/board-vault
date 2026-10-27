export default function GameError() {
    return (
        <div className="empty-state" role="alert">
            <h1>Unable to load this game</h1>
            <p>Please try again.</p>

            <button className="button button--primary" type="button" onClick={() => window.location.reload()}> 
                Try again
            </button>
        </div>
    );
}