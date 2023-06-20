
var searchButton = document.getElementById("search-button");

var clientId = "lBdeX59qHTdt7CSdvQeIZy8H1nJlbpAbEntp2QGc";
var clientSecret = "kQWwD5wx2QVmc6WaGfma0T2tan3FISTSi3xu0F2N7vGPiZBjImTdx1u43UIHdch914k884aa7ZJfN0MZw9cdfFmXM5xa3aTBh0D40Lgnl8yIXAVrW5GGRKLCKz30oeTg"; 

// Authenticate and get the bearer token
var token = btoa(clientId + ":" + clientSecret);

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

//"Search courses" event listeners for "Search" button and "Enter" keyboard key. 
var searchInput = document.getElementById("search-input");

  // Add an event listener for "keydown" event on the search input
  searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      var searchTerm = searchInput.value.toLowerCase();
      makeApiCall(searchTerm);
      searchInput.value = "";
    }
  });

  searchButton.addEventListener("click", function() {
    var searchInputValue = searchInput.value.toLowerCase();
    makeApiCall(searchInputValue);
    searchInput.value = "";
  });


//Makes the API request and updates the course info
// Helper function to make authenticated API calls

function makeApiCall(searchInput) {
  var apiUrl = `https://www.udemy.com/api-2.0/courses/?search=${searchInput}`;
    fetch(apiUrl, {
        headers: {
            "Authorization": "Basic " + token
        }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      var courseInfoContainer = document.getElementById("course-info");

      // Clear the placeholder content
      courseInfoContainer.innerHTML = "";

      // Process the API response data and update the HTML
      data.results.forEach(course => {
        var courseItem = document.createElement("div");
        courseItem.classList.add('course-item');
        // Insert carousel or cards between these tick marks
        courseItem.innerHTML = `
          <h3><a href="https://www.udemy.com${course.url}" target="_blank">${course.title}</a></h3>
          <p>${course.headline}</p>
          <img src="${course.image_240x135}" alt="Course Thumbnail">
        `;
        courseInfoContainer.appendChild(courseItem);
      });
    })
    .catch(error => console.error(error));
};
// Carousel
var slidePosition = 1; // Variable to keep track of the current slide
SlideShow(slidePosition); // Call the function to display the current slide at the beginning

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n); // Increase or decrease the current slide number and display the new slide
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n); // Set the current slide number and display the new slide
}

function SlideShow(n) {
  var i;
  var slides = document.querySelectorAll(".course-item");
  // var slides = document.getElementsByClassName("Containers"); // Get all slides
  var circles = document.getElementsByClassName("dots"); // Get all dots
  if (n > slides.length) {slidePosition = 1} // If the current slide number is greater than the total number of slides, reset it to 1
  if (n < 1) {slidePosition = slides.length} // If the current slide number is less than 1, set it to the total number of slides
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; // Hide all slides
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", ""); // Remove the "enable" class from all dots
  }
  slides[slidePosition-1].style.display = "block"; // Show the current slide
  // circles[slidePosition-1].className += " enable"; // Add the "enable" class to the current dot
}

// Function to display courses
function displayCourses(courses) {
  var carouselContainer = document.querySelector('.carousel-container'); // Get the course list element
  carouselContainer.innerHTML = '';

  courses.forEach(course => {
      var courseItem = document.createElement('div'); // Create a new div for each course
      courseItem.classList.add('course-item'); // Add the "course-item" class to the div
      courseItem.innerHTML = `
          <h3>${course.title}</h3>
          <p><strong>Platform:</strong> ${course.platform}</p>
          <p><strong>Description:</strong> ${course.description}</p>
      `; // Add the course information to the div
      carouselContainer.appendChild(courseItem); // Add the div to the course list
  });
  currentSlide(1);
}

// Initial display of courses
displayCourses(courses);

// Function to search courses
function searchCourses() {
  var searchInput = document.getElementById('searchInput').value.toLowerCase(); // Get the search input and convert it to lower case
  var filteredCourses = courses.filter(course => course.title.toLowerCase().includes(searchInput)); // Filter the courses based on the search input
  displayCourses(filteredCourses); // Display the filtered courses
}






//This is commented out from line 30, 31. Keep for now

/* <p>${course.location}</p>
   <a href= "${course.applyLink}">Apply Now</a>  */