const API_KEY = "2ba564451c243250192539ac47f939c4";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language-US`,
  
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language-US`,
    
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,

  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,

  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};


export default requests;