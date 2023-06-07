const form = document.querySelector(".form__login");

function connexion() {
  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    let user = {
      email: event.target.querySelector("#email").value,
      password: event.target.querySelector("#password").value,
    };

    let login = await fetch("http://localhost:5678/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    //let response = await login;
    let body = await login.json();

    // Si l'e-mail et le mot de passe sont corrects, un token est enregistré dans le local storage
    //et une redirection est faite sur la page d'accueil modifier en mode édition
    if (login.ok) {
      window.localStorage.setItem(body.userId, body.token);
      window.location.href = "index.html";
    } else document.querySelector(".error-email").innerHTML = "“Erreur dans l’identifiant ou le mot de passe”";
  });
}

connexion();

function check_login() {
  if (user.email == "") {
    document.querySelector(".error-email").innerHTML =
      "Veuillez entrer un e-mail !";
  }
  if (!login.ok) {
    document.querySelector(".error-password").innerHTML =
      "L'E-mail et/ou le mot de passe est incorrect !";
  }
  if (login.ok) {
    console.log("le mot de passe et l'email sont OK !");
    window.location.href = "index.html";
  }
}
