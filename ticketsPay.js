document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("paymentForm");
    const cardNumberInput = document.getElementById("cardNumber");
    const expiryDateInput = document.getElementById("expiryDate");
    const cvvInput = document.getElementById("cvv");
    const nameOnCardInput = document.getElementById("nameOnCard");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        resetErrors();

        if (!isValidCardNumber(cardNumberInput.value)) {
            showError(cardNumberInput, "Incomplete field");
        }

        if (!isValidExpiryDate(expiryDateInput.value)) {
            showError(expiryDateInput, "Card too old");
        }

        if (!isValidCvv(cvvInput.value)) {
            showError(cvvInput, "Incomplete number");
        }

        if (!isValidNameOnCard(nameOnCardInput.value)) {
            showError(nameOnCardInput, "Name contains invalid characters");
        } else {
            // If all validations pass, you can proceed with the payment process or further actions.
            // For this example, I'm just showing an alert.
            window.location.href = "confirm.html";
        }

        
    });

    function isValidCardNumber(cardNumber) {
        return cardNumber.trim().length === 16;
    }

    function isValidExpiryDate(expiryDate) {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth() + 1; // Add 1 because getMonth() returns 0-11

        const [expiryMonth, expiryYear] = expiryDate.split("/").map(str => parseInt(str));

        return (expiryYear > currentYear || (expiryYear === currentYear && expiryMonth >= currentMonth));
    }

    function isValidCvv(cvv) {
        return cvv.trim().length >= 3;
    }

    function isValidNameOnCard(name) {
        const nameRegex = /^[a-zA-Z ]+$/;
        return nameRegex.test(name);
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
});


const form = document.getElementById("paymentForm");
const submitButton = document.getElementById("submitButton");

form.addEventListener("input", function() {
    // Check if all the required fields are filled
    const cardNumber = document.getElementById("cardNumber").value;
    const expiryDate = document.getElementById("expiryDate").value;
    const cvv = document.getElementById("cvv").value;
    const nameOnCard = document.getElementById("nameOnCard").value;

    const isFormValid = cardNumber && expiryDate && cvv && nameOnCard;

    // Enable or disable the submit button based on form validity
    if (isFormValid) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
});





  function displaySummaryTableHTML() {
    const summaryTableElement = document.querySelector(".table");
    const summaryTableHTML = localStorage.getItem("summaryTableHTML");
    
    if (summaryTableHTML) {
        summaryTableElement.innerHTML = summaryTableHTML;
    }
}

// Call the function to display the table when the page loads
displaySummaryTableHTML();



// Retrieve the total payable amount from localStorage
const totalCharge = localStorage.getItem("chargeSummary");

// Update the button text
const payButton = document.getElementById("submitButton");
payButton.innerText = `Pay ${totalCharge}`;

displaySummaryTableHTML();