
//"Search courses" event listeners for "Search" button and "Enter" keyboard key. 
var searchInput = document.getElementById("search-input");

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

document.addEventListener("DOMContentLoaded", function(){
  const loginLink = document.getElementById("login");
  const signupLink = document.getElementById("signup");
  const loginForm = document.querySelector(".form-box.login");
  const signupForm =  document.querySelector(".form-box.signup");

 loginForm.style.display = "none";
  signupForm.style.display = "none"; 
});

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
//   });}
