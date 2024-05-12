import s from "./MovieList.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../service/moviesAPI";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    try {
      const getMovies = async () => {
        const { results } = await fetchTrendingMovies();
        setMovies(results);
      };
      getMovies();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div>
      <h1 className={s.title}>Trending Today</h1>
      <div className={s.wrap}>
        <ol className={s.list}>
          {movies.map((movie) => {
            return (
              <li className={s.item} key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default MovieList;
