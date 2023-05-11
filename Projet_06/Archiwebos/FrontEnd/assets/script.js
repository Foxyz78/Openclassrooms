//Requête fetch pour récuperer les travaux sur l'api
const works = await fetch("http://localhost:5678/api/works").then(works => works.json());

// Génére la page dynamiquement avec les balises HTML
function get_work(works) {
    const nb_work = works.length;
    if (document.querySelector(".gallery")) {

        for (let i = 0; i < nb_work; i++) {
            const figure = document.createElement("figure")
            const img = document.createElement("img");
            const text = document.createElement("figcaption");

            img.src = works[i].imageUrl;
            text.innerHTML = works[i].title;
            figure.appendChild(img);
            figure.appendChild(text);
            document.querySelector(".gallery").appendChild(figure);
        }
    }
}

// Affichage de la page
get_work(works);

// Gestion des boutons pour les filtres
const btn_reset = document.querySelector(".btn-tous");
const btn_hotel = document.querySelector(".btn-hotel");
const btn_objet = document.querySelector(".btn-objet");
const btn_appartement = document.querySelector(".btn-appartement");

// Réinitialise la gallerie en supprimant les balises enfants la classe ".gallery"
function reset_gallery() {
    document.querySelector(".gallery").innerHTML = "";
}

btn_reset.addEventListener("click", function () {
    const filter_all = works.filter(function (work) {
        return work.categoryId > 0 && work.categoryId < 4;
    })
    reset_gallery();
    get_work(filter_all);
});

btn_objet.addEventListener("click", function () {
    const filter_objet = works.filter(function (work) {
        return work.categoryId == 1;
    })
    reset_gallery();
    get_work(filter_objet);
});

btn_appartement.addEventListener("click", function () {
    const filter_appartement = works.filter(function (work) {
        return work.categoryId == 2;
    })
    reset_gallery();
    get_work(filter_appartement);
});

btn_hotel.addEventListener("click", function () {
    const filter_hotel = works.filter(function (work) {
        return work.categoryId == 3;
    })
    reset_gallery();
    get_work(filter_hotel);
});