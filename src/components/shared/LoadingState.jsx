export default function LoadingState() {
    return (
        <section className="state-section" aria-labelledby="loading-title">
            <h3 id="loading-title">
                Loading games…
            </h3>
            <div className="skeleton-grid" aria-hidden="true">
                <div className="skeleton-card">
                    <div className="skeleton skeleton-image">
                    </div>
                    <div className="skeleton skeleton-text">
                    </div>
                    <div className="skeleton skeleton-text skeleton-text--short">
                    </div>
                </div>
                <div className="skeleton-card">
                    <div className="skeleton skeleton-image">
                    </div>
                    <div className="skeleton skeleton-text">
                    </div>
                    <div className="skeleton skeleton-text skeleton-text--short">
                    </div>
                </div>
                <div className="skeleton-card">
                    <div className="skeleton skeleton-image">
                    </div>
                    <div className="skeleton skeleton-text">
                    </div>
                    <div className="skeleton skeleton-text skeleton-text--short">
                    </div>
                </div>
                <div className="skeleton-card">
                    <div className="skeleton skeleton-image">
                    </div>
                    <div className="skeleton skeleton-text">
                    </div>
                    <div className="skeleton skeleton-text skeleton-text--short">
                    </div>
                </div>
            </div>
        </section>
    );
}