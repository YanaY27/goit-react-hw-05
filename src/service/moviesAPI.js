import axios from "axios";

const API_KEY = "52ef46285e9d51a7dd7050d6a021859d";
const baseUrl = "https://api.themoviedb.org/3";

const trendingUrl = `${baseUrl}/trending/movie/day?api_key=${API_KEY}`;

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(trendingUrl);

  return data;
};

export const fetchMovieById = async (id) => {
  const movieUrl = `${baseUrl}/movie/${id}?api_key=${API_KEY}`;
  const { data } = await axios.get(movieUrl);

  return data;
};
