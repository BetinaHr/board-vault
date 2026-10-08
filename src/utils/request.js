const baseUrl = import.meta.env.VITE_SUPABASE_URL
const apiKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

export default async function request(path="/", method = 'GET', data = null) {
    const options = {
        method,
        headers: {
            apikey: apiKey,
            "Content-Type": "application/json"
        },
        body: data ? JSON.stringify(data) : null,
    }

    // if (method !== 'GET') {
    //     options.method = method;
    // };

    // if(data) {
    //     options.body = JSON.stringify(data);
    // }
    
    const response = await fetch(baseUrl + path, options);

    if(!response.ok) { 
        throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    return response.json();
}
