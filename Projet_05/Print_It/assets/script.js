const slides = [{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const banner_img = document.querySelector(".banner-img");
const dots = document.querySelector(".dots");
const paragraphe = document.querySelector("p");
const nb_image = slides.length;
let slide = 0;

const right_arrow = document.querySelector(".arrow_right");
const left_arrow = document.querySelector(".arrow_left");

// Fonction permettant d'affichant les bullets points du carroussel
function display_dot_slider() {
	dots.innerHTML = "<div class =\"dot dot_selected\"></div>"
	for (i = 0; i < nb_image - 1; i++) {
		dots.innerHTML += "<div class =\"dot\"></div>";
	}
}

function add_dot() {
	document.querySelector(".dot:nth-child(" + (slide + 1) + ")").classList.add("dot_selected");
}

function remove_dot(arg) {
	if (document.querySelector(".dot:nth-child(" + slide + ")") != null) {
		document.querySelector(".dot:nth-child(" + slide + ")").classList.remove("dot_selected");
	}
}

display_dot_slider();

function SlideDroit() {
	slide++;
	if (slide >= nb_image) {
		remove_dot();
		slide = 0;
	}
	banner_img.src = "./assets/images/slideshow/" + slides[slide].image;
	paragraphe.innerHTML = slides[slide].tagLine;
	add_dot();
	remove_dot();
}

function SlideGauche() {
	slide--;
	if (slide < 0) {
		document.querySelector(".dot:nth-child(" + (slide + 2) + ")").classList.remove("dot_selected");
		slide = nb_image - 1;
	}
	banner_img.src = "./assets/images/slideshow/" + slides[slide].image;
	paragraphe.innerHTML = slides[slide].tagLine;
	add_dot();
	if (document.querySelector(".dot:nth-child(" + (slide + 2) + ")") != null)
		document.querySelector(".dot:nth-child(" + (slide + 2) + ")").classList.remove("dot_selected");
}

right_arrow.addEventListener("click", SlideDroit);
left_arrow.addEventListener("click", SlideGauche);