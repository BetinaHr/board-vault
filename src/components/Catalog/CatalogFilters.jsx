export default function CatalogFilters() {
    return (
        <>
            {/* CATALOG SEARCH AND FILTERS Visual search, filters, and sorting controls; Future React component: <FilterBar />. */}
            <section className="filter-panel" aria-label="Catalog filters">
                <div className="catalog-search form-group">
                    <label htmlFor="catalog-search" className="form-label">
                        Search the collection
                    </label>
                    <input className="form-input" type="search" id="catalog-search" placeholder="Search by game name…" />
                </div>
                <div className="filter-bar">
                    <div className="form-group">
                        <label className="form-label" htmlFor="category">
                            Category
                        </label>
                        <select className="form-input" id="category"
                            name="category">
                            <option>
                                All categories
                            </option>
                            <option>
                                Strategy
                            </option>
                            <option>
                                Family
                            </option>
                            <option>
                                Party
                            </option>
                            <option>
                                Cooperative
                            </option>
                            <option>
                                Card Games
                            </option>
                            <option>
                                Abstract
                            </option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="players">
                            Players
                        </label>
                        <select className="form-input" id="players"
                            name="players">
                            <option>
                                Any player count
                            </option>
                            <option>
                                1–2 players
                            </option>
                            <option>
                                3–4 players
                            </option>
                            <option>
                                5+ players
                            </option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="play-time">
                            Play time
                        </label>
                        <select className="form-input" id="play-time"
                            name="play-time">
                            <option>
                                Any duration
                            </option>
                            <option>
                                Under 30 min
                            </option>
                            <option>
                                Under 60 min
                            </option>
                            <option>
                                60–120 min
                            </option>
                            <option>
                                Over 120 min
                            </option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="rating">
                            Rating
                        </label>
                        <select className="form-input" id="rating"
                            name="rating">
                            <option>
                                Any rating
                            </option>
                            <option>
                                7.0 and above
                            </option>
                            <option>
                                8.0 and above
                            </option>
                            <option>
                                9.0 and above
                            </option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="sort">
                            Sort by
                        </label>
                        <select className="form-input" id="sort"
                            name="sort">
                            <option>
                                Highest Rated
                            </option>
                            <option>
                                Newest
                            </option>
                            <option>
                                Alphabetical
                            </option>
                        </select>
                    </div>
                </div>
            </section>
        </>
    );
}