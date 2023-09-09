import React, { useEffect, useState } from "react";

import Header from "../components/Header";
import Banner from "../components/Banner";
import Thumb from "../components/Thumb";
import Footer from "../components/Footer";

import "../styles/home.scss";

const $bannerHome = "./images/banner-home.jpg";

const Home = () => {
    async function loadLogements() {
        return (await fetch("logements.json")).json();
    }
    const [logements, setLogements] = useState([]);

    useEffect(() => {
        loadLogements().then((logements) => {
            setLogements(logements);
        });
    }, []);

    return (
        <>
            <Header />
            <div className="main-container">
                <Banner
                    srcImage={$bannerHome}
                    bannerTitle="Chez vous, partout et ailleurs"
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
                            //data={logement}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;
