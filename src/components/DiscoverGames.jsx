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
import * as gameService from '../services/gameService.js'
import GameCard from './GameCard.jsx';


export default function DiscoverGames() {
        const[games, setGames] = useState([]);
    
        useEffect(() => {
            gameService.getAll()
                .then(setGames)
        }, [])
    
        for (const game of games) {
            console.log(game.title);
        }


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
                {/*
                       GAME GRID
                       Future React component: <GameGrid />.
                 */}
                <div className="game-grid">
 
                    {/* GAME CARD */}
    
                    {games.map(game => <GameCard key={game.id} game={game} />)}
                </div>
            </section >
        );
    
}