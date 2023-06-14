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
  var slides = document.getElementsByClassName("containers"); // Get all slides
  var circles = document.getElementsByClassName("dots"); // Get all dots
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

// // Mock career data
// var careers = [
//   { title: 'Web Developer', platform: 'LinkedIn', description: 'Apprenticeship Job Opportunity.' },
//   { title: 'Data Scientist', platform: 'Glassdoor', description: 'Data Scientist.' },
//   // Add more careers as needed...
// ];

//function to display careers from the careerPageResources file
function displayCareers(response) {
  var careerList = document.getElementById("job-info"); // Get the career list element
  careerList.innerHTML = ''; // Clear the existing content

  for (var key in response) {
    if (response.hasOwnProperty(key)) {
      var job = response[key];
      var jobItem = document.createElement("div");
      jobItem.classList.add('job-item');
      jobItem.innerHTML = `
        <h3>${job.job_url}</h3>
        <p>${job.linkedin_job_url_cleaned}</p>
        <p>${job.company_name}</p>
        <a href="${job.company_url}">Company Link</a>
      `;
      careerList.appendChild(jobItem);
    }
  }
}



// }(career => {
//     var careerInfo = document.createElement('div'); // Create a new div for each job
//     careerInfo.classList.add("job-info"); // Add the "job-info" class to the div
//     careerInfo.innerHTML = `
//         <h3>${career.job_name}</h3>
//         <p><strong>Company:</strong> ${career.company_name}</p>
//         <p><strong>Job Link:</strong> ${career.job_url}</p>
//     `; // Add the job information to the div
//     careerList.appendChild(careerInfo); // Add the div to the career list
// });


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

console.log (response);

// Call fetchJobs function when page loads
window.onload = fetchJobs;

//// https://linkedin-jobs-search.p.rapidapi.com/?rapidapi-key=031a423e1fmshdd10a01c4041f67p12aa2fjsn9ca9aaab01a2'