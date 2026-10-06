import CollectionInvitation from "./CollectionInvitation";
import DiscoverGames from "./DiscoverGames";
import DiscoveryFilters from "./DiscoveryFilters";
import FeaturedGame from "./FeaturedGame";

export default function Home() {
    return (
        <>
            <FeaturedGame />
            <DiscoveryFilters />
            <DiscoverGames />
            <CollectionInvitation />
        </>
    );
}