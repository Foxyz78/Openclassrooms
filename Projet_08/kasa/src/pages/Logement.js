import { useState } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Navbar from "../components/Header";
import Footer from "../components/Footer";
import Dropdown from "../components/Dropdown";
import Tag from "../components/Tag";

import "../styles/logement.scss";
import "../styles/dropdown.scss";

const Logement = () => {
  const location = useLocation();
  const propsData = location.state;
  const numberImages = propsData.pictures.length;

  // Iteration du nombre d'étoiles, stock une icone dans un tableau et retourne le tableau
  const createStars = () => {
    const rating = propsData.rating;
    let stars = [];

    for (let i = 0; i < rating; i++) {
      stars.push(
        <FontAwesomeIcon
          icon="fa-solid fa-star"
          size="xl"
          style={{ color: "#ff6060" }}
        />
      );
    }
    return stars;
  };

  // Usestate pour le slide du carrousel
  const [slide, setSlide] = useState(0);
  const [indicator, setIndicator] = useState(1);

  // Fonctions permettant de faire défilier les inmages
  const slideToRight = () => {
    setSlide(slide === numberImages - 1 ? 0 : slide + 1);
    setIndicator(indicator === numberImages ? 1 : indicator + 1);
  };
  const slideToLeft = () => {
    setSlide(slide === 0 ? numberImages - 1 : slide - 1);
    setIndicator(indicator === 1 ? numberImages : indicator - 1);
  };

  // Constantes pour affaicher et cacher les fleches du carrousel
  const displayFlex = { display: "flex" };
  const displayNone = { display: "none" };

  return (
    <>
      <Navbar />
      <div className="carousel">
        <img
          onClick={slideToLeft}
          className="arrow arrow-left"
          src="../images/arrow-left.png"
          alt="flêche de gauche"
          style={numberImages > 1 ? displayFlex : displayNone}
        />
        {propsData.pictures.map((pictures, index) => {
          return (
            <img
              key={index}
              className={slide === index ? "slide" : "slide slide-hidden"}
              src={pictures}
              alt={propsData.title}
            />
          );
        })}
        <img
          onClick={slideToRight}
          className="arrow arrow-right"
          src="../images/arrow-right.png"
          alt="flêche de droite"
          style={numberImages > 1 ? displayFlex : displayNone}
        />
        <p>
          {/* Affiche l'indicateur du nombre d'image et le cache s'il n'y a qu'une seule image */}
          {numberImages > 1 ? indicator + "/" + numberImages : null}
        </p>
      </div>

      <div className="main-container" id="">
        <div className="info">
          <div className="info-logement">
            <div className="title-tag">
              <div className="title-container">
                <h1 className="title">{propsData.title}</h1>
                <h2 className="location">{propsData.location}</h2>
              </div>

              <div className="tag">
                <div className="tag-container">
                  {/* retourne le nombre de tag et les affiche */}
                  {propsData.tags.map((tag, index) => {
                    return <Tag key={index} tag={tag} />;
                  })}
                </div>
              </div>
            </div>
            <div className="host-star">
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
              <div className="star">
                <div className="star-red">{createStars()}</div>
                <div className="star-white">
                  <FontAwesomeIcon
                    icon="fa-solid fa-star"
                    size="xl"
                    style={{ color: "#e3e3e3" }}
                  />
                  <FontAwesomeIcon
                    icon="fa-solid fa-star"
                    size="xl"
                    style={{ color: "#e3e3e3" }}
                  />
                  <FontAwesomeIcon
                    icon="fa-solid fa-star"
                    size="xl"
                    style={{ color: "#e3e3e3" }}
                  />
                  <FontAwesomeIcon
                    icon="fa-solid fa-star"
                    size="xl"
                    style={{ color: "#e3e3e3" }}
                  />
                  <FontAwesomeIcon
                    icon="fa-solid fa-star"
                    size="xl"
                    style={{ color: "#e3e3e3" }}
                  />
                </div>
              </div>
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
                content_dropdown={propsData.equipements.map(
                  (equipement, index) => {
                    return (
                      <span key={index} className="tag-name">
                        {equipement}
                      </span>
                    );
                  }
                )}
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
