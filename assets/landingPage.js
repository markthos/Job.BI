document.addEventListener("DOMContentLoaded", function() {
  var loginLink = document.getElementById("login");
  var signupLink = document.getElementById("signup");
  var loginForm = document.querySelector(".form-box.login");
  var signupForm =  document.querySelector(".form-box.signup");
  // const name = document.getElementById("name");
  // const email = document.getElementById("email");
  // const password = document.getElementById("password");
  // const form = document.getElementById("form");

//   // Create var user data
// var user = {
//   username: 'Mama Mo',
//   email: 'monique.merzoug@icloud.com',
//   password: '123456789',
// };

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

// Define const user data
var userData = {
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "password123"
};

//  // // Store user data in local storage
 localStorage.setItem("userData", JSON.stringify(userData));

// // Retrieve user data from local storage
var retrievedUser = JSON.parse(localStorage.getItem("userData"));

// Function to update the HTML with user data
var displayUserData = (user) => {
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var form = document.getElementById("form");

  name.innerText = user.name;
  email.innerText = user.email;
  password.innerText = user.password;
};

// Call the function to update the HTML
 displayUserData(retrievedUser);

 // Function to update the HTML
 

//  // Save user data to local storage
// localStorage.setItem('user', JSON.stringify(user));

// // Retrieve username and password data from local storage
// var retrievedUser = JSON.parse(localStorage.getItem('username, password'));

// ;



//   form.addEventListener("submit", (e) => {
//     e.preventDefault();

//   });
// });
  // //   validateInputs();
  // // });

  // // const setError = (element, message) => {
  // //   const inputControl = element.parentElement;
  // //   const errorDisplay = inputControl.querySelector(".error");

  // //   errorDisplay.innerText = message;
  // //   inputControl.classList.add("error");
  // //   inputControl.classList.remove('success');
  // // }

  // // const validateInputs = () => {
  // //   const usernameValue = usernameValue.value.trim;
  // //   const emailValue = emailValue.value.trim;
  // //   const passwordValue = passwordValue.value.trim;


  // //    if (username.value === '' || name.value === null) {
  // //      message.push("Name is required");
  // //    }
  // //    if (email.value === '' || email.value === null) {
  // //     message.push("Email is required");
  // //    }
  // //    if (password.value === '' || password.value === null) {
  // //     message.push("Password is required"); 
  // //   if (message.length > 0) {
  // //     displayMessage("error", message);
  // //   } else {
  // //     //Redirect the user to another page
  // //     window.location.href = "http://127.0.0.1:5500/profilePage.html";
  // //   }
  //    });
  




// var signupFormElement = document.getElementById("signupForm");

//   signupFormElement.addEventListener("submit", function(event) {
//     event.preventDefault();

//     var username = document.querySelector("#usernameInput").value;
//     var email = document.querySelector("#emailInput").value;
//     var password = document.querySelector("#passwordInput").value;

//     if (username === "") {
//       displayMessage("error", "Username cannot be blank");
//     } else if (email === "") {
//       displayMessage("error", "Email cannot be blank");
//     } else if (password === "") {
//       displayMessage("error", "Password cannot be blank");
//     } else {
//       displayMessage("success", "Registered successfully");

//       // Redirect the user to another page
//       window.location.href = "http://127.0.0.1:5500/profilePage.html";
//     }
//   });

//   function validateSignup(username, email, password) {
//     if (username.trim() === "") {
//       displayMessage("error", "Username cannot be blank");
//       return false;
//     }
  
//     if (email.trim() === "") {
//       displayMessage("error", "Email cannot be blank");
//       return false;
//     }
  
//     if (!isValidEmail(email)) {
//       displayMessage("error", "Invalid email format");
//       return false;
//     }
  
//     if (password.trim() === "") {
//       displayMessage("error", "Password cannot be blank");
//       return false;
//     }
  
//     return true;
//   }
  
// });


// var loginBtn = document.getElementById("loginBtn");
// var signupBtn = document.getElementById("signupBtn");
// var signupForm = document.querySelector(".form-box.signup");

// signupForm.addEventListener("submit", function(event) {
//   event.preventDefault();

//   var username = document.querySelector("#usernameField").value;
//   var password = document.querySelector("#passwordField").value;

//   if (username === "") {
//     displayMessage("error", "Username cannot be blank");
//   } else if (password === "") {
//     displayMessage("error", "Password cannot be blank");
//   } else {
//     displayMessage("success", "Registered successfully");

//     // Redirect the user to another page
//     window.location.href = "http://127.0.0.1:5500/profilePage.html";

//     // TODO: Save username and password in local storage
//     localStorage.setItem("username", username);
//     localStorage.setItem("password", password);
//   }
// });

// var signupForm = document.getElementById("signupForm");

// signupForm.addEventListener("submit", function(event) {
//   event.preventDefault();

//   var username = document.querySelector("#usernameInput").value;
//   var email = document.querySelector("#emailInput").value;
//   var password = document.querySelector("#passwordInput").value;

//   if (username === "") {
//     displayMessage("error", "Username cannot be blank");
//   } else if (email === "") {
//     displayMessage("error", "Email cannot be blank");
//   } else if (password === "") {
//     displayMessage("error", "Password cannot be blank");
//   } else {
//     displayMessage("success", "Registered successfully");

//     // Redirect the user to another page
//     window.location.href = "http://127.0.0.1:5500/anotherPage.html";
//   }
// });

// loginBtn.addEventListener("click", function(event) {
//   event.preventDefault();

// var username = document.querySelector("#usernameField").value;
// var password = document.querySelector("#passwordField").value;

// if (username === "") {
//  displayMessage("error", "Username cannot be blank");
//    } else if (email === "") {
//      displayMessage("error", "Email cannot be blank");
//     } else if (password === "") {
//      displayMessage("error", "Password cannot be blank");
//     } else {
//     displayMessage("success", "Registered successfully");

//      //Redirect the user to another page
//     window.location.href = "http://127.0.0.1:5500/profilePage.html";

//     //TODO:Save username, email, and password in local storage
//      localStorage.setItem("username", username);
//      localStorage.setItem("email", email);
//     localStorage.setItem("password", password);
//    }
//   });

  //signupBtn.addEventListener

//if (username === "") {
//     //displayMessage("error", "Username cannot be blank");
//       } else if (email === "") {
//         displayMessage("error", "Email cannot be blank");
//        } else if (password === "") {
//         displayMessage("error", "Password cannot be blank");
//        } else {
//        displayMessage("success", "Registered successfully");
   
//         //Redirect the user to another page
//        window.location.href = "http://127.0.0.1:5500/profilePage.html";
   
//        //TODO:Save username, email, and password in local storage
//         localStorage.setItem("username", username);
//         localStorage.setItem("email", email);
//        localStorage.setItem("password", password);
//       }
// });


//submitBtn.addEventListener("click", function(event) {
//  event.preventDefault();

 //var username = document.querySelector("#username").value;
// var email = document.querySelector("#emai").value;
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
