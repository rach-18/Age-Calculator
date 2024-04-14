const date = document.querySelector(".dob")
const calculateBtn = document.querySelector(".calculate");
const currAge = document.querySelector(".age");

calculateBtn.addEventListener("click", function(event) {
    event.preventDefault();
    
    

    if(date.value === "") {
        alert("Please enter your birthday.");
    }
    else {
        const dob = new Date(date.value);
        const today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        const monthDiff = today.getMonth() - dob.getMonth();

        if(monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
            age--;
        }

        currAge.innerHTML = age;
    }
});