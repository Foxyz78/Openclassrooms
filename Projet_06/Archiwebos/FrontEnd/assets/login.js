var user = {
    email: null,
    password: null
};

const form = document.querySelector(".form__login");



form.addEventListener("submit", function (event) {
    event.preventDefault();
    user.email = document.querySelector("#email").value;
    user.password = document.querySelector("#password").value;
    console.log(email + password);

    console.log("résultat du login : " + login.ok);

    if (login.ok) {
        console.log("le mot de passe et l'email sont OK !");
        window.location.href = "index.html";
    }
})

console.log("variable user : " + JSON.stringify(user));

let login = await fetch("http://localhost:5678/api/users/login", {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
});

console.log("résultat du fecth post : " + login.ok);

function check_login() {
    if (user.email == "") {
        document.querySelector(".error").innerHTML = "Veuillez entrer un e-mail !";
    }
    if (!login.ok) {
        document.querySelector(".error").innerHTML = "L'E-mail et/ou le mot de passe est incorrect !";
    }

    if (login.ok) {
        console.log("le mot de passe et l'email sont OK !");
        window.location.href = "index.html";
    }
}



//check_login();