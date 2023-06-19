const form = document.querySelector(".form__login");

function connexion() {
  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    let user = {
      email: event.target.querySelector("#email").value,
      password: event.target.querySelector("#password").value,
    };

    let result = await fetch("http://localhost:5678/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    let login = await result.json();

    // Si l'e-mail et le mot de passe sont corrects, un token est enregistré dans le local storage
    //et une redirection est faite sur la page d'accueil modifier en mode édition
    if (result.ok) {
      window.localStorage.setItem(login.userId, login.token);
      window.location.href = "index.html";
    } else document.querySelector(".error-email").innerHTML = "“Erreur dans l’identifiant ou le mot de passe”";
  });
}

connexion();
