export default class ApiService {
    constructor() {
      this.baseUrl = 'https://api.themoviedb.org/3/';
      this.API_KEY = 'c2406e33bae3c04a8fdebb618c81ede7';
      this.query = '';
      this.language = 'en-US';
      this.movieId = '';
      this.fetchPageNumber = 1;
      this.pageNumber = 1;
    }
  
    get queryValue() {
      return this.query;
    };
    set queryValue(val) {
      this.query = val;
    };

    setPage = () => {
      return this.pageNumber += 1;
    };

    decreasePage = () => {
      return this.pageNumber -= 1;
    };

    resetPage = () => {
      return this.pageNumber = 1;
    };

    setFetchPage = () => {
      return this.fetchPageNumber += 1;
    };

    resetFetchPage = () => {
      return this.fetchPageNumber = 1;
    };
  
  
    fetchPopularFilms = () => {
      const params = `trending/movie/day?api_key=${this.API_KEY}&language=${this.language}&page=${this.fetchPageNumber}`;
      const url = `${this.baseUrl}${params}`;
      return fetch(url)
        .then(response => response.json())
        .then(data => data.results);
    };
  
    fetchSearchFilms = () => {
      const params = `search/movie?api_key=${this.API_KEY}&language=${this.language}&page=${this.fetchPageNumber}&include_adult=false&query=${this.queryValue}`;
      const url = `${this.baseUrl}${params}`;
      return fetch(url)
      .then((res) => res.json())
      .then((result) => {
        return result.results});
    };

    fetchFilmsDetails = () => {
        const params = `movie/${this.movieId}?api_key=${this.API_KEY}&language=${this.language}&page=${this.fetchPageNumber}&include_adult=false`;
        const url = `${this.baseUrl}${params}`;
        return fetch(url)
        .then((res) => res.json())
        .then((result) => {
            return result});
    };
    
    fetchFilmsActors = () => {
        const params = `movie/${this.movieId}/credits?api_key=${this.API_KEY}&language=${this.language}&page=${this.fetchPageNumber}&include_adult=false`;
        const url = `${this.baseUrl}${params}`;
        return fetch(url)
        .then((res) => res.json())
        .then((result) => {
            return result});
    };

    fetchFilmsReviews = () => {
        const params = `movie/${this.movieId}/reviews?api_key=${this.API_KEY}&language=${this.language}&page=${this.fetchPageNumber}&include_adult=false`;
        const url = `${this.baseUrl}${params}`;
        return fetch(url)
        .then((res) => res.json())
        .then((result) => {
            return result.results});
    };
  };