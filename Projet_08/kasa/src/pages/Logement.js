import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Dropdown from "../components/Dropdown";
import Tag from "../components/Tag";
import Carousel from "../components/Carousel";
import "../styles/logement.scss";
import "../styles/dropdown.scss";

const Logement = () => {
  const location = useLocation();
  const propsData = location.state;
  const numberImages = propsData.pictures.length;

  // usestate pour le slide du carrousel
  const [slide, setSlide] = useState(0);
  const [indicator, setIndicator] = useState(1);

  const slideToRight = () => {
    setSlide(slide === numberImages - 1 ? 0 : slide + 1);
    setIndicator(indicator === numberImages ? 1 : indicator + 1);
  };
  const slideToLeft = () => {
    setSlide(slide === 0 ? numberImages - 1 : slide - 1);
    setIndicator(indicator === 1 ? numberImages : indicator - 1);
  };

  return (
    <>
      <Navbar />
      <div className="carousel">
        <img
          onClick={slideToLeft}
          className="arrow arrow-left"
          src="../images/arrow-left.png"
          alt="flêche de gauche"
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
        />
        {/* TODO : Aficher le numéro de l'image dans l'indicaeur */}
        <p>
          {indicator}/{numberImages}
        </p>
        {/* <span>
          {propsData.pictures.map((pictures, index) => {
            console.log(index + 1);
            return (
              <span>
                {index + 1}/{numberImages}
              </span>
            );
          })}
        </span> */}
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
              {/* retourne le nombre de tag et les affiche */}
              {propsData.tags.map((tag, index) => {
                return <Tag key={index} tag={tag} />;
              })}
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
