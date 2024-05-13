import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../service/moviesAPI";
import s from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [items, setActors] = useState([]);

  useEffect(() => {
    try {
      const getCast = async () => {
        const data = await fetchMovieCast(movieId);

        setActors(data);
      };
      getCast();
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  return (
    <div>
      <ul>
        {items.map((actor) => {
          return (
            <li key={actor.id}>
              <img
                className={s.img}
                src={`https://image.tmdb.org/t/p/w92${actor.profile_path}`}
                alt={actor.name}
              />
              <h4 className={s.name}>{actor.name}</h4>
              <p className={s.char}>{actor.character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieCast;
