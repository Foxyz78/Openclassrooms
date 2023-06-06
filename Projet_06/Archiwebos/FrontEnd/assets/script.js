// Requête fetch pour récuperer les travaux sur l'api
const works = await fetch("http://localhost:5678/api/works").then((works) =>
  works.json()
);

// Requête fetch pour récuperer les catégories sur l'api
const categories = await fetch("http://localhost:5678/api/categories").then(
  (categories) => categories.json()
);

// Récupère le token dans le localStorage
const tokenId = window.localStorage.getItem("1");

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
  const nb_work = works.length;
  if (document.querySelector(".gallery")) {
    for (let i = 0; i < nb_work; i++) {
      const figure = document.createElement("figure");
      const img = document.createElement("img");
      const text = document.createElement("figcaption");
      const trash = document.createElement("i");
      img.src = works[i].imageUrl;

      text.innerHTML = works[i].title;
      figure.appendChild(img);
      trash.classList.add("fa-solid", "fa-trash-can");
      figure.appendChild(trash);
      figure.appendChild(text);
      document.querySelector(".gallery").appendChild(figure);
    }
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
  if (document.querySelector(".modal__gallery")) {
    // Boucle permettant de créer la gallerie
    for (let i = 0; i < nb_work; i++) {
      const figure = document.createElement("figure");
      const img = document.createElement("img");
      const text = document.createElement("span");
      const trash = document.createElement("i");
      const div = document.createElement("div");

      // Ajoute l'id sur les images afin de les cibler pour la suppression
      img.setAttribute("id", "imageId" + works[i].id);

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

    suppression.forEach(function (element) {
      element.addEventListener("click", function (e) {
        // récupère l'id de l'image à supprimer
        const id_img = element.getAttribute("id");
        delete_image(id_img, tokenId);
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
    // todo: rajouter une id pour les catégories
  }
}

display_categories();

// Ferme la fenêtre modale
function close_modal() {
  let btn_close = document.querySelectorAll(".close");
  btn_close.forEach((e) => {
    e.addEventListener("click", function () {
      modal.style.display = "none";
      body.style.backgroundColor = "#FFFEF8";
      reset_modal();
    });
  });
}

// Fermeture de la fenêtre modale en cliquant en dehors de la fenêtre modale
window.onclick = function (event) {
  if (event.target === gallery) {
    gallery.style.display = "none";
    alert("Fermeture de la fenêtre modale");
  }
};

open_modal(works);
close_modal();

// Sélection du lien Login/logout dans la barre de navigation
let log = document.querySelector("nav li:nth-child(3)");

if (tokenId) {
  log.innerHTML = "logout";
  //document.querySelector(".mode-edition").style.display = "flex";
  display_edtion_mode();
}

// Change la page d'acccueil en mode édition
function display_edtion_mode() {
  //Affichage du bouton modifier avec l'icone
  let edition = document.querySelectorAll(".mode-edition");
  edition.forEach((e) => {
    e.style.display = "flex";
  });

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
    window.localStorage.removeItem("1");
    window.location.href = "index.html";
  });
}

//// TODO : bouton précent pour reset /////////////////
// Affichage de la fenêtre de dialogue précédente
arrow_left.addEventListener("click", () => {
  modal__works.style.display = "flex";
  modal__add_image.style.display = "none";
});

log_out();

// Création de la fonction qui permet l'affichage des images
function preview_image() {
  const reader = new FileReader();
  const file = document.querySelector("#upload_file").files[0];

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

    // Active le bouton valider
    document
      .querySelector(".modal__add-image .modal__button")
      .removeAttribute("disabled");

    arrow_left.addEventListener("click", () => {
      reset_modal();
    });
  }
}
// Chargement de la prévisualisation de l'image upload
upload_file.addEventListener("change", preview_image);

// Réinitialisation des valeurs par défaut de la fenêtre modale
function reset_modal() {
  document.querySelector(".box-preview-image").style.display = "flex";
  document.querySelector(".btn__add-image").style.display = "flex";
  document.querySelector(".image__details").style.display = "block";
  image_preview.src = "";
  image_preview.style.display = "none";
  document
    .querySelector(".modal__add-image .modal__button")
    .setAttribute("disabled", "disabled");
  document.querySelector(".input-title").value = "";
}

let input_title = document.querySelector(".input-title");
let btn_valider = document.querySelector(".modal__add-image .modal__button");

btn_valider.addEventListener("click", (e) => {
  e.preventDefault();
  upload_image();
});

// Upload du nouveau projet
async function upload_image() {
  const formData = new FormData();
  formData.append("image", document.querySelector("#upload_file").files[0]);
  formData.append("title", document.querySelector(".input-title").value);
  formData.append("category", document.querySelector(".input-category").value);

  try {
    const response = await fetch("http://localhost:5678/api/works", {
      method: "POST",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${tokenId}`,
      },
      body: formData,
    });
  } catch (error) {
    alert("probème de connexion : " + error);
  }
}

// Supprime une image. Paramètre : id de l'image et le token
function delete_image(id, token) {
  fetch("http://localhost:5678/api/works/" + id, {
    method: "DELETE",
    body: null,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => response.json());
  // Todo : supprimer l'image du DOM
}

function validate_form() {}
