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

    const [filters, setFilters] = useState({
        category: '',
        players: '',
        playtime: '',
        difficulty: '',
    });

    const filterChangeHandler = (event) => {
        const { name, value } = event.target;

        setFilters(current => ({
            ...current,
            [name]: value,
        }));
    };

    const filteredGames = games.filter(game => {
        const matchesSearch = game.title
            .toLowerCase()
            .includes(searchState.trim().toLowerCase());

        const matchesCategory =
            !filters.category ||
            game.category === filters.category;

        const matchesPlayers =
            !filters.players ||
            (
                game.min_players != null &&
                game.max_players != null &&
                Number(game.min_players) <= Number(filters.players) &&
                Number(game.max_players) >= Number(filters.players)
            );

        let matchesPlaytime = true;

        if (filters.playtime) {
            const maxTime = Number(game.max_playtime);

            if (game.max_playtime == null || !Number.isFinite(maxTime)) {
                matchesPlaytime = false;
            } else {
                switch (filters.playtime) {
                    case 'under30':
                        matchesPlaytime = maxTime < 30;
                        break;
                    case 'under60':
                        matchesPlaytime = maxTime < 60;
                        break;
                    case '60to120':
                        matchesPlaytime = maxTime >= 60 && maxTime <= 120;
                        break;
                    case 'over120':
                        matchesPlaytime = maxTime > 120;
                        break;
                }
            }
        }

        let matchesDifficulty = true;

        if (filters.difficulty) {
            const difficulty = Number(game.difficulty);

            if (
                game.difficulty == null ||
                !Number.isFinite(difficulty) ||
                difficulty < 1 ||
                difficulty > 5
            ) {
                matchesDifficulty = false;
            } else {
                switch (filters.difficulty) {
                    case 'easy':
                        matchesDifficulty = difficulty <= 2;
                        break;
                    case 'medium':
                        matchesDifficulty = difficulty > 2 && difficulty <= 3.5;
                        break;
                    case 'hard':
                        matchesDifficulty = difficulty > 3.5;
                        break;
                }
            }
        }

        return (
            matchesSearch &&
            matchesCategory &&
            matchesPlayers &&
            matchesPlaytime &&
            matchesDifficulty
        );
    });


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
            
            <CatalogFilters
                searchState={searchState}
                onSearchChange={setSearchState}
                filters={filters}
                onFilterChange={filterChangeHandler}
            />

            {loading ? (
                <LoadingState />
            ) : error ? (
                <ApiError />
            ) : (
                <CatalogResults games={filteredGames} />
            )}
        </>
    );
}
