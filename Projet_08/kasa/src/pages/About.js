import React, { useEffect } from "react";

import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Dropdown from "../components/Dropdown";
import "../styles/about.scss";

const p = document.querySelector(".content-dropdown");
const arrowUp = document.querySelector(".arrow-dropdown-up");
const arrowDown = document.querySelector(".arrow-dropdown-down");

const $bannerAbout = "./images/banner-about.jpg";

function show() {
  p.style.display = "flex";
  arrowDown.style.display = "flex";
  arrowUp.style.display = "none";
}

function hide() {
  p.style.display = "none";
  arrowUp.style.display = "flex";
  arrowDown.style.display = "none";
}

const About = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="main-container">
        <Banner
          srcImage={$bannerAbout}
          altImage="montagnes avec une rivière qui coule au milieu"
        />
        <div className="">
          <Dropdown
            title="Fiabilité"
            content_dropdown="Les annonces passées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrementvérifiées par nos équipes."
          />
          <Dropdown
            title="Respect"
            content_dropdown="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
          <Dropdown
            title="Service"
            content_dropdown="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
          <Dropdown
            title="Sécurité"
            content_dropdown="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
également des ateliers sur la sécurité domestique pour nos hôtes."
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
