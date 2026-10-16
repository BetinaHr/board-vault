import GameCard from '../shared/GameCard.jsx';
import LoadingState from '../shared/LoadingState.jsx';
import ApiError from '../shared/ApiError.jsx';


export default function DiscoverGames({ category, games, loading, error }) {
    // const [games, setGames] = useState([]);

    // useEffect(() => {
    //     gameService.getAll()
    //         .then(setGames)
    //         .catch(setError)
    //         .finally(() => setLoading(false))
    // }, [])

    // for (const game of games) {
    //     console.log(game.title);
    // }

    const filteredGames = games.filter(game =>

        category === 'All Games' || game.category?.toLowerCase() === category.toLowerCase()
    );

    return (
        < section className="section" aria-labelledby="discover-title" >
            <div className="section-heading">
                <div>
                    <p className="eyebrow">
                        Worth making room for
                    </p>
                    <h2 id="discover-title">
                        Discover your next favorite
                    </h2>
                </div>
                <span className="muted">Handpicked for your table</span>
            </div>

            {!loading && !error && filteredGames.length === 0 && (
                <p>No games match this category.</p>
            )}

            {/* GAME CARD */}

            {/* {games.map(game => <GameCard key={game.id} game={game} />)} */}

            {loading ? (
                <LoadingState />
            ) : error ? (
                <ApiError />
            ) :

                <div className="game-grid">
                    {filteredGames.map(game => (
                        <GameCard key={game.id} game={game} />
                    ))}
                </div>

            }

        </section >


    );

}
