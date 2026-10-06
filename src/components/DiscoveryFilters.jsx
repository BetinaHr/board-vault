export default function DiscoveryFilters() {
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
                <button type="button" className="chip is-active" aria-pressed="true">All Games</button>
                <button type="button" className="chip" aria-pressed="false">Strategy</button>
                <button type="button" className="chip" aria-pressed="false">Family</button>
                <button type="button" className="chip" aria-pressed="false">Party</button>
                <button type="button" className="chip" aria-pressed="false">Cooperative</button>
                <button type="button" className="chip" aria-pressed="false">Card Games</button>
                <button type="button" className="chip" aria-pressed="false">Abstract</button>
            </div>
            <div className="session-filters">
                <span>Make it a game night:</span>
                <div className="chip-list">
                    <button type="button" className="chip" aria-pressed="false">1–2 Players</button>
                    <button type="button" className="chip" aria-pressed="false">3–4 Players</button>
                    <button type="button" className="chip" aria-pressed="false">5+ Players</button>
                    <button type="button" className="chip" aria-pressed="false">Under 60 min</button>
                </div>
            </div>
        </section>
    );
}