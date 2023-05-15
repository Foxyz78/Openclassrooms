const form = document.querySelector(".form__login");

function connexion() {
    form.addEventListener("submit", async function (event) {
        event.preventDefault();
        let user = {
            email: event.target.querySelector("#email").value,
            password: event.target.querySelector("#password").value
        };

        console.log(JSON.stringify(user));

        let login = await fetch("http://localhost:5678/api/users/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        let response = await login;
        console.log(response);
        let body = await login.json();

        console.log("la connexion a échoué !!");
        if (user.email == "") {
            document.querySelector(".error-email").innerHTML = "Veuillez entrer votre e-mail !";
            console.log("email incorrect !!");
        }
        if (user.password == "") {
            document.querySelector(".error-password").innerHTML = "Veuillez entrer votre mot de passe !";
            console.log("mot de passe incorrect !!");
        }
        if (login.ok) {
            console.log("token : " + body.token);
            window.localStorage.setItem(body.id, body.token);
            window.location.href = "index.html";
        }
    })
}

connexion()


function check_login() {
    if (user.email == "") {
        document.querySelector(".error-email").innerHTML = "Veuillez entrer un e-mail !";
    }
    if (!login.ok) {
        document.querySelector(".error-password").innerHTML = "L'E-mail et/ou le mot de passe est incorrect !";
    }

    if (login.ok) {
        console.log("le mot de passe et l'email sont OK !");
        window.location.href = "index.html";
    }
}