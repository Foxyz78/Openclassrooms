async function load_works() {
    return (await fetch("http://localhost:5678/api/works")).json();
}
const works = await load_works();

async function load_categories() {
    return (await fetch("http://localhost:5678/api/categories")).json();
}
const categories = await load_categories();

// Récupère le token dans le localStorage
const token = window.localStorage.getItem("token");

const body = document.querySelector("body");
const arrow_left = document.querySelector(".fa-arrow-left");
const btn_modal = document.querySelector(".modal__button");
const gallery = document.querySelector(".modal__gallery");

const modal__works = document.querySelector(".modal__works");
const modal__add_image = document.querySelector(".modal__add-image");
const image_preview = document.querySelector("#image__preview");
const modal = document.querySelector("#modal");

// Génére la page dynamiquement avec les balises HTML
function get_work(works) {
    for (let i = 0; i < works.length; i++) {
        const figure = document.createElement("figure");
        const img = document.createElement("img");
        const text = document.createElement("figcaption");
        //const trash = document.createElement("i");

        img.src = works[i].imageUrl;
        text.innerHTML = works[i].title;
        figure.appendChild(img);
        figure.classList.add("imageId" + works[i].id);
        //trash.classList.add("fa-solid", "fa-trash-can");
        //figure.appendChild(trash);
        figure.appendChild(text);
        document.querySelector(".gallery").appendChild(figure);
    }
}

// Affichage des images dans la gallerie
get_work(works);

// Variables pour les boutons des filtres
const btn_reset = document.querySelector(".btn-tous");
const btn_hotel = document.querySelector(".btn-hotel");
const btn_objet = document.querySelector(".btn-objet");
const btn_appartement = document.querySelector(".btn-appartement");

// Réinitialise la gallerie en supprimant les balises enfants la classe ".gallery"
function reset_gallery() {
    document.querySelector(".gallery").innerHTML = "";
}

// Sélection de toutes les catégories
btn_reset.addEventListener("click", () => {
    const filter_all = works.filter(function (work) {
        return work.categoryId > 0 && work.categoryId < 4;
    });
    reset_gallery();
    get_work(filter_all);
});

// Sélection de la catégorie "objet"
btn_objet.addEventListener("click", () => {
    const filter_objet = works.filter(function (work) {
        return work.categoryId == 1;
    });
    reset_gallery();
    get_work(filter_objet);
});

// Sélection de la catégorie "appartement"
btn_appartement.addEventListener("click", () => {
    const filter_appartement = works.filter(function (work) {
        return work.categoryId == 2;
    });
    reset_gallery();
    get_work(filter_appartement);
});

// Sélection de la catégorie "hôtel"
btn_hotel.addEventListener("click", () => {
    const filter_hotel = works.filter(function (work) {
        return work.categoryId == 3;
    });
    reset_gallery();
    get_work(filter_hotel);
});

// Création de la fenêtre de dialogue
function open_modal(works) {
    const nb_work = works.length;
    modal__add_image.style.display = "none";
    modal__works.style.display = "flex";
    if (document.querySelector(".modal__gallery")) {
        for (let i = 0; i < nb_work; i++) {
            const figure = document.createElement("figure");
            const img = document.createElement("img");
            const text = document.createElement("span");
            const trash = document.createElement("i");
            const div = document.createElement("div");

            // Ajoute l'id sur les images afin de les cibler pour la suppression
            img.setAttribute("id", "imageId" + works[i].id);
            figure.classList.add("imageId" + works[i].id);

            img.src = works[i].imageUrl;
            text.innerHTML = "Editer";

            div.classList.add("delete-image");
            div.setAttribute("id", works[i].id);
            figure.appendChild(div);

            // Affichage de de l'icone poubelle sur l'image
            trash.classList.add("fa-solid", "fa-trash-can", "fa-2xs");
            figure.appendChild(img);
            div.appendChild(trash);
            figure.appendChild(text);
            document.querySelector(".modal__gallery").appendChild(figure);
        }

        const suppression = document.querySelectorAll(".delete-image");

        // Suppression d'un travail
        suppression.forEach(function (element) {
            element.addEventListener("click", async function (e) {
                // récupère l'id de l'image à supprimer
                const id_img = element.getAttribute("id");
                reset_gallery();
                delete_image(id_img, token);
                // const works = await load_works();
                // document.querySelector(".modal__gallery").innerHTML = "";
                // open_modal(works);

                /* Suppression du work de la modale dans le DOM */
                const img_deleted = document.querySelectorAll(".imageId" + id_img);
                img_deleted.forEach(function (e) {
                    e.remove();
                });
            });
        });
    }
}

btn_modal.addEventListener("click", () => {
    modal__add_image.style.display = "flex";
    modal__works.style.display = "none";
});

// Affiche les catégories enregistrées sur l'api dans la liste déroulante
function display_categories() {
    for (let i = 0; i < categories.length; i++) {
        const input_category = document.querySelector("select");
        const option = document.createElement("option");
        input_category.appendChild(option);
        option.innerHTML = categories[i].name;
        option.value = categories[i].id;
    }
}
display_categories();

// Ferme la fenêtre modale
function close_modal() {
    modal.style.display = "none";
    body.style.backgroundColor = "#FFFEF8";
    reset_form();
}

let btn_close = document.querySelectorAll(".close");
// Ferme la fenêtre modale en cliquant sur la croix
btn_close.forEach((e) => {
    e.addEventListener("click", function () {
        close_modal();
        reset_form();
    });
});

// Ferme la modale en cliquant à l'extérieure
document.addEventListener("click", function (event) {
    if (modal.style.display == "block") {
        if (!event.target.closest("#modal") && !event.target.closest(".mode-edition") && !event.target.closest(".delete-image")) {
            close_modal();
        }
    }
});

open_modal(works);
close_modal();

// Sélection du lien Login/logout dans la barre de navigation
let log = document.querySelector("nav li:nth-child(3)");

// Affiche le mode édition si le token est présent
if (token) {
    display_edtion_mode();
}

// Change la page d'acccueil en mode édition
function display_edtion_mode() {
    //Affichage du bouton modifier avec l'icone
    let edition = document.querySelectorAll(".mode-edition");
    edition.forEach((e) => {
        e.style.display = "flex";
    });
    log.innerHTML = "logout";
    // Suppression du filtre pour les projets
    document.querySelector(".portfolio__filtre").style.display = "none";
    document.querySelector("header").style.margin = "83px 0";
}

// Cible la div "edition__modification" qui contient l'icone et texte modifier
let btn__modifier = document.querySelector(".projet__edition");

// Ouvre la fenêtre modale en cliquant sur le bouton "modifier"
btn__modifier.addEventListener("click", () => {
    // Affiche la fenêtre modale
    modal.style.display = "block";
    body.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
    modal__add_image.style.display = "none";
    modal__works.style.display = "flex";
});

// Déconnexion et redirection sur la page "index.html"
function log_out() {
    log.addEventListener("click", function () {
        // suppression du token et redirection
        window.localStorage.removeItem("token");
        window.location.href = "index.html";
    });
}
log_out();

// Affichage de la fenêtre de dialogue précédente
arrow_left.addEventListener("click", () => {
    /* reset modal adding image en cliquant sur le bouton retour */
    const image_preview = document.querySelector(".box-preview-image");
    const input_title = document.querySelector(".input-title");
    if (image_preview.style.display == "none" || input_title.value != "") {
        reset_form();
    } else {
        modal__works.style.display = "flex";
        modal__add_image.style.display = "none";
    }
});

// Permet la prévisualisation de l'image dans le formulaire
function preview_image() {
    const reader = new FileReader();
    const file = document.querySelector("#upload_file").files[0];
    const input_title = document.querySelector(".input-title");

    reader.addEventListener(
        "load",
        () => {
            image_preview.src = reader.result;
        },
        false
    );

    if (file) {
        reader.readAsDataURL(file);
        image_preview.style.display = "flex";

        // Cache l'input pour l'upload, la span des détails et l'icone pour la preview
        document.querySelector(".box-preview-image").style.display = "none";
        document.querySelector(".btn__add-image").style.display = "none";
        document.querySelector(".image__details").style.display = "none";

        arrow_left.addEventListener("click", () => {
            reset_form();
        });
    }
}
// Chargement de la prévisualisation de l'image upload
upload_file.addEventListener("change", preview_image);

// Réinitialisation des valeurs par défaut du formaulaire de la fenêtre modale
function reset_form() {
    document.querySelector(".box-preview-image").style.display = "flex";
    document.querySelector(".btn__add-image").style.display = "flex";
    document.querySelector(".image__details").style.display = "block";
    image_preview.style.display = "none";
    document.querySelector(".formulaire").reset();
}

let btn_valider = document.querySelector(".modal__add-image .modal__button");
btn_valider.addEventListener("click", async (e) => {
    e.preventDefault();
    reset_gallery();
    //document.querySelector(".modal__works .modal__gallery").innerHTML = "";
    upload_image();
    close_modal();
});

// Upload du nouveau projet
async function upload_image() {
    const formData = new FormData();
    formData.append("image", document.querySelector("#upload_file").files[0]);
    formData.append("title", document.querySelector(".input-title").value);
    formData.append("category", document.querySelector(".input-category").value);

    try {
        await fetch("http://localhost:5678/api/works", {
            method: "POST",
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        });
        const works = await load_works();
        get_work(works);
        document.querySelector(".modal__works .modal__gallery").innerHTML = "";
        open_modal("works");
    } catch (error) {
        alert("problème de connexion : " + error);
    }
}

// Supprime une image. Paramètre : id de l'image et le token
async function delete_image(id, token) {
    try {
        await fetch("http://localhost:5678/api/works/" + id, {
            method: "DELETE",
            body: null,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const works = await load_works();
        get_work(works);
    } catch (error) {
        alert("problème de connexion : " + error);
    }
}

// Active le bouton "valider" si les champs du formulaire sont remplis"
function validate_form() {
    const input_title = document.querySelector(".input-title");

    input_title.addEventListener("keyup", (e) => {
        const value = e.target.value;
        const submit_button = document.querySelector(".modal__add-image .modal__button");
        submit_button.disabled = false;
        if (value === "") {
            submit_button.disabled = true;
        }
    });
}

validate_form();
