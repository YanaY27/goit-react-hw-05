import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchMovieByQuery } from "../../service/moviesAPI";
import { BiSearchAlt2 } from "react-icons/bi";
import s from "./MoviesPage.module.css";
import { Link } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const getMovieByQuery = async () => {
      try {
        const queryFromURL = searchParams.get("query") || "";
        const data = await fetchMovieByQuery(queryFromURL);
        if (Array.isArray(data)) {
          setMovies(data);
        } else {
          setMovies([]);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getMovieByQuery();
  }, [searchParams]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const searchValue = form.elements.query.value.trim();

    if (searchValue === "") {
      alert("Please enter the field");
      return;
    }
    // Встановлюємо всі параметри разом
    setSearchParams({ query: searchValue });
    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={s.form}>
        <div className={s.wrap}>
          <button className={s.btn} type="submit">
            <BiSearchAlt2 />
          </button>
        </div>
        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Movie title..."
          name="query"
        />
      </form>
      <div>
        <ul className={s.list}>
          {movies.map((movie) => (
            <li className={s.item} key={movie.id}>
              <Link className={s.link} to={`/movies/${movie.id}`}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MoviesPage;
