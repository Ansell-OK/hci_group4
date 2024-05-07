var navLinks = document.getElementById('navLinks');
var login_us = document.getElementById('login');
var loginButton = document.getElementById('signup');
var logout = document.getElementById('Logout');

function loginPopup(){
    login_us.classList.add('open-popup');
    loginButton.style.display = 'none'; 
    logout.style.display = 'block'

}
function login(){
    logout.style.display = 'none';
    loginButton.style.display = 'none'; 
}

function closeLogin(){
    login_us.classList.remove('open-popup');
}


function showMenu(){
    navLinks.style.right = '0';
    navLinks.style.display ='inline-block';
}
function hideMenu(){
    
    navLinks.style.display ='none';
}


function closePopup(){
    popup.classList.remove('open-popup');
}

// Selecting form and input elements
const form = document.querySelector("form");


// Function to display error messages
const showError = (field, errorText) => {
    field.classList.add("error");
    const errorElement = document.createElement("small");
    errorElement.classList.add("error-text");
    errorElement.innerText = errorText;
    field.closest(".form-group").appendChild(errorElement);
}

function openPopup(){
    popup.classList.add('open-popup');
}



// Function to handle form submission
const handleFormData = (e) => {
    e.preventDefault();

    // Retrieving input elements
    
    const emailInput = document.getElementById("email");
    let popup = document.getElementById('popup');

    // Getting trimmed values from input fields
    
    const email = emailInput.value.trim();


    // Regular expression pattern for email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Clearing previous error messages
    document.querySelectorAll(".form-group .error").forEach(field => field.classList.remove("error"));
    document.querySelectorAll(".error-text").forEach(errorText => errorText.remove());

    
    

    // Performing validation checks
    
    if (!emailPattern.test(email)) {
        showError(emailInput, "Enter a valid email address e.g yourexample@gmail.com");
    }

    // Checking for any remaining errors before form submission
    const errorInputs = document.querySelectorAll(".form-group .error");
    if (errorInputs.length > 0) return;

    // Submitting the form
    form.submit();
    openPopup();
}



// Handling form submission event
form.addEventListener("submit", handleFormData);