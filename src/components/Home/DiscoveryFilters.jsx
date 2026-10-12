export default function DiscoveryFilters({ category, onCategoryChange }) {
    return (

        <section className="discovery-filters" aria-label="Browse by category">
            <div className="section-heading">
                <div>
                    <p className="eyebrow">
                        Find your kind of fun
                    </p>
                    <h2>
                        A seat at every table.
                    </h2>
                </div>
                <a className="text-link" href="catalog.html">Browse the full catalog <span aria-hidden="true">→</span></a>
            </div>
            <div className="chip-list">
                {[
                    'All Games',
                    'Strategy',
                    'Family',
                    'Party',
                    'Cooperative',
                    'Card Games',
                    'Abstract',
                ].map(item => (
                    <button
                        key={item}
                        type="button"
                        className={`chip ${category === item ? 'is-active' : ''}`}
                        aria-pressed={category === item}
                        onClick={() => onCategoryChange(item)}>
                        {item}
                    </button>
                ))}
            </div>
            <div className="session-filters">
                <span>Make it a game night:</span>
                <div className="chip-list">
                    <button type="button" className="chip" aria-pressed="false" onClick={() => onCategoryChange('1–2 Players')}>1–2 Players</button>
                    <button type="button" className="chip" aria-pressed="false" onClick={() => onCategoryChange('3–4 Players')}>3–4 Players</button>
                    <button type="button" className="chip" aria-pressed="false" onClick={() => onCategoryChange('5+ Players')}>5+ Players</button>
                    <button type="button" className="chip" aria-pressed="false" onClick={() => onCategoryChange('Under 60 min')}>Under 60 min</button>
                </div>
            </div>
        </section>
    );
}