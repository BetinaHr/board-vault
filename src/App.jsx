// import { useState } from 'react'


import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import FeaturedGame from './components/FeaturedGame'
import DiscoverGames from './components/DiscoverGames';

function App() {
    // const [count, setCount] = useState(0)

    return (
        <>
            <a className="skip-link" href="#main-content">Skip to content</a>
            <Header />

            <main id="main-content" className="container main-content">
                <FeaturedGame />
                {/* Games Filter - hidden -> DiscoveryFilters */}
                <DiscoverGames />
                {/* ======================================================
                 COLLECTION INVITATION
                 Encourages visitors to curate a personal vault.
                 Future React component: <CollectionInvitation />.
            ======================================================= */}
                <section className="collection-banner">
                    <div>
                        <p className="eyebrow">
                            More than a shelf
                        </p>
                        <h2>
                            Your games. Your stories. Your vault.
                        </h2>
                        <p>
                            Keep the ones you love close, and leave a little room for what comes next.
                        </p>
                    </div>
                    <a className="button button--primary" href="my-vault.html">Explore My Vault →</a>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default App
