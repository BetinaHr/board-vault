import request from '../utils/request.js';

export function register(username, email, password) {
    return request('/auth/v1/signup', 'POST', {
        email,
        password,
        // supabase expects data object
        data: { username }
    })
}

export function login( email, password ) {
    return request('/auth/v1/token?grant_type=password', 'POST', { 
        email, 
        password,
    })
}

export function logout(accessToken) {
    return request('/auth/v1/logout?scope=local', 'POST', null, accessToken)
}

// Refresh session after token expires
export function refreshSession(refreshToken) {
    return request(
        '/auth/v1/token?grant_type=refresh_token',
        'POST',
        { refresh_token: refreshToken }
    );
}