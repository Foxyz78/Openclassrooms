import { NavLink } from "react-router-dom";
import "../styles/navbar.scss";

const Navbar = () => {
  return (
    <header>
      <div className="navbar">
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
      </div>
    </header>
  );
};

export default Navbar;
