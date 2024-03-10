const nameInput = document.getElementById("nameInput");
const emailInput = document.querySelector("#emailInput");
const telInput = document.querySelector("#telInput");
const nextBtn = document.querySelector("#nextBtn");
const nextBtn2 = document.querySelector("#nextBtn2");
const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const telError = document.querySelector("#telError");

console.log(nameInput.value);
console.log(emailInput);
console.log(telInput);


// nameInput, nameError
nameInput.addEventListener("focus", function(){
    nameInput.style.border = "1px solid red";
})

nameInput.addEventListener("input", function(){
    const inputValue = nameInput.value.trim();

    if(inputValue.length >= 3){
        nameInput.style.border = "1px solid blue";
        nameError.innerHTML = ""
    }else if(inputValue.length === 0) {
        nameInput.style.border = "1px solid red";
        nameError.innerHTML = "This field is required"
    }else{
        nameInput.style.border = "1px solid red";
    }
});

nameInput.addEventListener("blur", function(){
    nameInput.style.border = "";
    nameError.innerHTML = "";
})

// emailInput, emailError
emailInput.addEventListener("focus", function(){
    emailInput.style.border = "1px solid red";
})

emailInput.addEventListener("blur", function() {
    emailInput.style.border = ""; 
    emailError.innerHTML = "";

  });

emailInput.addEventListener("input", function(){
    const emailValue = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailValue.length >= 5 && emailRegex.test(emailValue)) {
        emailInput.style.border = "1px solid blue";
        emailError.textContent = "";
      }else if(emailValue.length <= 3){
        emailInput.style.border = "1px solid bred";
        emailError.textContent = "must be 6 characters long or more";
      }else {
        emailInput.style.border = "1px solid red";
        emailError.innerHTML = "Invalid email format";
      }
});

// phoneInput phoneError

telInput.addEventListener("focus", function () {
    if (telInput.value.trim().length !== 11 || isNaN(telInput.value.trim())) {
      telInput.style.border = "1px solid red";
    }
  });

  telInput.addEventListener("blur", function () {
    telInput.style.border = "";
    telError.textContent = "";

  });

  telInput.addEventListener("input", function () {
    const telValue = telInput.value.trim();

    if (telValue.length === 11 && !isNaN(telValue)) {
      telInput.style.border = "1px solid blue";
      telError.innerHTML = "";
    } else if (!isNaN(telValue) && telValue.length < 11 || telValue.length > 11) {
      telInput.style.border = "1px solid red";
      telError.innerHTML = "Enter a valid phone number";
    } else {
        telInput.style.border = "1px solid red";
      telError.textContent = "Invalid input";
    }
  });

//  next button
// creat a general function to check the overall form validation
function isFormValid() {
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const telValue = telInput.value.trim();

    // check for each input validation rule
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isNameValid = nameValue.length >= 3
const isEmailValid = emailValue.length >= 5 && emailRegex.test(emailValue)
const istelValid = telValue.length === 11 && !isNaN(telValue)

return isNameValid && isEmailValid && istelValid
}

// add click event
// nextBtn.addEventListener('click', function(event) {
//     if(!isFormValid ()) {
//         event.preventDefault()
//     }
//    nameInput.style.border = "1px solid red"
//    nameError.innerHTML = "This field is required"
//    emailInput.style.border = "1px solid red"
//    emailError.innerHTML = "This field is required"
//    telInput.style.border = "1px solid red"
//    telError.innerHTML = "This field is required"

// } )

nextBtn.addEventListener('click', function(event) {
if(!isFormValid()) {
   event.preventDefault()
   nameInput.style.border = "1px solid red"
   nameError.innerHTML = "This field is required"
   emailInput.style.border = "1px solid red"
   emailError.innerHTML = "This field is required"
   telInput.style.border = "1px solid red"
   telError.innerHTML = "This field is required"
   return  //this stops the code from running
  }
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const telValue = telInput.value.trim();

const formData = {
  name: nameValue,
  email: emailValue,
  tel: telValue
}
localStorage.setItem("formData", JSON.stringify(formData));
} )

nextBtn2.addEventListener('click', function(event) {
    if(!isFormValid()) {
        event.preventDefault();
   nameInput.style.border = "1px solid red"
   nameError.innerHTML = "This field is required"
   emailInput.style.border = "1px solid red"
   emailError.innerHTML = "This field is required"
   telInput.style.border = "1px solid red"
   telError.innerHTML = "This field is required"
    }
const nameValue = nameInput.value.trim();
const emailValue = emailInput.value.trim();
const telValue = telInput.value.trim();

const formData = {
  name: nameValue,
  email: emailValue,
  tel: telValue
}
localStorage.setItem("formData", JSON.stringify(formData));  //saving items in localStorage

} )


//local storage; 
// saving items to your local storage you can use setItem (here you set the "key", "value)


// Retreiving items from local storage you can use getItem
// clearing or deleting items from local storage, you can use RemoveItem
const data = localStorage.getItem("formData")  //retrieving data from local storage
console.log(data);
const parsedData = JSON.parse(data)
console.log(parsedData);


if(parsedData){
  nameInput.value = parsedData.name || ""
  emailInput.value = parsedData.email || ""
  telInput.value = parsedData.tel || ""
}

// destructuring the data
// const { name, email, tel } = parsedData
//   nameInput.value = name || ""  (it either takes the value or remains empty )
//   emailInput.value = email || ""
//   telInput.value = tel || ""


// removing items from local storage
setTimeout(() => {
  localStorage.removeItem("formData")
}, 30000)