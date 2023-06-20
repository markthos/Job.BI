// Wrap the code in the DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the user object from the query parameters
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var userParam = urlParams.get('user');

    if (userParam) {
      var user = JSON.parse(decodeURIComponent(userParam));

      // Store the user object in local storage
      localStorage.setItem('user', JSON.stringify(user));

      //Now you can access the user object and its properties
      console.log(user.name);
      console.log(user.email);
      console.log(user.password);
      console.log(user.username);
    }
    else {
      console.log('Userobject not found in query parameters');
    }
  
    // Retrieve user data from local storage
    var retrievedUser = JSON.parse(localStorage.getItem('user'));
  
    // Function to update HTML with user data 2.0
    function displayUser(user) {
      var nameElement = document.getElementById('name');
      var emailElement = document.getElementById('email');
      var interestsElement = document.getElementById('interests');
      var educationElement = document.getElementById('education');
      var careerGoalsElement = document.getElementById('careerGoals');
      var profilePicElement = document.getElementById('profilePic');
  
      nameElement.textContent = 'Name: ' + user.name;
      emailElement.textContent = 'Email: ' + user.email;
      interestsElement.textContent = 'Interests: ' + user.interests;
      educationElement.textContent = 'Education: ' + user.education;
      careerGoalsElement.textContent = 'Career Goals: ' + user.careerGoals;
      profilePicElement.src = localStorage.getItem('profilePic') || '/assets/images/';
    }
  
    // Call the function to update the HTML
    displayUser(retrievedUser);
  
    var profilePicElement = document.getElementById('profilePic');

    
    // Update Profile button click event
    updateProfileBtn.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default behavior of the button
  
      updateFormContainer.style.display = 'block';
  
      // Allow User to move through form with enter key
      var formInputs = document.querySelectorAll('#updateForm input');

      formInputs.forEach(function(input, index) {
        input.addEventListener('keydown', function(event) {
          if (event.key === 'Enter') {
            event.preventDefault();
            var nextIndex = index + 1;
            if (nextIndex < formInputs.length) {
                formInputs[nextIndex].focus();
            } else {
                 // If the current input is the last one, you can trigger the form submission
                updateForm.submit();
            }
         }
        });
      });
    });
  
// Update Profile form submit event
var updateForm = document.getElementById('updateForm');
updateForm.addEventListener('submit', function(event) {
  event.preventDefault();

  var retrievedUser = JSON.parse(localStorage.getItem('user'));
  var nameInput = document.getElementById('nameInput');
  var emailInput = document.getElementById('emailInput');
  var interestsInput = document.getElementById('interestsInput');
  var educationInput = document.getElementById('educationInput');
  var careerGoalsInput = document.getElementById('careerGoalsInput');

  // Retrieve existing user data and update with new inputs if they exist
  var updatedUser = {
    name: nameInput.value.trim() !== '' ? nameInput.value : retrievedUser.name,
    email: emailInput.value.trim() !== '' ? emailInput.value : retrievedUser.email,
    interests: interestsInput.value.trim() !== '' ? interestsInput.value.split(',') : retrievedUser.interests,
    education: educationInput.value.trim() !== '' ? educationInput.value.split(',') : retrievedUser.education,
    careerGoals: careerGoalsInput.value.trim() !== '' ? careerGoalsInput.value.split(',') : retrievedUser.careerGoals,
    username: retrievedUser.username, // Retain the existing username
    password: retrievedUser.password // Retain the existing password
  };

  var profilePicInput = document.getElementById('profilePicInput');
  var selectedFile = profilePicInput.files[0];

  // Check if a file was selected by the user
  if (selectedFile) {
    var reader = new FileReader();

    reader.onload = function(event) {
      // Convert the file to a data URL
      var dataURL = event.target.result;
      // Save the profile picture in local storage
      localStorage.setItem('profilePic', dataURL);

      // Update the profile picture source in the HTML
      profilePicElement.src = dataURL;
    };

    // Read the selected file as a Data URL
    reader.readAsDataURL(selectedFile);
  }

  // Update the user object in local storage
  localStorage.setItem('user', JSON.stringify(updatedUser));

  // Update the displayed user data
  displayUser(updatedUser);

  var updateFormContainer = document.getElementById('updateFormContainer');
  updateFormContainer.style.display = 'none';
});

});
  
    // Skip button event listener
    skipBtn.addEventListener('click', function() {
      updateFormContainer.style.display = 'none';
    });