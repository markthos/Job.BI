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

});





// var submitBtn = document.getElementById("submitBtn");

// submitBtn.addEventListener("click", function(event) {
//   event.preventDefault();

//   var username = document.querySelector("#username").value;
//   var email = document.querySelector("#emai").value;
//   var password = document.querySelector("#password").value;

//   if (username === "") {
//     displayMessage("error", "Username cannot be blank");
//   } else if (email === "") {
//     displayMessage("error", "Email cannot be blank");
//   } else if (password === "") {
//     displayMessage("error", "Password cannot be blank");
//   } else {
//     displayMessage("success", "Registered successfully");

//     //TODO:Save username, email, and password in local storage
//     localStorage.setItem("username", username);
//     localStorage.setItem("email", email);
//     localStorage.setItem("password", password);
//   }

//    //Redirect the user to another page
//    window.location.href = "http://127.0.0.1:5500/profilePage.html";

// });

  // // Handle loginForm submit
  // const loginFormElement = document.getElementById("loginForm");
  // loginFormElement.addEventListener("submit", function(event) {
  //   event.preventDefault(); // Prevent the default form submission behavior
  //   const username = document.getElementById("username").value;
  //   const password = document.getElementById("password").value;

//   var formElement = document.getElementById("signupForm");
//   formElement.appendChild(messageElement);

//   setTimeout(function() {
//     formElement.removeChild(messageElement);
//   }, 3000);
// }



//TODO:Save username, email, and password in local storage
//localStorage.setItem("username", "email", "password")
  




  //   // Make an API request to authenticate the user
  //   // Replace 'API_ENDPOINT' with your URL of your API endpoint for login
  //   fetch("/api/GET https://api.linkedin.com/v2/me", {
  //     method: "POST",
  //     body: JSON.stringify({ username, password }),
  //     headers: {
  //       "Content-Type": "application/json" }
  //   })
  //   body: JSON.stringify({
  //        username: username,
  //        password: password
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //       // Handle the API response
  //       if (data.success) {
  //          // Login successful, perfom necessary actions (e.g. redirect, display success message)
  //          console.log("Login successful");
  //       } else {
  //           //Login failed, display error message or handle other error scenarios
  //         console.log("Login failed");
  //       }
  //     });
  // });


  // // Add an event listener to the login button
  // document.getElementById("loginBtn").addEventListener("click", function(event) {
  // event.preventDefault(); // Prevent the default form submission behavior

  // //   // Perform login validation and other necessary checks here
  // //   // If login is successful, redirect the user to the profile page
  //  window.location.href = "./profilePage.html";
  // // });

  // // // Add an event listener to the login button
  // document.getElementById("signupBtn").addEventListener("click", function(event) {
  // event.preventDefault(); // Prevent the default form submission behavior

  //   // Perform login validation and other necessary checks here
  // If login is successful, redirect the user to the profile page
  //   window.location.href = "./profilePage.html";
  // });


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
