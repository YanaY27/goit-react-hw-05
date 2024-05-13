import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../service/moviesAPI";
import s from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getCast = async () => {
      try {
        const data = await fetchMovieCast(movieId);
        setCast(data || []); // Проверяем, является ли data пустым или undefined, и устанавливаем пустой массив в этом случае
      } catch (error) {
        console.log(error);
      }
    };
    getCast();
  }, [movieId]);

  return (
    <div className={s.wrap}>
      <ul className={s.list}>
        {cast.slice(0, 10).map((actor) => (
          <li className={s.item} key={actor.id}>
            <img
              className={s.img}
              src={`https://image.tmdb.org/t/p/w92${actor.profile_path}`}
              alt={actor.name}
            />
            <h4 className={s.name}>{actor.name}</h4>
            <p className={s.char}>{actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
