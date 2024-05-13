import { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { fetchMovieById } from "../../service/moviesAPI";
import { IoArrowBack } from "react-icons/io5";
import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

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
      <Link to="/">
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
        <h1>
          {movie && movie.title} {movie && movie.release_date.split("-")[0]}
        </h1>
        <p className={s.text}>
          Rating:{" "}
          {movie && movie.vote_average && Math.round(movie.vote_average)}/10
        </p>
        {movie && (
          <div>
            <h2 className={s.subTitle}>Overview</h2>
            <p className={s.text}>{movie.overview}</p>
            {movie.genres && (
              <div>
                <h3 className={s.genreTitle}>Genres</h3>
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
      <nav>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </nav>
    </div>
  );
};

export default MovieDetailsPage;
