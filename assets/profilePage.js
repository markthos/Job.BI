// Mock user data
var user = {
    profilePic: 'assets\images\pexels-cottonbro-studio-6626882.jpg',
    name: '',
    email: '',
    interests: [''],
    education: [''],
    careerGoals: [''],
    username: '',
    password: '',
};

// Save user data to local storage
localStorage.setItem('user', JSON.stringify(user));

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
var updateProfileBtn = document.getElementById('updateProfileBtn');
var updateFormContainer = document.getElementById('updateFormContainer');
var updateForm = document.getElementById('updateForm');
var nameInput = document.getElementById('nameInput');
var emailInput = document.getElementById('emailInput');
var interestsInput = document.getElementById('interestsInput');
var educationInput = document.getElementById('educationInput');
var careerGoalsInput = document.getElementById('careerGoalsInput');
var profilePicInput = document.getElementById('profilePicInput');
var skipBtn = document.getElementById('skipBtn');

updateProfileBtn.addEventListener('click', function() {
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
   

    // Populate the form with the user data from local storage
    nameInput.value = retrievedUser.name;
    emailInput.value = retrievedUser.email;
    interestsInput.value = retrievedUser.interests.join(',');
    educationInput.value = retrievedUser.education.join(', ');
    careerGoalsInput.value = retrievedUser.careerGoals.join(', ');
});
// Update Profile form submit event
updateForm.addEventListener('submit', function(event) {
  event.preventDefault();

  retrievedUser.name = nameInput.value;
  retrievedUser.email = emailInput.value;
  retrievedUser.interests = interestsInput.value.split(',');
  retrievedUser.education = educationInput.value.split(',');
  retrievedUser.careerGoals = careerGoalsInput.value.split(',');

  var passwordInput = document.getElementById('passwordInput');
  var confirmPasswordInput = document.getElementById('confirmPasswordInput');

  var password = passwordInput.value;
  var confirmPassword = confirmPasswordInput.value;

  if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
  }

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


// Skip button event listener
skipBtn.addEventListener('click', function() {
    updateFormContainer.style.display = 'none';
});

// var searchitem = document.getElementById ("get-quote")
// searchitem.addEventListener ("click",getQuotesList)

// window.onload = getQuotesList


// function getQuotesList(e){

//     fetch("https://type.fit/api/quotes")
//       .then(function(response) {
//         return response.json();
//       })
//       .then(function(data) { 
//         console.log(data);
//         console.log(data.length)
//         var ind = Math.floor(Math.random() * data.length)
//         document.getElementById("quote").innerText = data[ind].text + " ~~~"+data[ind].author
//       });
// }
