// Function for inspirational quote
var searchitem = document.getElementById("get-quote");
searchitem.addEventListener("click", getQuotesList);

window.onload = getQuotesList;
setInterval(getQuotesList, 15000); // Change quote every 15 seconds

function getQuotesList(e) {
  fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data.length);
      var ind = Math.floor(Math.random() * data.length);
      document.getElementById("quote").innerText = data[ind].text + " ~~~" + data[ind].author;
    });
}

document.addEventListener("DOMContentLoaded", function () {
  var loginLink = document.getElementById("login");
  var signupLink = document.getElementById("signup");
  var loginForm = document.querySelector(".form-box.login");
  var signupForm = document.querySelector(".form-box.signup");

  loginForm.style.display = "none";
  signupForm.style.display = "none";

  loginLink.addEventListener("click", function (event) {
    event.preventDefault();
    loginForm.style.display = "block";
    signupForm.style.display = "none";
  });

  signupLink.addEventListener("click", function (event) {
    event.preventDefault();
    loginForm.style.display = "none";
    signupForm.style.display = "block";
  });

  function showModalMessage(message) {
    var modal = document.createElement("div");
    modal.textContent = message;
    modal.style.position = "fixed";
    modal.style.top = "50%";
    modal.style.left = "50%";
    modal.style.transform = "translate(-50%, -50%)";
    modal.style.backgroundColor = "#fff";
    modal.style.padding = "20px";
    modal.style.border = "1px solid #ccc";
    modal.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";
    modal.style.zIndex = "9999";
  
    var closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.addEventListener("click", function () {
      modal.remove();
    });
  
    modal.appendChild(closeButton);
  
    document.body.appendChild(modal);
  }


  function auth() {
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");

    var username = usernameInput.value.trim();
    var password = passwordInput.value.trim();

    // Retrieve user data from local storage
    var user = JSON.parse(localStorage.getItem("user"));

    if (user && user.username === username && user.password === password) {
      // Redirect the user to the profile page
      window.location.href = "profilePage.html";
    } else {
      console.log("Invalid username or password. Please try again.");
      showModalMessage("Invalid username or password. Please try again.");
    }
  }

  document.getElementById("loginBtn").addEventListener("click", function (event) {
    event.preventDefault();
    auth(); // Call the auth function for login authentication
  });

  document.getElementById("signupBtn").addEventListener("click", function (event) {
    event.preventDefault();

    // Perform signup validation and other necessary checks here

    var usernameInput = document.getElementById("usernameInput");
    var emailInput = document.getElementById("emailInput");
    var passwordInput = document.getElementById("passwordInput");

    var username = usernameInput.value.trim();
    var email = emailInput.value.trim();
    var password = passwordInput.value.trim();

    var user = {
      username: username,
      email: email,
      password: password,
    };

    // Encode the user object as a query parameter in the URL
    var queryString = "?user=" + encodeURIComponent(JSON.stringify(user));

    // Redirect the user to the profile page with the query parameter
    window.location.href = "http://127.0.0.1:5500/profilePage.html" + queryString;

    // Clear the form fields on clicking the signup button
    usernameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
  });
});
