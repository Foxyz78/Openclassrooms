import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Header";
import "../styles/notfound.scss";

const NotFound = () => {
  return (
    <>
      <Navbar />

      <div className="main-container page-404">
        <div className="wrapper-404">
          <h2>404</h2>
        </div>
        <h3>Oops! La page que vous demandez n'existe pas.</h3>
        <Link to="/">retourner sur la page d'accueil</Link>
      </div>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
};
export default NotFound;
