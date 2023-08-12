document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registrationForm");
    const fullNameInput = document.getElementById("fullName");
    const phoneNumberInput = document.getElementById("phoneNumber");
    const emailInput = document.getElementById("email");
    const confirmEmailInput = document.getElementById("confirmEmail");
    const genderInput=document.getElementById("gender");

    const storedSummaryTableHTML = localStorage.getItem('summaryTableHTML');
    const tableElement = document.querySelector('.table');
  tableElement.innerHTML = storedSummaryTableHTML;

    


    form.addEventListener("submit", function(event) {
        event.preventDefault();
        resetErrors();

        if (!isValidFullName(fullNameInput.value)) {
            showError(fullNameInput, "Enter full name");
        }

        if (!isValidPhoneNumber(phoneNumberInput.value)) {
            showError(phoneNumberInput, "Please fill in the phone number");
        }

        if (!isValidEmail(emailInput.value)) {
            showError(emailInput, "Please input a valid email");
        }

        if (emailInput.value !== confirmEmailInput.value) {
            showError(confirmEmailInput, "Emails don't match");
        } else {
            // Store the user details in local storage
            localStorage.setItem("fullName", fullNameInput.value);
            localStorage.setItem("phoneNumber", phoneNumberInput.value);
            localStorage.setItem("email", emailInput.value);
            localStorage.setItem("gender",genderInput.value);

            
    
             // Retrieve the stored summary table HTML
            const storedSummaryTableHTML = localStorage.getItem('summaryTableHTML');

            // Display the stored summary table HTML
            const tableElement = document.querySelector('.table');
            tableElement.innerHTML = storedSummaryTableHTML;

            
            // Redirect to confirm.html
            window.location.href = "ticketsPay.html";
        }
    });

});

function isValidFullName(name) {
    return name.trim().split(" ").length >= 2;
}

function isValidPhoneNumber(phoneNumber) {
    return phoneNumber.trim().length === 12;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showError(inputElement, message) {
    inputElement.style.borderColor = "red";
    const errorElement = inputElement.parentElement.querySelector(".error-message");
    errorElement.innerText = message;
}

function resetErrors() {
    const errorMessages = document.querySelectorAll(".error-message");
    const inputs = document.querySelectorAll("input");
    
    errorMessages.forEach(function(errorMessage) {
        errorMessage.innerText = "";
    });

    inputs.forEach(function(input) {
        input.style.borderColor = "#ccc";
    });
}

