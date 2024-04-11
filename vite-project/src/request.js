const API_KEY = "ebe99c60e6addcf9dd347d91ae0ff8e5";
const BASE_URL = "/discover/tv?api_key=";

export const requests = {
	fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=ja`,
	fetchNetflixOriginals: `${BASE_URL}${API_KEY}&with_networks=213`,
	fetchTopRated: `${BASE_URL}${API_KEY}&language=ja`,
	fetchActionMovies: `${BASE_URL}${API_KEY}&with_genres=28`,
	fetchComedyMovies: `${BASE_URL}${API_KEY}&with_genres=35`,
	fetchHorrorMovies: `${BASE_URL}${API_KEY}&with_genres=27`,
	fetchRomanceMovies: `${BASE_URL}${API_KEY}&with_genres=10749`,
	fetchDocumentaries: `${BASE_URL}${API_KEY}&with_genres=99`,
}