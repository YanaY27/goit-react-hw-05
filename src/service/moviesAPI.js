import axios from "axios";

const API_KEY = "52ef46285e9d51a7dd7050d6a021859d";
const baseUrl = "https://api.themoviedb.org/3";

export const fetchTrendingMovies = async () => {
  const trendingUrl = `${baseUrl}/trending/movie/day?api_key=${API_KEY}`;
  const { data } = await axios.get(trendingUrl);

  return data;
};

export const fetchMovieById = async (id) => {
  const movieUrl = `${baseUrl}/movie/${id}?api_key=${API_KEY}`;
  const { data } = await axios.get(movieUrl);

  return data;
};

// export const fetchMovieByQuery = async (query) => {
//   const queryUrl = `${baseUrl}/search/movie?api_key=${API_KEY}&query=${query}`;
//   const { data } = await axios.get(queryUrl);
//   return data;
// };

export const fetchMovieByQuery = async (query) => {
  const queryUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
  const { data } = await axios.get(queryUrl);

  return data.results;
};

export const fetchMovieCast = async (id) => {
  const castUrl = `${baseUrl}/movie/${id}?api_key${API_KEY}`;
  const { data } = await axios.get(castUrl);
  return data;
};

export const fetchMovieReviews = async (id) => {
  const reviewUrl = `${baseUrl}/movie/${id}?api_key${API_KEY}`;
  const { data } = await axios.get(reviewUrl);
  return data.results;
};
