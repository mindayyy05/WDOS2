document.addEventListener("DOMContentLoaded", function() {
    // Retrieve user details from local storage
    const fullName = localStorage.getItem("fullName");
    const phoneNumber = localStorage.getItem("phoneNumber");
    const email = localStorage.getItem("email");
    const gender=localStorage.getItem("gender");
    const summaryTableHTML = localStorage.getItem("summaryTableHTML");
    // Insert the summary table HTML into the <div class="table"></div> in confirm.html
    const tableDiv = document.querySelector(".table");
    if (summaryTableHTML) {
        tableDiv.innerHTML = summaryTableHTML;
    }

   
   
    // Display user details in the confirm.html page
    document.getElementById("personName").textContent = fullName;
    document.getElementById("personPhone").textContent = phoneNumber;
    document.getElementById("personEmail").textContent = email;
    document.getElementById("personGender").textContent=gender;
    
});




  function displaySelectedDate() {
    const selectedDate = localStorage.getItem('selectedDate');
    if (selectedDate) {
      document.getElementById('personDate').textContent = selectedDate;
    }
  }

  displaySelectedDate();


  document.addEventListener("DOMContentLoaded", function() {
   
  
    // Retrieve the summary table HTML from local storage
    const summaryTableHTML = localStorage.getItem("summaryTableHTML");
  
    // Insert the summary table HTML into the <div class="table"></div> in confirm.html
    const tableDiv = document.querySelector(".table");
    if (summaryTableHTML) {
      tableDiv.innerHTML = summaryTableHTML;
    }
   // Retrieve user details from local storage
   const fullName = localStorage.getItem("fullName");
   const phoneNumber = localStorage.getItem("phoneNumber");
   const email = localStorage.getItem("email");
   const gender = localStorage.getItem("gender");
  
   // Display user details in the confirm.html page
   document.getElementById("personName").textContent = fullName;
   document.getElementById("personPhone").textContent = phoneNumber;
   document.getElementById("personEmail").textContent = email;
   document.getElementById("personGender").textContent = gender;
});


