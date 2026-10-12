import CollectionInvitation from "./CollectionInvitation";
import DiscoverGames from "../DiscoverGames";
import DiscoveryFilters from "../DiscoveryFilters";
import FeaturedGame from "./FeaturedGame";

import { useEffect, useState } from 'react';
import * as gameService from '../../services/gameService.js';

export default function Home() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        gameService.getAll()
            .then(setGames)
            .catch(console.error);
    }, []);

    const featuredGame = games.find(game => game.title === 'Wingspan');
    return (
        <>
            {featuredGame && <FeaturedGame game={featuredGame} />}
            <DiscoveryFilters />
            <DiscoverGames />
            <CollectionInvitation />
        </>
    );
}