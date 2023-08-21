import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Dropdown from "../components/Dropdown";
import Tag from "../components/Tag";
import Carousel from "../components/Carousel";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../styles/logement.scss";
import "../styles/dropdown.scss";
import { render } from "@testing-library/react";

const Logement = () => {
  const location = useLocation();
  const propsData = location.state;

  const numberImages = propsData.pictures.length;

  const myArray = propsData.equipements;
  console.log(myArray);

  // console.log("tags : " + propsData.tags);
  let pictures = propsData.pictures;
  const slideToRight = () => {
    for (let i = 0; i < numberImages; i++) {
      pictures = propsData.pictures[i];
    }
    return <img className="carousel-images" src={pictures} alt="" />;
  };
  const slideToLeft = () => {
    for (let i = 0; i < numberImages; i--) {}
  };

  function test() {
    alert("Ceci est un test pour le listener...");
    const src = <img className="carousel-images" src="ezez" alt="" />;
  }

  return (
    <>
      <Navbar />
      <div className="carousel">
        <img
          onClick={() => test()}
          className="arrow-left"
          src="../images/arrow-left.png"
          alt="flêche de gauche"
        />
        <img className="carousel-images" src={propsData.pictures[0]} alt="" />
        {/* {propsData.pictures.map((pictures, index) => {
          return <img className="carousel-images" src={pictures} alt="" />;
        })} */}
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
