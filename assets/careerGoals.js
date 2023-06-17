// Function to load goals from local storage
function loadGoals() {
    let goals = JSON.parse(localStorage.getItem('goals'));
    if (!goals) {
        goals = [];
    }
    return goals;
}


  var video = document.querySelector('video');
  var progressBar = document.querySelector('.progress-bar');
  var progressText = document.querySelector('.progress-text');
  video.addEventListener('timeupdate', function() {
    var progress = video.currentTime / video.duration;
    progressBar.style.width = progress * 100 + '%';
    progressText.innerHTML = Math.round(progress * 100) + '% Complete';
  });




// Function to save goals to local storage
function saveGoals(goals) {
    localStorage.setItem('goals', JSON.stringify(goals));
}

// Function to display goals
function displayGoals() {
    var goals = loadGoals();
    var goalList = document.getElementById('goalList');
    goalList.innerHTML = '';

    goals.forEach((goal, index) => {
        var goalItem = document.createElement('div');
        goalItem.classList.add('goal-item');
        goalItem.innerHTML = `
            <h3>${goal.text}</h3>
            <p><strong>Progress:</strong> ${goal.progress}%</p>
            <button onclick="deleteGoal(${index})">Delete</button>
        `;
        goalList.appendChild(goalItem);
    });
}

// Function to add a goal
function addGoal() {
    var newGoalInput = document.getElementById('newGoalInput');
    var newGoalProgressInput = document.getElementById('newGoalProgressInput');
    var goals = loadGoals();
    goals.push({
        text: newGoalInput.value,
        progress: newGoalProgressInput.value
    });
    saveGoals(goals);
    displayGoals();
    newGoalInput.value = '';
    newGoalProgressInput.value = '';
}

// Function to delete a goal
function deleteGoal(index) {
    var goals = loadGoals();
    goals.splice(index, 1);
    saveGoals(goals);
    displayGoals();
}

// Display goals on page load
displayGoals();

// Function to handle the signout button click
function handleSignout() {
    // Clear the stored credentials from localStorage
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    
    // Redirect to the landing page
    window.location.href = "http://127.0.0.1:5500/landingPage.html";
  }
  
  // Event listener for the signout button
  document.getElementById("signout").addEventListener("click", handleSignout);