document.addEventListener("DOMContentLoaded", function() {
    const loginLink = document.getElementById("login");
    const signupLink = document.getElementById("signup");
    const loginForm = document.querySelector(".form-box.login");
    const signupForm =  document.querySelector(".form-box.signup");
 
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


  // Add an event listener to the login button
  document.getElementById("loginBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Perform login validation and other necessary checks here
    // If login is successful, redirect the user to the profile page
    window.location.href = "./profilePage.html";
  });

  // Add an event listener to the login button
  document.getElementById("signupBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Perform login validation and other necessary checks here
    // If login is successful, redirect the user to the profile page
    window.location.href = "./profilePage.html";
  });


//  loginForm.addEventListener("click", function(event) {
//       event.preventDefault();
//       loginForm.style.display = "none";
//       signupForm.style.display = "block";

//     });
  
//   signupForm.addEventListener("click", function(event) {
//       event.preventDefault();
//       loginForm.style.display = "block";
//       signupForm.style.display = "none";
//   });

});