import { useEffect, useState, useParams } from 'react'
import * as gameService from '../services/gameService.js'

export default function GameDetails() {
    const { gameId } = useParams();


    const [games, setGames] = useState([]);

    useEffect(() => {
        gameService.getAll()
            .then(setGames)
    }, [])

    const game = games.getById(gameId);
    return (
        <>
            {/*
           BREADCRUMB
           Contextual navigation from the catalog to the example game.
           Future React component: <Breadcrumb />. 
           */}
            <nav className="breadcrumb" aria-label="Breadcrumb">
                <a href="catalog.html">Catalog</a>
                <span aria-hidden="true">/</span><span aria-current="page">{game.title}</span>
            </nav>
            {/* 
            GAME DETAILS
            Future React component: <GameDetails />.
             */}
            <section className="game-details" aria-labelledby="game-title">
                <div className="game-details__art">
                    <img src={game.image_url} alt={`Illustrated ${game.title} game cover`} width="600" height="600" /><span className="art-caption">A game as beautiful as the birds it celebrates.</span>
                </div>
                <div className="game-details__content">
                    {/* <p className="eyebrow">
                        A modern classic
                    </p> */}
                    <div className="details-title">
                        <h1 id="game-title">
                            {game.title}
                        </h1>
                    </div>

                    <div className="chip-list">
                        <span className="badge">Strategy</span><span className="badge">Engine Building</span>
                    </div>
                    <p>
                        You are a bird enthusiast, seeking to discover and attract the best birds to your network of wildlife preserves. Every bird brings a new possibility.
                    </p>
                    <dl className="game-facts">
                        <div>
                            <dt>
                                Players
                            </dt>
                            <dd>
                                1–5
                            </dd>
                        </div>
                        <div>
                            <dt>
                                Play time
                            </dt>
                            <dd>
                                40–70 <small>min</small>
                            </dd>
                        </div>
                        {/* <div>
                            <dt>
                                Age
                            </dt>
                            <dd>
                                10+
                            </dd>
                        </div> */}
                    </dl>
                    {/* AUTHENTICATED USERS ONLY: collection and favorite actions require login. */}
                    {/* <div className="button-row">
                        <button className="button button--primary" type="button">+ Add to Vault</button>
                        <button className="button button--secondary" type="button" aria-pressed="false">♡ Favorite</button>
                    </div> */}
                    {/* RECORD OWNER ONLY: render Edit/Delete only if the current user created this record. */}
                    {/* <div className="owner-actions">
                        <span>Added by you</span><a href="edit-game.html">Edit game</a>
                        <a className="danger-link" href="edit-game.html#delete-confirmation">Delete game</a>
                    </div> */}
                </div>
            </section>
            <div className="details-layout">
                <div>
                    {/*
                    ABOUT THE GAME
                    Future React component: <GameAbout />. 
                    */}
                    <section className="surface section" aria-labelledby="about-title">
                        <p className="eyebrow">
                            The story behind the game
                        </p>
                        <h2 id="about-title">
                            About Wingspan
                        </h2>
                        <p>
                            Wingspan is a competitive, medium-weight, card-driven engine-building game. As a bird enthusiast, you discover and attract birds to three distinct habitats: forest, grassland, and wetland. Each habitat focuses on a different aspect of your growing sanctuary.
                        </p>
                        <p>
                            Gain food through custom dice in a birdfeeder, lay eggs using miniature eggs in a variety of colors, and draw from hundreds of unique bird cards. Beautiful illustrations and thoughtful interactions make every turn a small discovery.
                        </p>
                        <p>
                            Across four rounds, build combinations that work together, pursue shared goals, and find your own path to a flourishing preserve. Play solo or gather up to five bird lovers around the table.
                        </p>
                        <h3>
                            Categories &amp; mechanics
                        </h3>
                        <div className="chip-list">
                            <span className="badge">Strategy</span><span className="badge">Card Drafting</span><span className="badge">Engine Building</span><span className="badge">Set Collection</span>
                        </div>
                    </section>
                    {/* ======================================================
               COMMUNITY INTERACTION
               Favorites, sample comments, and a visual comment composer.
               Future React component: <CommentSection />.
          ======================================================= */}
                    <section className="surface section" aria-labelledby="community-title">
                        <div className="section-heading">
                            <h2 id="community-title">
                                Around the table <span className="count">2</span>
                            </h2>
                            <button className="button button--text" type="button" aria-pressed="false">♡ Like · 128</button>
                        </div>
                        <div className="comment-list">
                            {/* ======================================================
                   COMMUNITY COMMENT
                   One member’s name, date, and game impression.
                   Future React component: <Comment />.
              ======================================================= */}
                            <article className="comment-card">
                                <span className="avatar" aria-hidden="true">AM</span>
                                <div>
                                    <h3>
                                        Alex <span className="comment-date">October 2, 2026</span>
                                    </h3>
                                    <p>
                                        Great strategy game with beautiful artwork. The engine really comes together in the final round!
                                    </p>
                                </div>
                            </article>
                            {/* ======================================================
                   COMMUNITY COMMENT
                   A second member’s perspective on the game.
                   Future React component: <Comment />.
              ======================================================= */}
                            <article className="comment-card">
                                <span className="avatar avatar--sage" aria-hidden="true">MR</span>
                                <div>
                                    <h3>
                                        Maria <span className="comment-date">October 4, 2026</span>
                                    </h3>
                                    <p>
                                        Works surprisingly well with two players. It's become our favorite quiet Sunday game.
                                    </p>
                                </div>
                            </article>
                        </div>
                        {/* ======================================================
                 COMMENT COMPOSER
                 Authenticated members can later post a comment through React.
                 Future React component: <CommentForm />.
            ======================================================= */}
                        {/* AUTHENTICATED USERS ONLY: guests should see a login invitation instead. */}
                        <form className="comment-form">
                            <label className="form-label" htmlFor="comment">Share your experience</label>
                            <textarea className="form-input" id="comment" name="comment" rows="4" placeholder="What makes this game special at your table?"></textarea>
                            <div className="form-actions">
                                <button className="button button--primary" type="button">Post Comment</button>
                            </div>
                        </form>
                    </section>
                </div>
                {/* ======================================================
             GAME INFORMATION
             Structured information for the game, suitable for a reusable detail list.
             Future React component: <GameInformation />.
        ======================================================= */}
                <aside className="surface game-information" aria-labelledby="info-title">
                    <h2 id="info-title">
                        Game information
                    </h2>
                    <dl className="information-list">
                        <div>
                            <dt>
                                Designer
                            </dt>
                            <dd>
                                Elizabeth Hargrave
                            </dd>
                        </div>
                        <div>
                            <dt>
                                Publisher
                            </dt>
                            <dd>
                                Stonemaier Games
                            </dd>
                        </div>
                        <div>
                            <dt>
                                Release year
                            </dt>
                            <dd>
                                2019
                            </dd>
                        </div>
                        <div>
                            <dt>
                                Minimum players
                            </dt>
                            <dd>
                                1
                            </dd>
                        </div>
                        <div>
                            <dt>
                                Maximum players
                            </dt>
                            <dd>
                                5
                            </dd>
                        </div>
                        <div>
                            <dt>
                                Playing time
                            </dt>
                            <dd>
                                40–70 minutes
                            </dd>
                        </div>
                        <div>
                            <dt>
                                Minimum age
                            </dt>
                            <dd>
                                10 years
                            </dd>
                        </div>
                        <div>
                            <dt>
                                Difficulty
                            </dt>
                            <dd>
                                Medium · 2.4 / 5
                            </dd>
                        </div>
                    </dl>
                    <div className="information-note">
                        <span aria-hidden="true">✦</span>
                        <p>
                            A thoughtful pick for players who enjoy building something that gets better with every turn.
                        </p>
                    </div>
                </aside>
            </div>
        </>
    )
}
