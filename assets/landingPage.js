const popupContainer = document.getElementById("popup-container");
const loginButton = document.getElementById("login")
const signupButton = document.getElementById("signup")

loginButton.addEventListener("click", showLoginPopup);
signupButton.addEventListener("click", showSignupPopup);

function showLoginPopup(event) {
    event.preventDefault();
    popupContainer.style.display = "block";
    document.getElementById("login-popup").style.display = "block";
    document.getElementById("signup-popup").style.display = "none";

}

function showSignupPopup(event) {
    event.preventDefault();
    popupContainer.style.display = "block";
    document.getElementById("login-popup").style.display = "none";
    document.getElementById("signup-popup").style.display = "block";

}

const closeButton = document.getElementById("close-button");
const overlay = document.getElementById("overlay");

closeButton.addEventListener("click", closePopup);
overlay.addEventListener("click", closePopup);

function closePopup() {
    popupContainer.style.display = "none";
}