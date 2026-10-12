import CollectionInvitation from "./CollectionInvitation";
import DiscoverGames from "./DiscoverGames.jsx";
import DiscoveryFilters from "./DiscoveryFilters.jsx";
import FeaturedGame from "./FeaturedGame";

import { useEffect, useState } from 'react';
import * as gameService from '../../services/gameService.js';

export default function Home() {
    const [games, setGames] = useState([]);


    // Keeping the chosen category for filtering.
    const [category, setCategory] = useState('All Games');

    useEffect(() => {
        gameService.getAll()
            .then(setGames)
            .catch(console.error);
    }, []);

    const featuredGame = games.find(game => game.title === 'Wingspan');
    return (
        <>
            {featuredGame && <FeaturedGame game={featuredGame} />}
            <DiscoveryFilters category = {category} onCategoryChange={setCategory} />
            <DiscoverGames category = {category}/>
            <CollectionInvitation />
        </>
    );
}