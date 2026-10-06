import CollectionInvitation from "./CollectionInvitation";
import DiscoverGames from "./DiscoverGames";
import DiscoveryFilters from "./DiscoveryFilters";

export default function Home() {
    return (
        <>
            <DiscoveryFilters />
            <DiscoverGames />
            <CollectionInvitation />
        </>
    );
}