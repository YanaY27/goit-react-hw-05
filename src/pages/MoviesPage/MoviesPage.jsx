import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchMovieByQuery } from "../../service/moviesAPI";
import { BiSearchAlt2 } from "react-icons/bi";
import s from "./MoviesPage.module.css";
import { Link } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    // Отримати значення параметра "query" з URL
    const params = new URLSearchParams(searchParams);
    const queryFromURL = params.get("query") || "";

    // Встановити значення query з URL
    setQuery(queryFromURL);
  }, [searchParams]);

  useEffect(() => {
    const getMovieByQuery = async () => {
      try {
        const data = await fetchMovieByQuery(query);
        if (Array.isArray(data)) {
          setMovies(data);
        } else {
          setMovies([]); // Якщо data не є масивом, вставити movies в пустий масив
        }
      } catch (error) {
        console.log(error);
      }
    };
    getMovieByQuery();
  }, [query]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const searchValue = form.elements.query.value;

    if (searchValue.trim() === "") {
      alert("Please enter the field");
      return;
    }
    // Оновлення параметру "query" у URL з новим значенням
    setSearchParams({ query: searchValue });
    // setQuery(searchValue); // Більше не потрібно, оскільки значення query оновлюється через searchParams
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
          {movies.map((movie) => {
            return (
              <li className={s.item} key={movie.id}>
                <Link className={s.link} to={`/movies/${movie.id}`}>
                  {movie.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MoviesPage;
