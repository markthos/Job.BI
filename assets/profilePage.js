// Mock user data
var user = {
    name: 'Mama Mo',
    email: 'monique.merzoug@icloud.com',
    interests: ['Web Development', 'Visual Merchandising'],
    myCourses: ['1: Course 1', '2: Course 2'],
};

// Save user data to local storage
localStorage.setItem('user', JSON.stringify(user));

// Retrieve user data from local storage
var retrievedUser = JSON.parse(localStorage.getItem('user'));

// Function to update HTML with user data
function displayUser(user) {
    document.querySelector('.profile').innerHTML = `
        <h3>User Profile</h3>
        <p>Name: ${user.name}</p>
        <p>Email: ${user.email}</p>
        <p>Interests: ${user.interests.join(', ')}</p>
        
    `;

    document.querySelector('#messages').innerHTML = `
        <h3>My Courses</h3>
        ${user.myCourses.map(notification => `<p>${notification}</p>`).join('')}
    `;
}

// Call the function to update the HTML
displayUser(retrievedUser);
