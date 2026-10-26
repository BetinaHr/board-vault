import request from '../utils/request.js'

const basePath = '/rest/v1/games'

// FIND ALL GAMES
export function getAll() {
    return request(`${basePath}?select=*`)
}

// FIND GAME BY ID
export async function getById(gameId) {
    const games = await request(
        `${basePath}?id=eq.${encodeURIComponent(gameId)}&select=*`
    )

    // returns the first game or null if there isn't a matching game
    return games[0] ?? null
}

// CREATE GAME
export function create(gameData, accessToken) {
    return request(basePath, 'POST', gameData, accessToken);
}

// DELETE GAME
export async function remove(gameId, accessToken) {
    const deletedGames = await request(
        `${basePath}?id=eq.${encodeURIComponent(gameId)}`, 'DELETE', null, accessToken, { Prefer: 'return=representation' }
    );

    if (!deletedGames?.length) {
        throw new Error('Game not found.');
    }

    return deletedGames[0];
}