const ApiService = {
    baseURL: 'https://api.themoviedb.org/3/movie/popular?',
    genresURL: 'https://api.themoviedb.org/3/genre/movie/list?',
    searchURL: 'https://api.themoviedb.org/3/search/movie?',
    searchByIdURL: 'https://api.themoviedb.org/3/movie/',
    getTrendingURL: 'https://api.themoviedb.org/3/trending/all/day?',
    apiKey: 'api_key=c2406e33bae3c04a8fdebb618c81ede7',
    imgBasePath: 'https://image.tmdb.org/t/p/w500',
    page: 1,
    perPage: '',
    query: '',
    selectedMovieId: 539885,

    getTrending() {
        const asyncFetchFilms = async() => {
            const response = await fetch(
                `${this.getTrendingURL}${this.apiKey}&page=${this.page}`,
            );
            const data = await response.json();
            return data.results;
        };

        return asyncFetchFilms();
    },

    getSearch(queryString) {
        const asyncFetchSearch = async() => {
            const response = await fetch(
                `${this.searchURL}${this.apiKey}&page=${this.page}&query=${queryString}`,
            );
            const data = await response.json();

            console.log(data.results);
            return data.results;
        };

        return asyncFetchSearch();
    },
    getFilmById(id = this.selectedMovieId) {
        const asyncFetchSearch = async() => {
            const response = await fetch(
                `${this.searchByIdURL}${id}?${this.apiKey}`,
            );
            const data = await response.json();
            return data;
        };

        return asyncFetchSearch();
    },
    getCastById(id = this.selectedMovieId) {
        const asyncFetchSearch = async() => {
            const response = await fetch(
                `${this.searchByIdURL}${id}/credits?${this.apiKey}`,
            );
            const data = await response.json();
            return data;
        };

        return asyncFetchSearch();
    },
    getReviewsById(id = this.selectedMovieId) {
        const asyncFetchSearch = async() => {
            const response = await fetch(
                `${this.searchByIdURL}${id}/reviews?${this.apiKey}`,
            );
            const data = await response.json();
            return data;
        };

        return asyncFetchSearch();
    },
};

export default ApiService;