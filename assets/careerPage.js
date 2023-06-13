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

// Mock career data
var careers = [
  { title: 'Web Developer', platform: 'LinkedIn', description: 'Apprenticeship Job Opportunity.' },
  { title: 'Data Scientist', platform: 'Glassdoor', description: 'Data Scientist.' },
  // Add more careers as needed...
];

// Function to display careers
function displayCareers(careers) {
  var careerList = document.getElementById("job-info"); // Get the career list element
  careerList.innerHTML = '';

  careers.forEach(career => {
      var careerInfo = document.createElement('div'); // Create a new div for each job
      careerInfo.classList.add("job-info"); // Add the "job-info" class to the div
      careerInfo.innerHTML = `
          <h3>${career.title}</h3>
          <p><strong>Platform:</strong> ${career.platform}</p>
          <p><strong>Description:</strong> ${career.description}</p>
      `; // Add the job information to the div
      careerList.appendChild(careerInfo); // Add the div to the career list
  });
}

console.log(displayCareers);
// Initial display of careers
displayCareers(careers);

// Function to search jobs
function searchCareers() {
    var searchInput = document.getElementById('searchInput').value.toLowerCase(); // Get the search input and convert it to lower case
    var filteredCareers = careers.filter(career => career.title.toLowerCase().includes(searchInput)); // Filter the careers based on the search input
    displayCareers(filteredCareers); // Display the filtered careers
  }
  
