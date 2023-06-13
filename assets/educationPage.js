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

// Mock course data
var courses = [
  { title: 'Web Development for Beginners', platform: 'Coursera', description: 'An introductory course on web development.' },
  { title: 'Data Science: Foundations', platform: 'Udemy', description: 'A comprehensive introduction to data science.' },
  // Add more courses as needed...
];

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
