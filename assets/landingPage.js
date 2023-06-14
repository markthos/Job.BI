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

    loginForm.addEventListener("click", function(event) {
        event.preventDefault();
        loginLink.style.display = "block";
        signupForm.style.display = "block"
        loginForm.style.display = "none"
        signupLink.style.display = "block";
        signupForm.style.display = "block";
      });

});
  
  
 