const BASE_API = 'https://yst.am/api/v2/';

class Api {
    async getSuggestion(id) {
        const query = await fetch(`${BASE_API}movie_suggestions.json?movie_id=${id}`);
        const { data } = await query.json();
        return data.movies
    }
}

export default new Api();