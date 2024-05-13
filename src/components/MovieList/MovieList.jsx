import s from "./MovieList.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../service/moviesAPI";

const MovieList = () => {
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
    <div>
      <h1 className={s.title}>Trending Today</h1>
      <div className={s.wrap}>
        <ul className={s.list}>
          {movies.map((movie) => (
            <li className={s.item} key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieList;
