export default function CatalogFilters({ searchState, onSearchChange, filters, onFilterChange }) {
    return (
        <section className="filter-panel" aria-label="Catalog filters">
            <div className="catalog-search form-group">
                <label htmlFor="catalog-search" className="form-label">
                    Search the collection
                </label>

                <input
                    className="form-input"
                    type="search"
                    id="catalog-search"
                    placeholder="Search by game name..."
                    value={searchState}
                    onChange={event => onSearchChange(event.target.value)}
                />
            </div>

            <div className="filter-bar">
                <div className="form-group">
                    <label className="form-label" htmlFor="category">
                        Category
                    </label>

                    <select
                        className="form-input"
                        id="category"
                        name="category"
                        value={filters.category}
                        onChange={onFilterChange}
                    >
                        <option value="">All categories</option>
                        <option value="Strategy">Strategy</option>
                        <option value="Family">Family</option>
                        <option value="Party">Party</option>
                        <option value="Cooperative">Cooperative</option>
                        <option value="Card Games">Card Games</option>
                        <option value="Abstract">Abstract</option>
                    </select>
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="players">
                        Number of players
                    </label>

                    <input
                        className="form-input"
                        id="players"
                        name="players"
                        type="number"
                        min={1}
                        step={1}
                        placeholder="Any player count"
                        value={filters.players}
                        onChange={onFilterChange}
                    />
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="playtime">
                        Maximum playtime
                    </label>

                    <select
                        className="form-input"
                        id="playtime"
                        name="playtime"
                        value={filters.playtime}
                        onChange={onFilterChange}
                    >
                        <option value="">Any duration</option>
                        <option value="under30">Under 30 min</option>
                        <option value="under60">Under 60 min</option>
                        <option value="60to120">60–120 min</option>
                        <option value="over120">Over 120 min</option>
                    </select>
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="difficulty">
                        Difficulty
                    </label>

                    <select
                        className="form-input"
                        id="difficulty"
                        name="difficulty"
                        value={filters.difficulty}
                        onChange={onFilterChange}
                    >
                        <option value="">Any difficulty</option>
                        <option value="easy">Easy (1–2)</option>
                        <option value="medium">Medium (&gt;2–3.5)</option>
                        <option value="hard">Hard (&gt;3.5–5)</option>
                    </select>
                </div>
            </div>
        </section>
    );
}