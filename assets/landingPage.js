// functionality of the inspirational quote
var searchitem = document.getElementById ("get-quote")
searchitem.addEventListener ("click",getQuotesList)

window.onload = getQuotesList
setInterval(getQuotesList, 15000); // Change quote every 15 seconds
function getQuotesList(e){

  fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) { 
      console.log(data);
      console.log(data.length)
      var ind = Math.floor(Math.random() * data.length)
      document.getElementById("quote").innerText = data[ind].text + " ~~~"+data[ind].author
    });
}

document.addEventListener("DOMContentLoaded", function() {
  var loginLink = document.getElementById("login");
  var signupLink = document.getElementById("signup");
  var loginForm = document.querySelector(".form-box.login");
  var signupForm = document.querySelector(".form-box.signup");

  loginForm.style.display = "none";
  signupForm.style.display = "none";

  loginLink.addEventListener("click", function(event) {
    event.preventDefault();
    loginForm.style.display = "block";
    signupForm.style.display = "none";
  });

  signupLink.addEventListener("click", function(event) {
    event.preventDefault();
    loginForm.style.display = "none";
    signupForm.style.display = "block";
  });

  document.getElementById("loginBtn").addEventListener("click", function(event) {
    event.preventDefault();
    // Perform login validation and other necessary checks here
    // If login is successful, redirect the user to the profile page
    var passwordInput = document.getElementById("loginPassword");
    var usernameInput = document.getElementById("loginUsername");
    
    var username = usernameInput.value.trim();
    var password = passwordInput.value.trim();
  
    // Retrieve user data from local storage
    var user = JSON.parse(localStorage.getItem("user"));
  
    if (user && user.username === username && user.password === password) {
      window.location.href = "http://127.0.0.1:5500/profilePage.html";
    } else {
      console.log("Invalid username or password. Please try again.");
    }
  });
  

  document.getElementById("signupBtn").addEventListener("click", function(event) {
    event.preventDefault();
    // Perform signup validation and other necessary checks here
    // If signup is successful, store user data in local storage and redirect the user to the profile page
    // Clear the form fields on clicking the signup button
  
    var nameInput = document.getElementById("signupName");
    var emailInput = document.getElementById("signupEmail");
    var passwordInput = document.getElementById("signupPassword");
  
    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    var password = passwordInput.value.trim();
  
    var user = {
      name: name,
      email: email,
      password: password,
      username: email, // Use the email as the username, you can modify this according to your requirements
    };
  
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "http://127.0.0.1:5500/profilePage.html";
  
    // Clear the form fields on clicking the signup button
    nameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
  });
});

