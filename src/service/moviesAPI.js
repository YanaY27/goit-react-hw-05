import axios from "axios";

// const API_KEY = "52ef46285e9d51a7dd7050d6a021859d";

// const baseUrl = "https://api.themoviedb.org/3";

// export const fetchTrendingMovies = async () => {
//   const trendingUrl = `${baseUrl}/trending/movie/day?api_key=${API_KEY}`;
//   const { data } = await axios.get(trendingUrl);

//   return data;
// };

// export const fetchMovieById = async (id) => {
//   const movieUrl = `${baseUrl}/movie/${id}?api_key=${API_KEY}`;
//   const { data } = await axios.get(movieUrl);

//   return data;
// };

// export const fetchMovieByQuery = async (query) => {
//   const queryUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
//   const { data } = await axios.get(queryUrl);

//   return data.results;
// };

// export const fetchMovieCast = async (id) => {
//   const castUrl = `${baseUrl}/movie/${id}?api_key=${API_KEY}`;
//   const { data } = await axios.get(castUrl);
//   return data.cast;
// };

// export const fetchMovieReviews = async (id) => {
//   const reviewUrl = `${baseUrl}/movie/${id}?api_key=${API_KEY}`;
//   const { data } = await axios.get(reviewUrl);
//   return data.results;
// };

const baseUrl = "https://api.themoviedb.org/3/movie/";
const searchBaseUrl = "https://api.themoviedb.org/3/search/movie";
// const API_KEY = "52ef46285e9d51a7dd7050d6a021859d";

const options = {
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MmVmNDYyODVlOWQ1MWE3ZGQ3MDUwZDZhMDIxODU5ZCIsInN1YiI6IjY2M2Y1YzM2MjY1MmQ2YThjN2I0ZDVhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.06M_NgHTpgl2UPbUlSsXWM2ktLEr6Gf89TTprTK4thU`,
  },
};

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      options
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    return null;
  }
};

export const fetchMovieById = async (movieId) => {
  try {
    const url = `${baseUrl}${movieId}?language=en-US`;
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.error("Error fetching film by ID:", error);
    return null;
  }
};

export const fetchMovieCast = async (movieId) => {
  try {
    const url = `${baseUrl}${movieId}/credits?language=en-US`;
    const response = await axios.get(url, options);
    return response.data.cast;
  } catch (error) {
    console.error("Error fetching film cast:", error);
    return null;
  }
};

export const fetchMovieReviews = async (movieId) => {
  try {
    const url = `${baseUrl}${movieId}/reviews?language=en-US`;
    const response = await axios.get(url, options);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching film reviews:", error);
    return null;
  }
};

export const fetchMovieByQuery = async (query) => {
  try {
    const url = `${searchBaseUrl}?query=${encodeURIComponent(
      query
    )}&include_adult=false&language=en-US&page=1`;

    const response = await axios.get(url, options);
    return response.data.results;
  } catch (error) {
    console.error("Error searching for a movie:", error);
    return null;
  }
};
