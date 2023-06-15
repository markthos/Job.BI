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

  // Handle loginForm submit
  const loginFormContainer = document.getElementById("loginForm");
  loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Make an API request to authenticate the user
    // Replace 'API_ENDPOINT' with your URL of your API endpoint for login
    fetch("/api/v2/clientAwareMemberHandles", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json" }
    })
    body: JSON.stringify({
         username: username,
         password: password
    })
    .then(response => response.json())
    .then(data => {
        // Handle the API response
        if (data.success) {
           // Login successful, perfom necessary actions (e.g. redirect, display success message)
           console.log("Login successful");
        } else {
            //Login failed, display error message or handle other error scenarios
          console.log("Login failed");
        }
      });
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