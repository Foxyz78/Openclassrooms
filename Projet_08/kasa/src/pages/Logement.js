import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Dropdown from "../components/Dropdown";
import Tag from "../components/Tag";

import "../styles/logement.scss";
import "../styles/dropdown.scss";

const Logement = () => {
  const location = useLocation();
  const propsData = location.state;

  const numberImages = propsData.pictures.length;

  const slideToRight = () => {
    for (let i = 0; i < numberImages; i++) {}
  };
  const slideToLeft = () => {
    for (let i = 0; i < numberImages; i--) {}
  };

  return (
    <>
      <Navbar />
      <div className="carroussel">
        <img
          className="arrow-left"
          src="../images/arrow-left.png"
          alt="flêche de gauche"
        />
        <img className="carroussel-images" src={propsData.pictures[0]} alt="" />
        <img
          className="arrow-right"
          src="../images/arrow-right.png"
          alt="flêche de droite"
        />
        <p>1/{numberImages}</p>
      </div>
      <div className="main-container" id="">
        <div className="info">
          <div className="info-logement">
            <div className="title">
              <h1 className="title">{propsData.title}</h1>
              <h2 className="location">{propsData.location}</h2>
            </div>
            <div className="host">
              <div className="name">
                <p>{propsData.host.name}</p>
              </div>
              <img
                className="host-image"
                src={propsData.host.picture}
                alt="photo du proprio"
              />
            </div>
          </div>
          <div className="tag-star">
            <div className="tag-container">
              <Tag />
              <Tag />
              <Tag />
            </div>
            <div className="star">
              <img src="./images/star.png" alt="étoiles" />
            </div>
          </div>
          <div className="dropdown">
            <div className="description">
              <Dropdown
                title="Description"
                content_dropdown={propsData.description}
              />
            </div>
            <div className="equipement">
              <Dropdown
                title="Equipement"
                content_dropdown={propsData.equipements}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Logement;
