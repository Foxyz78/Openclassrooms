import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Iteration du nombre d'étoiles, stock une icone dans un tableau et retourne le tableau
const Rating = ({ rate }) => {
    let stars = [];

    for (let i = 0; i < rate; i++) {
        stars.push(
            <FontAwesomeIcon
                key={i}
                icon="fa-solid fa-star"
                size="xl"
                style={{ color: "#ff6060" }}
            />
        );
    }
    return stars;
};

export default Rating;
