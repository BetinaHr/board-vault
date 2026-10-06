import wingspanImage from '../assets/images/wingspan.svg'

export default function FeaturedGame() {
    return (
        <section className="hero" aria-labelledby="featured-title">
            <div className="hero__content">
                <span className="badge badge--light"><span aria-hidden="true">✦</span> Featured game of the week</span>
                <p className="hero__eyebrow">
                    A little wonder. A lot of strategy.
                </p>
                <h1 id="featured-title">
                    Let your next<br />game take flight.
                </h1>
                <p className="hero__description">
                    Discover <strong>Wingspan</strong>. Build a thriving bird sanctuary in a beautifully crafted game of
                    thoughtful choices and unexpected connections.
                </p>
                <div className="hero__meta">
                    <span>★ <strong>8.1</strong> rating</span><span>1–5 players</span><span>40–70
                        min</span><span>Strategy</span>
                </div>
                <div className="button-row">
                    <a className="button button--white" href="game-details.html">View Details <span
                        aria-hidden="true">↗</span></a>
                    {/* AUTHENTICATED USERS ONLY: collection actions require login. */}
                    <button className="button button--hero" type="button">+ Add to Vault</button>
                </div>
                <p className="hero__note">
                    For the curious. For the collectors. For game night.
                </p>
            </div>
            <div className="hero__image">
                <div className="hero__orbit" aria-hidden="true">
                </div>
                <img src={wingspanImage} alt="Illustrated Wingspan cover with a bird perched on a branch"
                    width="600" height="600" /><span className="hero__art-note">Your next favorite awaits.</span>
            </div>
        </section>
    );
}