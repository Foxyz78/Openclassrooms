// Iteration du nombre d'étoiles, stock une icone dans un tableau et retourne le tableau
const createStars = () => {
    const rating = propsData.rating;
    let stars = [];

    for (let i = 0; i < rating; i++) {
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
