import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h1>Sorry, something went wrong</h1>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFoundPage;
