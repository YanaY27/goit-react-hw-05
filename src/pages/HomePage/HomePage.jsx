import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  return (
    <>
      <MovieList />
    </>
  );
};

export default HomePage;

// import { FcSearch } from "react-icons/fc";
// import { useState } from "react";
// const HomePage = ({ onSearch }) => {
//   const [searchValue, setSearchValue] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (searchValue.trim() === "") {
//       ("Please enter text to search for images");
//       return;
//     }
//     onSearch(searchValue);
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit} className={s.form}>
//         <button className={s.btn} type="submit">
//           <FcSearch />
//         </button>
//         <input
//           className={s.input}
//           type="text"
//           autoComplete="off"
//           autoFocus
//           placeholder="Search movies"
//           value={searchValue}
//           onChange={(e) => setSearchValue(e.target.value)}
//         />
//       </form>
//     </div>

//   );
// };

// export default HomePage;
