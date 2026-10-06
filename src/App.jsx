// import { useState } from 'react'


import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import FeaturedGame from './components/FeaturedGame'
// import DiscoverGames from './components/DiscoverGames';
import { Routes, Route } from 'react-router';
import Catalog from './components/Catalog';
import Home from './components/Home';

function App() {
    // const [count, setCount] = useState(0)

    return (
        <>
            <a className="skip-link" href="#main-content">Skip to content</a>
            <Header />

            <main id="main-content" className="container main-content">
                <FeaturedGame />
                {/* Games Filter - hidden -> DiscoveryFilters */}
                {/* <DiscoverGames /> */}

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalog" element={<Catalog />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App
