// Wrap the code in the DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the user object from the query parameters
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var userParam = urlParams.get('user');

    if (userParam) {
      var user = JSON.parse(decodeURIComponent(userParam));

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
      interestsElement.textContent = 'Interests: ' + user.interests.join(', ');
      educationElement.textContent = 'Education: ' + user.education.join(', ');
      careerGoalsElement.textContent = 'Career Goals: ' + user.careerGoals.join(', ');
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
    updateForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
    retrievedUser.name = nameInput.value;
    retrievedUser.email = emailInput.value;
    retrievedUser.interests = interestsInput.value.split(',');
    retrievedUser.education = educationInput.value.split(',');
    retrievedUser.careerGoals = careerGoalsInput.value.split(',');

    var profilePicInput = document.getElementById('profilePicInput');
    var selectedFile = profilePicInput.files[0];
    // if loop to check if a file was selected by the user
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
  
    localStorage.setItem('user', JSON.stringify(retrievedUser));
    displayUser(retrievedUser);
    updateFormContainer.style.display = 'none';
  
    });
  });
  
    // Skip button event listener
    skipBtn.addEventListener('click', function() {
      updateFormContainer.style.display = 'none';
    });