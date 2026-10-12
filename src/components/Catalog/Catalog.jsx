import { useEffect, useState } from 'react'
import * as gameService from '../../services/gameService.js'
import CatalogFilters from './CatalogFilters.jsx'
import CatalogResults from './CatalogResults.jsx';

export default function Catalog() {

    const [games, setGames] = useState([]);

    useEffect(() => {
        gameService.getAll()
            .then(setGames)
    }, [])

    for (const game of games) {
        console.log(game.title);
    }

    return (
        <>
            <div className="page-heading">
                <div>
                    <h1>
                        Board Game Catalog
                    </h1>
                </div>
            </div>
            <CatalogFilters />
            <CatalogResults />

            
            {/* API PRESENTATION STATES Expandable demonstrations of future loading and failure states. Future React component: <CatalogStates />. */}
            {/* <details className="state-preview">
                <summary>
                    Collection loading &amp; connection states
                </summary>


            </details> */}
        </>
    );
}
