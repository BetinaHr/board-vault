// import { useState } from 'react'


import './App.css'
import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import { Routes, Route } from 'react-router';
import Catalog from './components/Catalog/Catalog.jsx';
import Home from './components/Home/Home.jsx';
import NotFound from './components/NotFound';
import GameDetails from './components/GameDetails/GameDetails.jsx';
import MyVault from './components/Vault/Vault.jsx';
import Login from './components/auth/Login.jsx';
import Register from './components/auth/Register.jsx';



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
                    <Route path="/my-vault" element={<MyVault />} />
                    <Route path="/game-details/:gameId" element={<GameDetails />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App
