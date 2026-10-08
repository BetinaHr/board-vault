// import { useState } from 'react'


import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router';
import Catalog from './components/Catalog';
import Home from './components/Home';
import NotFound from './components/NotFound';
import GameDetails from './components/GameDetails';

function App() {
    // const [count, setCount] = useState(0)

    return (
        <>
            <a className="skip-link" href="#main-content">Skip to content</a>
            <Header />

            <main id="main-content" className="container main-content">
                {/* <FeaturedGame /> */}
                {/* Games Filter - hidden -> DiscoveryFilters */}
                {/* <DiscoverGames /> */}

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/game-details/:id" element={<GameDetails />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App
