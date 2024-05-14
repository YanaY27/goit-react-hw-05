import MovieList from "../../components/MovieList/MovieList";
import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../service/moviesAPI";
import s from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await fetchTrendingMovies();
        if (response && Array.isArray(response) && response.length > 0) {
          setMovies(response);
        } else {
          console.log("Trending movies: No results found");
        }
      } catch (err) {
        console.log("Trending movies: Error fetching data", err);
      }
    };
    getMovies();
  }, []);
  return (
    <>
      <h1 className={s.title}>Trending Today</h1>
      <MovieList movies={movies} />
    </>
  );
};

export default HomePage;
