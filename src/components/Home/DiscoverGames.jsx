// import wingspanImage from '../assets/images/wingspan.svg'
// import marsImage from '../assets/images/mars.svg'
// import azulImage from '../assets/images/azul.svg'
// import catanImage from '../assets/images/catan.svg'
// import carcassonneImage from '../assets/images/carcassonne.svg'
// import pandemicImage from '../assets/images/pandemic.svg'
// import ticketImage from '../assets/images/ticket.svg'
// import wondersImage from '../assets/images/wonders.svg'
// import './App.css'

import { useEffect, useState } from 'react'
import * as gameService from '../../services/gameService.js'
import GameCard from '../shared/GameCard.jsx';
import LoadingState from '../shared/LoadingState.jsx';
import ApiError from '../shared/ApiError.jsx';


export default function DiscoverGames({ category }) {
    const [games, setGames] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    

    useEffect(() => {
        gameService.getAll()
            .then(setGames)
            .catch(setError)
            .finally(() => setLoading(false))
    }, [])

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

            {filteredGames.length === 0 && (
                <p>No games match this category.</p>
            )}
            {/*
                       GAME GRID
                       Future React component: <GameGrid />.
                 */}

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