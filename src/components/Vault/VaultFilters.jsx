const filters = [
    { value: 'all', label: 'All' },
    { value: 'owned', label: 'Owned' },
    { value: 'liked', label: 'Liked' },
];

export default function VaultFilters({
    filter,
    onFilterChange,
    count,
}) {
    return (
        <section
            className="vault-filters"
            aria-label="Filter your collection"
        >
            <div className="chip-list">
                {filters.map(item => (
                    <button
                        key={item.value}
                        type="button"
                        className={`chip${filter === item.value ? ' is-active' : ''}`}
                        aria-pressed={filter === item.value}
                        onClick={() => onFilterChange(item.value)}
                    >
                        {item.label}
                    </button>
                ))}
            </div>

            <span className="muted" aria-live="polite">
                {count} {count === 1 ? 'game' : 'games'}
            </span>
        </section>
    );
}