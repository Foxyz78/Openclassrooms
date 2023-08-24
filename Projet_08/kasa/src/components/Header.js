import { NavLink } from "react-router-dom";
import "../styles/header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="navLinks">
        <ul>
          <li>
            <img className="navbar-logo" src="../images/logo-kasa.png" />
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "activeLink" : undefined
              }
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "activeLink" : undefined
              }
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
