//"Search courses" event listeners for "Search" button and "Enter" keyboard key. 
var searchInput = document.getElementById("search-input");
var searchButton = document.getElementById("search-button");

  // Add an event listener for "keydown" event on the search input
  searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      var searchTerm = searchInput.value.toLowerCase();
      fetchJobs(searchInput);
      displayCareers(response);
      searchInput.value = "";
    }
  });

  searchButton.addEventListener("click", function() {
    var searchInputValue = searchInput.value.toLowerCase();
    fetchJobs(searchInput);
    displayCareers(response);
    searchInput.value = "";
  });

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

  alert("Signup successful. You can now login with your credentials.");
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


 // Function to handle the sign-out functionality
 function handleSignOut() {
  // Perform any necessary sign-out logic, such as clearing session data or cookies

  // Redirect to the landing page
  window.location.href = "http://127.0.0.1:5500/landingPage.html";
}

// Event listener for the sign-out button
document.getElementById("signOutButton").addEventListener("click", handleSignOut);

 


// Carousel
var slidePosition = 1; // Variable to keep track of the current slide
SlideShow(slidePosition); // Call the function to display the current slide at the beginning

// forward/Back controls
function plusSlides(n) {
  console.log(n);
  SlideShow(slidePosition += n); // Increase or decrease the current slide number and display the new slide
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n); // Set the current slide number and display the new slide
}

function SlideShow(n) {
  var i;
  var slides = response;
  var circles = document.querySelector(".dots"); // Get all dots
  if (n > slides.length) { slidePosition = 1 } // If the current slide number is greater than the total number of slides, reset it to 1
  if (n < 1) { slidePosition = slides.length } // If the current slide number is less than 1, set it to the total number of slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Hide all slides
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" enable", ""); // Remove the "enable" class from all dots
  }
  slides[slidePosition - 1].style.display = "block"; // Show the current slide
  circles[slidePosition - 1].className += " enable"; // Add the "enable" class to the current dot
}

//function to display careers from the careerPageResources file
function displayCareers(response) {
  var careerList = document.getElementById("job-info"); // Get the career list element
  careerList.innerHTML = ''; // Clear the existing content

  // for (var key in response) {
  //   if (response.hasOwnProperty(key)) {
  //     var job = response[key];
  //     var jobItem = document.createElement("div");
  //     jobItem.classList.add('job-item');
  //     jobItem.innerHTML = `
  //       <h3>${job.job_url}</h3>
  //       <p>${job.linkedin_job_url_cleaned}</p>
  //       <p>${job.company_name}</p>
  //       <a href="${job.company_url}">Company Link</a>
  //     `;
  //     careerList.appendChild(jobItem);
  //     console.log (jobItem);
  //   }
  // }
  for (let i = 0; i < response.length; i++) {
    var jobItem = document.createElement("div");
    jobItem.classList.add('job-item');
    jobItem.innerHTML= `
        <h3>${response[i].job_url}</h3>
        <p>${response[i].linkedin_job_url_cleaned}</p>
        <p>${response[i].company_name}</p>
        <a href="${response[i].company_url}">Company Link</a>
      `;
      careerList.appendChild(jobItem);
  }
  var j;
  var circles = document.querySelector(".dots"); // Get all dots

}

// Initial display of careers
displayCareers(response);

// Function to search jobs
function searchCareers() {
  var searchInput = document.getElementById('searchInput').value.toLowerCase(); // Get the search input and convert it to lower case
  // var filteredCareers = careers.filter(career => career.title.toLowerCase().includes(searchInput)); // Filter the careers based on the search input
  // displayCareers(filteredCareers); // Display the filtered careers
  fetchJobs(searchInput);

}

//fetch jobs from LinkedIn API through RapidAPI
function fetchJobs() {
  // var url = 'https://linkedin-jobs-search.p.rapidapi.com/';
  // var options = {
  //     method: 'POST',
  //     headers: {
  //         'content-type': 'application/json',
  //         'X-RapidAPI-Key': '031a423e1fmshdd10a01c4041f67p12aa2fjsn9ca9aaab01a2',
  //         'X-RapidAPI-Host': 'linkedin-jobs-search.p.rapidapi.com'
  //     },
  //     body: JSON.stringify({
  //         search_terms: 'python programmer',
  //         location: 'Chicago, IL',
  //         page: '1'
  //     })
  // };

  // fetch(url, options)
  //     .then(response => {
  //         if (!response.ok) {
  //             throw new Error('Network response was not ok');
  //         }
  //         return response.json();
  //     })
  //     .then(result => {
  //         console.log(result);
  //         // Call displayCareers function with received data
  //         displayCareers(result); // Assuming that result is an array of job objects
  //     })
  //     .catch(error => {
  //         console.error('There has been a problem with your fetch operation:', error);
  //     });
  displayCareers(response);
}

// Call fetchJobs function when page loads
window.onload = fetchJobs;

//// https://linkedin-jobs-search.p.rapidapi.com/?rapidapi-key=031a423e1fmshdd10a01c4041f67p12aa2fjsn9ca9aaab01a2'

var searchButton = document.getElementById("search-button");

var clientId = "lBdeX59qHTdt7CSdvQeIZy8H1nJlbpAbEntp2QGc";
var clientSecret = "kQWwD5wx2QVmc6WaGfma0T2tan3FISTSi3xu0F2N7vGPiZBjImTdx1u43UIHdch914k884aa7ZJfN0MZw9cdfFmXM5xa3aTBh0D40Lgnl8yIXAVrW5GGRKLCKz30oeTg"; 

// Authenticate and get the bearer token
var token = btoa(clientId + ":" + clientSecret);


//  loginForm.addEventListener("click", function(event) {
//       event.preventDefault();
//       loginForm.style.display = "none";
//       signupForm.style.display = "block";

//     });

//   signupForm.addEventListener("click", function(event) {
//       event.preventDefault();
//       loginForm.style.display = "block";
//       signupForm.style.display = "none";
//   });}
