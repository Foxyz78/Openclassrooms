import React from "react";

import Header from "../components/Header";
import Banner from "../components/Banner";
import Thumb from "../components/Thumb";
import Footer from "../components/Footer";

const $bannerHome = "./images/banner-home.jpg";

async function loadLogements() {
  return (await fetch("logements.json")).json();
}
const logements = await loadLogements();

const Home = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        <Banner
          srcImage={$bannerHome}
          bannerTitle=""
          altImage="paysage montrant de vagues se fracassant sur une falaise"
        />

        <div className="gallery">
          {logements.map((logement) => (
            <Thumb
              key={logement.id}
              title={logement.title}
              id={logement.id}
              host_name={logement.host.name}
              host_picture={logement.host.picture}
              description={logement.description}
              rating={logement.rating}
              location={logement.location}
              tags={logement.tags}
              cover={logement.cover}
              pictures={logement.pictures}
              equipements={logement.equipments}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
