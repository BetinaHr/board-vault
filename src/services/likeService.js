import request from '../utils/request.js';

const basePath = '/rest/v1/likes';

// Load the signed-in user's likes
export function getLikedGameIds(accessToken) {
    return request(
        `${basePath}?select=game_id`,
        'GET',
        null,
        accessToken
    );
}

export async function getLikedGames(accessToken) {
    const likes = await request(
        `${basePath}?select=game:games(*)`,
        'GET',
        null,
        accessToken
    );

    return likes.map(like => like.game).filter(Boolean);
}

// Like a game -> Supabase supplies user_id
export async function add(gameId, accessToken) {
    const likes = await request(
        basePath,
        'POST',
        { game_id: gameId },
        accessToken,
        { Prefer: 'return=representation' }
    );

    if (!likes?.length) {
        throw new Error('Could not like this game.');
    }

    return likes[0];
}

// Remove the signed-in user's like
// RLS ensures other users' likes cannot be deleted
export async function remove(gameId, accessToken) {
    const likes = await request(
        `${basePath}?game_id=eq.${encodeURIComponent(gameId)}`,
        'DELETE',
        null,
        accessToken,
        { Prefer: 'return=representation' }
    );

    if (!likes?.length) {
        throw new Error('Like not found or already removed.');
    }

    return likes[0];
}

export async function isLiked(gameId, accessToken) {
    const likes = await request(
        `${basePath}?game_id=eq.${encodeURIComponent(gameId)}&select=game_id`,
        'GET',
        null,
        accessToken
    );

    return likes.length > 0;
}