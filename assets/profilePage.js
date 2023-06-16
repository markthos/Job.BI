// Mock user data
var user = {
    name: 'Mama Mo',
    email: 'monique.merzoug@icloud.com',
    interests: ['Web Development', 'Visual Merchandising'],
    education: ['1: Course 1', '2: Course 2'],
    careerGoals: ['1: Career Goal 1', '2: Career Goal 2'],
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
    profilePicElement.src = 'https://i.pinimg.com/originals/0f/6e/2e/0f6e2e2b6b0b0b0b0b0b0b0b0b0b0b0b.jpg';
}

// Call the function to update the HTML
displayUser(retrievedUser);

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
});

updateForm.addEventListener('submit', function(event) {
    event.preventDefault();

    retrievedUser.name = nameInput.value;
    retrievedUser.email = emailInput.value;
    retrievedUser.interests = interestsInput.value.split(',');
    retrievedUser.education = educationInput.value.split(',');
    retrievedUser.careerGoals = careerGoalsInput.value.split(',');
    retrievedUser.profilePic = profilePicInput.value;

    localStorage.setItem('user', JSON.stringify(retrievedUser));
    displayUser(retrievedUser);
    updateFormContainer.style.display = 'none';
});

// Skip button event listener
skipBtn.addEventListener('click', function() {
    updateFormContainer.style.display = 'none';
});

var searchitem = document.getElementById ("get-quote")
searchitem.addEventListener ("click",getQuotesList)

window.onload = getQuotesList


function getQuotesList(e){

    fetch("https://type.fit/api/quotes")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) { 
        console.log(data);
        console.log(data.length)
        var ind = Math.floor(Math.random() * data.length)
        document.getElementById("quote").innerText = data[ind].text + " ~~~"+data[ind].author
      });
}
// Function to update HTML with user data
// function displayUser(user) {
//     document.querySelector('.profile').innerHTML = `
//         <h3>User Profile</h3>
//         <p>Name: ${user.name}</p>
//         <p>Email: ${user.email}</p>
//         <p>Interests: ${user.interests.join(', ')}</p>
        
//     `;

//     document.querySelector('#messages').innerHTML = `
//         <h3>My Courses</h3>
//         ${user.myCourses.map(notification => `<p>${notification}</p>`).join('')}
//     `;
// }

// Call the function to update the HTML
// displayUser(retrievedUser);
