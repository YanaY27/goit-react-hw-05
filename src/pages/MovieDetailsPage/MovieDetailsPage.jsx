import { Suspense, useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { fetchMovieById } from "../../service/moviesAPI";
import { IoArrowBack } from "react-icons/io5";
import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const goBackRef = useRef(location.state?.from ?? "/");

  useEffect(() => {
    try {
      const getMovieById = async () => {
        const data = await fetchMovieById(movieId);

        setMovie(data);
      };
      getMovieById();
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  return (
    <div>
      <Link to={goBackRef.current} className={s.btn}>
        <IoArrowBack size="30" /> Go back
      </Link>
      <div className={s.wrapper}>
        {movie && movie.poster_path && (
          <img
            className={s.img}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        )}
      </div>
      <div className={s.descr}>
        <h1 className={s.title}>
          {movie && movie.title} {movie && movie.release_date.split("-")[0]}
        </h1>
        <p className={s.text}>
          Rating:{" "}
          {movie && movie.vote_average && Math.round(movie.vote_average)}/10
        </p>
        {movie && (
          <div className={s.over}>
            <h2 className={s.subTitle}>Overview</h2>
            <p className={s.text}>{movie.overview}</p>
            {movie.genres && (
              <div>
                <h3 className={s.subTitleG}>Genres</h3>
                <ul className={s.list}>
                  {movie.genres.map((genre) => {
                    return (
                      <li className={s.item} key={genre.id}>
                        {genre.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
      <nav className={s.navWrap}>
        <NavLink to="cast" className={s.nav}>
          Cast
        </NavLink>
        <NavLink to="reviews" className={s.nav}>
          Reviews
        </NavLink>
      </nav>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
