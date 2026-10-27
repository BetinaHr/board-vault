
import './App.css'
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
import EditGame from './components/EditGame/EditGame.jsx';
import PrivateGuard from './components/guards/PrivateGuard.jsx';
import GuestGuard from './components/guards/GuestGuard.jsx';

function App() {

    return (
        <>
            <a className="skip-link" href="#main-content">Skip to content</a>
            <Header />

            <main id="main-content" className="container main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalog" element={<Catalog />} />

                    <Route element={<PrivateGuard />}>
                        <Route path="/my-vault" element={<MyVault />} />
                        <Route path="/create-game" element={<CreateGame />} />
                        <Route path="/edit-game/:gameId" element={<EditGame />} />
                    </Route>

                    <Route path="/game-details/:gameId" element={<GameDetails />} />

                    <Route element={<GuestGuard />}>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Route>

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App
