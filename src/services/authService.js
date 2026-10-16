import request from '../utils/request.js';

export function register(username, email, password) {
    return request('/auth/v1/signup', 'POST', {
        email,
        password,
        // supabase expects data object
        data : {username}
    })
}