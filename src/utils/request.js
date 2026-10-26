const baseUrl = import.meta.env.VITE_SUPABASE_URL
const apiKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

export default async function request(path = "/", method = 'GET', data = null, accessToken = null, extraHeaders = {}) {
    const options = {
        method,
        headers: {
            apikey: apiKey,
            "Content-Type": "application/json",
            ...extraHeaders,
        },
        body: data ? JSON.stringify(data) : null,
    }

    // if (method !== 'GET') {
    //     options.method = method;
    // };

    // if(data) {
    //     options.body = JSON.stringify(data);
    // }

    if (accessToken) {
        options.headers.Authorization = `Bearer ${accessToken}`;
    }


    const response = await fetch(baseUrl + path, options);

    if (response.status === 204) {
        return null;
    }

    if (!response.ok) {
        const error = await response.json();

        throw new Error(
            error.message || `Error: ${response.status} ${response.statusText}`
        );
    }

    const text = await response.text();
    return text ? JSON.parse(text) : null;
}
