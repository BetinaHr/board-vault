import GameCard from '../shared/GameCard.jsx';
export default function CatalogResults({games}) {

    // TODO: Replace static game previews with dynamic data from API. Future React component: <GameGrid />.
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
                {/* GAME GRID Responsive collection of game previews: one, two, or four columns. Future React component: <GameGrid />. */}
                <div className="game-grid">
                        {games.map(game => <GameCard key={game.id} game={game} />)}
                </div>
            </section>
        </>
    );
}