import GameCard from '../shared/GameCard.jsx';

export default function CatalogResults({ games }) {
    return (
        <>
            <section className="section" aria-labelledby="results-title">
                <div className="section-heading">
                    <h2 id="results-title">
                        All games
                        <span className="count">
                            {games.length}
                        </span>
                    </h2>

                    <span className="muted">
                        A great game night starts here.
                    </span>

                </div>

                {games.length > 0 ? (
                    <div className="game-grid">
                        {games.map(game => (
                            <GameCard key={game.id} game={game} />
                        ))}
                    </div>
                ) : (
                    <div className="empty-state" role="status">
                        <span className="empty-state__symbol" aria-hidden="true">
                            ◇
                        </span>

                        <p className="eyebrow">Keep exploring</p>
                        <h3>No games found</h3>
                        <p>
                            Try another title or adjust your filters to discover more games.
                        </p>
                    </div>
                )}
            </section>
        </>
    );
}