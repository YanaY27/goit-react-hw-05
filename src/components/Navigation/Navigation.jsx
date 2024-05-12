import { NavLink } from "react-router-dom";
import clsx from "clsx";
import s from "./Navigation.module.css";

const Navigation = () => {
  const activeLink = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <nav className={s.nav}>
      <NavLink className={activeLink} to="/">
        Home
      </NavLink>

      <NavLink className={activeLink} to="/movies">
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
