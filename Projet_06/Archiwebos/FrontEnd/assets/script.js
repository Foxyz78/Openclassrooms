// Requête fetch pour récuperer les travaux sur l'api
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

// Création de la modal
function open_modal(works) {
    const nb_work = works.length;
    if (document.querySelector(".modal__gallery")) {
        for (let i = 0; i < nb_work; i++) {
            const figure = document.createElement("figure")
            const img = document.createElement("img");

            const text = document.createElement("span");

            img.src = works[i].imageUrl;
            text.innerHTML = "Editer";
            figure.appendChild(img);
            figure.appendChild(text);
            document.querySelector(".modal__gallery").appendChild(figure);
        }
    }
}

function close_modal() {
    let btn_close = document.querySelector(".close");
    btn_close.addEventListener("click", function () {
        document.querySelector("#modal").style.display = "none";
    })
}
open_modal(works);
close_modal();

const tokenId = window.localStorage.getItem("1");
// Sélection de du lien Login/logout dans la barre de navigation
let log = document.querySelector("nav li:nth-child(3)")

if (tokenId) {
    log.innerHTML = "logout";
    //document.querySelector(".mode-edition").style.display = "flex";
    display_edtion_mode();
}

// permet de changer la page d'acccueil en mode édition
function display_edtion_mode() {
    //Affichage du bouton modifier avec l'icone
    let edition = document.querySelectorAll(".mode-edition");
    edition.forEach(e => {
        e.style.display = "flex";
    })
    // Suppression du filtre pour les projets
    document.querySelector(".portfolio__filtre").style.display = "none";
    document.querySelector("header").style.margin = "83px 0"
}

// Cible la div "edition__modification" qui contient l'icone et texte modifier
let btn__modifier = document.querySelector(".edition__modification");

btn__modifier.addEventListener("click", function () {
    document.querySelector("#modal").style.display = "block";
})

function log_out() {
    log.addEventListener("click", function () {
        // suppression du token et redirection
        window.localStorage.removeItem("1");
        window.location.href = "index.html";
    });
}

log_out();