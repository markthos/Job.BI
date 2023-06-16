
var searchButton = document.getElementById("search-button");

var clientId = "lBdeX59qHTdt7CSdvQeIZy8H1nJlbpAbEntp2QGc";
var clientSecret = "kQWwD5wx2QVmc6WaGfma0T2tan3FISTSi3xu0F2N7vGPiZBjImTdx1u43UIHdch914k884aa7ZJfN0MZw9cdfFmXM5xa3aTBh0D40Lgnl8yIXAVrW5GGRKLCKz30oeTg"; 

// Authenticate and get the bearer token
var token = btoa(clientId + ":" + clientSecret);

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

  document.getElementById("loginBtn").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "./profilePage.html";
  });

  document.getElementById("signupBtn").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "./profilePage.html";
  });
});

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


searchButton.addEventListener("click", function() {
  var searchInput = document.getElementById("search-input").value.toLowerCase();
  console.log(searchInput);
  makeApiCall(searchInput);
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
  var slides = document.getElementsByClassName("Containers"); // Get all slides
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
  circles[slidePosition-1].className += " enable"; // Add the "enable" class to the current dot
}

// Function to display courses
function displayCourses(courses) {
  var courseList = document.getElementById('course-info'); // Get the course list element
  courseList.innerHTML = '';

  courses.forEach(course => {
      var courseItem = document.createElement('div'); // Create a new div for each course
      courseItem.classList.add('course-item'); // Add the "course-item" class to the div
      courseItem.innerHTML = `
          <h3>${course.title}</h3>
          <p><strong>Platform:</strong> ${course.platform}</p>
          <p><strong>Description:</strong> ${course.description}</p>
      `; // Add the course information to the div
      courseList.appendChild(courseItem); // Add the div to the course list
  });
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