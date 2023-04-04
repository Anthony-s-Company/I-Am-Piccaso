const form = document.querySelector("#buy");

const NAME_REQUIRED = "Please enter your name";
const EMAIL_REQUIRED = "Please enter your email";
const EMAIL_INVALID = "Please enter a correct email address format";

form.addEventListener("submit", function (event) {
    let name = form.elements["name"].value
    let email = form.elements["email"].value

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
});
