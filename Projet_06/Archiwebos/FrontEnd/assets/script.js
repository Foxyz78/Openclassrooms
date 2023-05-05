// Permet d'ajouter et d'afficher les images dynamiquement
function add_work() {
    fetch("http://localhost:5678/api/works")
        .then(response => response.json())
        .then(data => {
            const nb_work = data.length;
            for (i = 0; i < nb_work; i++) {
                const figure = document.createElement("figure")
                const img = document.createElement("img");
                const text = document.createElement("figcaption");
                img.src = data[i].imageUrl;
                text.innerHTML = data[i].title;
                figure.appendChild(img);
                figure.appendChild(text);
                document.querySelector(".gallery").appendChild(figure);
            }
        });
}
add_work();