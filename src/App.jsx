
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
import { useState } from 'react';
import CreateGame from './components/CreateGame/CreateGame.jsx';


function App() {
    const [user, setUser] = useState(null);

    // receives the whole user from onRegister
    const userAuthHandler = (userData) => {
        setUser(userData);
        console.log("User: ", userData)

    }
    
    const onLogout = () => {
        setUser(null);
    }

    return (
        <>
            <a className="skip-link" href="#main-content">Skip to content</a>
            <Header user={user} onLogout={onLogout}/>

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
                    <Route path="/logout" element={onLogout}/>

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App
