// // Event listeners for the login and signup buttons
// document.getElementById("login").addEventListener("click", showLoginForm);
// document.getElementById("signup").addEventListener("click", showSignupForm);

// // Event listener for the login form submission
// document.getElementById("loginBtn").addEventListener("click", handleLogin);

// // Event listener for the signup form submission
// document.getElementById("submitBtn").addEventListener("click", handleSignup);

// // Function to hide the signup and login forms initially
// function hideForms() {
//   document.getElementById("loginForm").style.display = "none";
//   document.getElementById("signupForm").style.display = "none";
// }

// // Function to show the login form
// function showLoginForm() {
//   document.getElementById("loginForm").style.display = "block";
//   document.getElementById("signupForm").style.display = "none";
// }

// // Function to show the signup form
// function showSignupForm() {
//   document.getElementById("loginForm").style.display = "none";
//   document.getElementById("signupForm").style.display = "block";
// }

// // Function to validate the login credentials
// function isValidCredentials(username, password) {
//   // You can customize this function to perform your desired validation logic
//   // For example, you can check if the username and password match the stored values in localStorage
//   var storedUsername = localStorage.getItem("username");
//   var storedPassword = localStorage.getItem("password");

//   return username === storedUsername && password === storedPassword;
// }

// // Function to handle the login form submission
// function handleLogin(event) {
//   event.preventDefault(); // Prevent form submission

//   var username = document.getElementById("username").value;
//   var password = document.getElementById("password").value;

//   // Perform login validation and redirection
//   if (isValidCredentials(username, password)) {
//     // Store the credentials in localStorage
//     localStorage.setItem("username", username);
//     localStorage.setItem("password", password);

  
//     window.location.href = "http://127.0.0.1:5500/profilePage.html"; // Redirect to profile page
//   } 
// }

//  // Function to handle the signup form submission
// function handleSignup(event) {
//   event.preventDefault(); // Prevent form submission

//   var username = document.getElementById("usernameInput").value;
//   var email = document.getElementById("emailInput").value;
//   var password = document.getElementById("passwordInput").value;

//   // Store the signup information in localStorage or perform any desired actions
//   localStorage.setItem("username", username);
//   localStorage.setItem("email", email);
//   localStorage.setItem("password", password);


//   // Redirect to another page if needed
//   window.location.href = "http://127.0.0.1:5500/profilePage.html";
// }

// // Function to check if the user is already logged in
// function checkLoggedIn() {
//   var loggedIn = localStorage.getItem("loggedIn");
//   if (loggedIn === "true") {
//     window.location.href = "http://127.0.0.1:5500/profilePage.html";
//   }
// }

// functionality of the inspirational quote
var searchitem = document.getElementById ("get-quote")
searchitem.addEventListener ("click",getQuotesList)

window.onload = getQuotesList

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

// document.addEventListener("DOMContentLoaded", function() {
//   const loginLink = document.getElementById("login");
//   const signupLink = document.getElementById("signup");
//   const loginForm = document.querySelector(".form-box.login");
//   const signupForm =  document.querySelector(".form-box.signup");

//   loginForm.style.display = "none";
//   signupForm.style.display = "none"; 

//   loginLink.addEventListener("click", function(event) {
//     event.preventDefault();
//     loginForm.style.display = "block";
//     signupForm.style.display = "none";
//   });

//   signupLink.addEventListener("click", function(event) {
//     event.preventDefault();
//     loginForm.style.display = "none";
//     signupForm.style.display = "block";
//   });

//   document.getElementById("loginBtn").addEventListener("click", function(event) {
//     event.preventDefault();
//     window.location.href = "./profilePage.html";
//   });

//   document.getElementById("signupBtn").addEventListener("click", function(event) {
//     event.preventDefault();
//     window.location.href = "./profilePage.html";
//   });
// });

// document.addEventListener("DOMContentLoaded", function() {
//   const loginLink = document.getElementById("login");
//   const signupLink = document.getElementById("signup");
//   const loginForm = document.querySelector(".form-box.login");
//   const signupForm =  document.querySelector(".form-box.signup");

//  loginForm.style.display = "none";
//   signupForm.style.display = "none"; 


// loginLink.addEventListener("click", function(event) {
//   event.preventDefault();
//   loginForm.style.display = "block";
//   signupForm.style.display = "none";
// });

// signupLink.addEventListener("click", function(event) {
//   event.preventDefault();
//   loginForm.style.display = "none";
//   signupForm.style.display = "block";
// });


// // Add an event listener to the login button
// document.getElementById("loginBtn").addEventListener("click", function(event) {
//   event.preventDefault(); // Prevent the default form submission behavior

//   // Perform login validation and other necessary checks here
//   // If login is successful, redirect the user to the profile page
//   window.location.href = "./profilePage.html";
// });

// // Add an event listener to the login button
// document.getElementById("signupBtn").addEventListener("click", function(event) {
//   event.preventDefault(); // Prevent the default form submission behavior

//   // Perform login validation and other necessary checks here
//   // If login is successful, redirect the user to the profile page
//   window.location.href = "./profilePage.html";
// });
// });

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
    var emailInput = document.getElementById("loginEmail");
    var passwordInput = document.getElementById("loginPassword");
    var usernameInput = document.getElementById("loginUsername");

    var email = emailInput.value.trim();
    var username = usernameInput.value.trim();
    var password = passwordInput.value.trim();

    // Retrieve user data from local storage
    var user = JSON.parse(localStorage.getItem("user"));

    if (user && user.email === email && user.password === password) {
      window.location.href = "http://127.0.0.1:5500/profilePage.html";
    } else {
      console.log("Invalid email or password. Please try again.");
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
    var confirmPasswordInput = document.getElementById("confirmPassword");

    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    var password = passwordInput.value.trim();
    var confirmPassword = confirmPasswordInput.value.trim();

    if (password === confirmPassword) {
      var user = {
        name: name,
        email: email,
        password: password,
      };

      localStorage.setItem("user", JSON.stringify(user));
      window.location.href = "http://127.0.0.1:5500/profilePage.html";
      
      // Clear the form fields on clicking the signup button
      nameInput.value = "";
      emailInput.value = "";
      passwordInput.value = "";
      confirmPasswordInput.value = "";

    } else {
      console.log("Passwords do not match. Please try again.");
    }
  });
});

