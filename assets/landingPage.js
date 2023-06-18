// Event listeners for the login and signup buttons
document.getElementById("login").addEventListener("click", showLoginForm);
document.getElementById("signup").addEventListener("click", showSignupForm);

// Event listener for the login form submission
document.getElementById("loginBtn").addEventListener("click", handleLogin);

// Event listener for the signup form submission
document.getElementById("submitBtn").addEventListener("click", handleSignup);

// Function to hide the signup and login forms initially
function hideForms() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("signupForm").style.display = "none";
}

// Function to show the login form
function showLoginForm() {
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("signupForm").style.display = "none";
}

// Function to show the signup form
function showSignupForm() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("signupForm").style.display = "block";
}

// Function to validate the login credentials
function isValidCredentials(username, password) {
  // You can customize this function to perform your desired validation logic
  // For example, you can check if the username and password match the stored values in localStorage
  var storedUsername = localStorage.getItem("username");
  var storedPassword = localStorage.getItem("password");

  return username === storedUsername && password === storedPassword;
}

// Function to handle the login form submission
function handleLogin(event) {
  event.preventDefault(); // Prevent form submission

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Perform login validation and redirection
  if (isValidCredentials(username, password)) {
    // Store the credentials in localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("You are successfully logged in");
    window.location.href = "http://127.0.0.1:5500/profilePage.html"; // Redirect to profile page
  } else {
    alert("Invalid username or password");
  }
}

// Function to handle the signup form submission
function handleSignup(event) {
  event.preventDefault(); // Prevent form submission

  var username = document.getElementById("usernameInput").value;
  var email = document.getElementById("emailInput").value;
  var password = document.getElementById("passwordInput").value;

  // Store the signup information in localStorage or perform any desired actions
  localStorage.setItem("username", username);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  alert("Signup successful. You can now login ");
  // Redirect to another page if needed
  window.location.href = "http://127.0.0.1:5500/profilePage.html";
}

// Function to check if the user is already logged in
function checkLoggedIn() {
  var loggedIn = localStorage.getItem("loggedIn");
  if (loggedIn === "true") {
    window.location.href = "http://127.0.0.1:5500/profilePage.html";
  }
}

// Function to initialize the page
function initializePage() {
  hideForms();
  checkLoggedIn();
}

// Event listeners for the login and signup buttons
document.getElementById("login").addEventListener("click", showLoginForm);
document.getElementById("signup").addEventListener("click", showSignupForm);

// Call the initializePage function when the page loads
window.addEventListener("load", initializePage);

// Function to clear the input fields in the login form
function clearLoginForm() {
  document.getElementById('username').value = '';
  document.getElementById('email').value = '';
  document.getElementById('password').value = '';
}

// Function to clear the input fields in the signup form
function clearSignupForm() {
  document.getElementById('usernameInput').value = '';
  document.getElementById('emailInput').value = '';
  document.getElementById('passwordInput').value = '';
}

// // Get the input elements
// var textInput = document.getElementById('textInput');
// var submitButton = document.getElementById('submitButton');

// Function to clear the text input
function clearTextInput() {
  textInput.value = '';
}

// Function to handle the submit event
function handleSubmit() {
  // Your submit logic goes here
  console.log('Submitted:', textInput.value);
  clearTextInput();
}

// Add event listener for button click
submitButton.addEventListener('click', handleSubmit);

// Add event listener for "Enter" key press
textInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    handleSubmit();
  }
});
