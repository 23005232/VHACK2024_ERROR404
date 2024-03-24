const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const sign_in_btn2 = document.querySelector("#sign-in-btn2");
const sign_up_btn2 = document.querySelector("#sign-up-btn2");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

sign_up_btn2.addEventListener("click", () => {
    container.classList.add("sign-up-mode2");
});
sign_in_btn2.addEventListener("click", () => {
    container.classList.remove("sign-up-mode2");
});

document.addEventListener("DOMContentLoaded", function () {
    const signUpForm = document.querySelector(".sign-up-form");
    const signUpSuccessModal = document.getElementById("signupSuccessModal");
    const okButton = document.getElementById("okButton");

    signUpForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission for demonstration

        // Assuming sign-up validation is successful
        // Show the sign-up success modal
        signUpSuccessModal.style.display = "block";
    });

    okButton.addEventListener("click", function () {
        // Redirect to the login page after sign-up success
        window.location.href = "login.html"; 
    });

    // Close the modal if the user clicks on the close button or outside the modal
    window.onclick = function (event) {
        if (event.target == signUpSuccessModal) {
            signUpSuccessModal.style.display = "none";
        }
    };
});

document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("loginButton");

    loginButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission for demonstration

        // Redirect to the desired webpage
        window.location.href = "homepagenormal.html";
    });
});

