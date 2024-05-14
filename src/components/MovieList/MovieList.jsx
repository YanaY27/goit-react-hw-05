import s from "./MovieList.module.css";
import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
      <h1 className={s.title}>Trending Today</h1>
      <div className={s.wrap}>
        <ul className={s.list}>
          {movies.map((movie) => (
            <li className={s.item} key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={location}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieList;

// const [movies, setMovies] = useState([]);

// useEffect(() => {
//   const getMovies = async () => {
//     try {
//       const response = await fetchTrendingMovies();
//       if (response && Array.isArray(response) && response.length > 0) {
//         setMovies(response);
//       } else {
//         console.log("Trending movies: No results found");
//       }
//     } catch (err) {
//       console.log("Trending movies: Error fetching data", err);
//     }
//   };
//   getMovies();
// }, []);
