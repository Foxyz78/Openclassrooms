// Permet d'ajouter et d'afficher les images dynamiquement
function add_work() {
    for (i = 0; i <= 5; i++) {
        let work = i;
        const figure = document.createElement("figure")
        fetch("http://localhost:5678/api/works")
            .then(response => response.json())
            .then(data => {
                const img = document.createElement("img");
                const text = document.createElement("figcaption");
                img.src = data[work].imageUrl;
                text.innerHTML = data[work].title;
                figure.appendChild(img);
                figure.appendChild(text);
                document.querySelector(".gallery").appendChild(figure);
            });
    }
}
add_work();