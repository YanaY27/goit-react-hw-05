import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../service/moviesAPI";
import s from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const data = await fetchMovieReviews(movieId);
        setReviews(data || []); // Убедимся, что data не равен null или undefined
      } catch (error) {
        console.log(error);
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <div>
      {reviews.length ? ( // Проверяем, что reviews не пустой массив
        <ul className={s.list}>
          {reviews.map((item) => (
            <li className={s.item} key={item.id}>
              <h4 className={s.name}>{item.author}</h4>
              <p className={s.text}>{item.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h4 className={s.err}>No reviews yet</h4>
      )}
    </div>
  );
};

export default MovieReviews;
