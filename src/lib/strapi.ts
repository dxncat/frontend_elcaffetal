const { API_HOST, API_TOKEN } = process.env;

export function query(url: string) {
    return fetch(`${API_HOST}/${url}`, {
        headers: {
            Authorization: `Bearer ${API_TOKEN}`
        }
    }).then(res => res.json())
}