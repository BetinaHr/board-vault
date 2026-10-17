
import './App.css'
import { useState } from 'react';
import { Routes, Route } from 'react-router';

import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import Catalog from './components/Catalog/Catalog.jsx';
import Home from './components/Home/Home.jsx';
import NotFound from './components/shared/NotFound.jsx';
import GameDetails from './components/GameDetails/GameDetails.jsx';
import MyVault from './components/Vault/Vault.jsx';
import Login from './components/auth/Login.jsx';
import Register from './components/auth/Register.jsx';
import CreateGame from './components/CreateGame/CreateGame.jsx';
import * as authService from './services/authService.js';

function App() {
    const [user, setUser] = useState(null);
    const [accessToken, setAccessToken] = useState(null);

    // Receives the whole user from onRegister
    const userAuthHandler = (userData) => {
        setUser(userData.user);
        setAccessToken(userData.access_token) // supabase field
        // console.log("User: ", userData)
    }

    const onLogout = async () => {
        try {
            await authService.logout(accessToken);
            setUser(null);
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <>
            <a className="skip-link" href="#main-content">Skip to content</a>
            <Header user={user} onLogout={onLogout} />

            <main id="main-content" className="container main-content">
                {/* <FeaturedGame /> */}
                {/* Games Filter - hidden -> DiscoveryFilters */}
                {/* <DiscoverGames /> */}

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/my-vault" element={<MyVault />} />
                    <Route path="/create-game" element={<CreateGame />} />
                    <Route path="/game-details/:gameId" element={<GameDetails />} />
                    <Route path="/login" element={<Login onLogin={userAuthHandler} />} />
                    <Route path="/register" element={<Register onRegister={userAuthHandler} />} />
                    <Route path="/logout" element={onLogout} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App
