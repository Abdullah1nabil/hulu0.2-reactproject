const API_KEY = "api_key=8c6502f64245740440722466552ac0d5";

export default {
  fetchTrending: {
    title: "TRENDING",
    url: `/trending/all/week?${API_KEY}&language=en-US`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?${API_KEY}&language=en-US`,
  },
  fetchActionMovies: {
    title: "Action",
    url: `/discover/movie?${API_KEY}&language=en-US`,
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `/discover/movie?${API_KEY}&language=en-US`,
  },
  fetchHorrorMovies: {
    title: "Horror",
    url: `/discover/movie?${API_KEY}&language=en-US`,
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: `/discover/movie?${API_KEY}&language=en-US`,
  },
  fetchMystery: {
    title: "Mystery",
    url: `/discover/movie?${API_KEY}&language=en-US`,
  },
  fetchSciFi: {
    title: "Sci-Fi",
    url: `/discover/movie?${API_KEY}&language=en-US`,
  },
  fetchWestren: {
    title: "Westren",
    url: `/discover/movie?${API_KEY}&language=en-US`,
  },
  fetchAnimation: {
    title: "Animation",
    url: `/discover/movie?${API_KEY}&language=en-US`,
  },
  fetchTV: {
    title: "TV Movie",
    url: `/discover/movie?${API_KEY}&language=en-US`,
  },
};
