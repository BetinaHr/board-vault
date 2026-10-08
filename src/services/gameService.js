import request from '../utils/request.js'

const basePath = '/rest/v1/games'

export function getAll() {
    return request(`${basePath}?select=*`)
}

export async function getById(gameId) {
    const games = await request(
        `${basePath}?id=eq.${encodeURIComponent(gameId)}&select=*`
    )

    return games[0] ?? null
}