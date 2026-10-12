import { useEffect, useState } from 'react'
import * as gameService from '../../services/gameService.js'
import CatalogFilters from './CatalogFilters.jsx'
import CatalogResults from './CatalogResults.jsx';
import LoadingState from '../shared/LoadingState.jsx';
import ApiError from '../shared/ApiError.jsx';

export default function Catalog() {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const [games, setGames] = useState([]);

    const [searchState, setSearchState] = useState('');

    const filteredGames = games.filter(game => game.title.toLowerCase().includes(searchState.toLowerCase()));


    useEffect(() => {
        gameService.getAll()
            .then(setGames)
            .catch(setError)
            .finally(() => setLoading(false));
    }, [])

    // for (const game of games) {
    //     console.log(game.title);
    // }

    return (
        <>
            <div className="page-heading">
                <div>
                    <h1>
                        Board Game Catalog
                    </h1>
                </div>
            </div>
            <CatalogFilters searchState={searchState} onSearchChange={setSearchState} />
            {/* <CatalogResults games={games} /> */}
            


            {loading ? (
                <LoadingState />
            ) : error ? (
                <ApiError />
            ) : (
                <CatalogResults games={filteredGames} />
            )}
            {/* API PRESENTATION STATES Expandable demonstrations of future loading and failure states. Future React component: <CatalogStates />. */}
            {/* <details className="state-preview">
                <summary>
                    Collection loading &amp; connection states
                </summary>


            </details> */}
        </>
    );
}
