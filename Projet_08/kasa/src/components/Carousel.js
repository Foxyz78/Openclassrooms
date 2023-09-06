import { useState } from "react";
import { useLocation } from "react-router-dom";

import "../styles/carousel.scss";

const Carousel = () => {
    // Usestate pour le slide du carrousel
    const [slide, setSlide] = useState(0);
    const [indicator, setIndicator] = useState(1);

    const location = useLocation();
    const propsData = location.state;
    const numberImages = propsData.pictures.length;

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
                        className={
                            slide === index ? "slide" : "slide slide-hidden"
                        }
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
    );
};
export default Carousel;
