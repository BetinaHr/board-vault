import { Link } from 'react-router';
import GameCard from '../shared/GameCard.jsx';

export default function VaultCollection({
    games,
    filter,
    vaultIsEmpty,
    onLikeChange,
}) {
    const title = vaultIsEmpty
        ? 'Your vault is empty'
        : filter === 'owned'
            ? 'No owned games yet'
            : 'No liked games yet';

    const description = vaultIsEmpty
        ? 'Add a game or like one from the catalog to start your collection.'
        : filter === 'owned'
            ? 'Games you add to the catalog will appear here.'
            : 'Tap a heart on a game to save it here.';

    return (
        <section aria-labelledby="vault-games">
            <h2 id="vault-games" className="visually-hidden">
                Games in your vault
            </h2>

            {games.length > 0 ? (
                <div className="game-grid">
                    {games.map(game => (
                        <GameCard
                            key={game.id}
                            game={game}
                            onLikeChange={onLikeChange}
                        />
                    ))}
                </div>
            ) : (
                <div className="empty-state">
                    <span
                        className="empty-state__symbol"
                        aria-hidden="true"
                    >
                        ◇
                    </span>

                    <p className="eyebrow">Collected with care</p>
                    <h3>{title}</h3>
                    <p>{description}</p>

                    <Link
                        className="button button--primary"
                        to={filter === 'owned' ? '/create-game' : '/catalog'}
                    >
                        {filter === 'owned' ? '+ Add Game' : 'Explore Games'}
                    </Link>
                </div>
            )}
        </section>
    );
}