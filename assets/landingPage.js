document.addEventListener("DOMContentLoaded", function() {
    const loginLink = document.getElementById("login");
    const signupLink = document.getElementById("signup");
    const loginForm = document.querySelector(".form-box.login");
    const signupForm = document.querySelector(".form-box.signup");
  
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
  });
  
  // Save password to local storage
function savePassword(password) {
    localStorage.setItem("password", password);
  }
  
  // Retrieve password from local storage
  function getPassword() {
    return localStorage.getItem("password");
  }
  
  // Example usage
  const password = "mySecretPassword";
  savePassword(password);
  
  // Retrieve the saved password
  const savedPassword = getPassword();
  console.log(savedPassword); // Output: mySecretPassword
  