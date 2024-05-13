import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchMovieReviews from "../../service/moviesAPI";
import s from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [review, setReviews] = useState(null);

  useEffect(() => {
    try {
      const getReviews = async () => {
        const data = await fetchMovieReviews(movieId);
        setReviews();
      };
      getReviews();
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  return (
    <div>
      {review.results.length ? (
        <ul className={s.list}>
          {review.results.map((item) => {
            return (
              <li className={s.item} key={item.id}>
                <h4 className={s.name}>{item.author}</h4>
                <p className={s.text}>{item.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <h4 className={s.oops}>No reviews yet</h4>
      )}
    </div>
  );
};

export default MovieReviews;
