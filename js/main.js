/* Banner slides */

let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("banner-box");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block"
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

/* FAQ Accordion */

const accordion = document.getElementsByClassName("accordion-container");

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}

/* Contact Form */

const formFields = {}

document.addEventListener("DOMContentLoaded", function () {
  formFields.firstName = document.querySelector("#firstName");
  formFields.lastName = document.querySelector("#lastName");
  formFields.email = document.querySelector("#email");
  formFields.telNo = document.querySelector("#telNo");
  formFields.investments = document.querySelector("#investments");
  formFields.retirement = document.querySelector("#retirement");
  formFields.family = document.querySelector("#family");
  formFields.estate = document.querySelector("#estate");
  formFields.advice = document.querySelector("#advice");
  formFields.other = document.querySelector("#other");
  formFields.addInfo = document.querySelector("#addInfo");
});

const isNotEmpty = (value) => {
  if (value !== null || typeof value !== 'undefined') 
  return (value.length > 0);
}

const isEmail = (email) => {
  let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
}

const fieldValidation = (field, validationFunction) => {
  if (field == null) return false;

  let isFieldValid = validationFunction(field.value)
  if (!isFieldValid) {
    field.className = "placeholderRed";
  } else {
    field.className = "";
  }
  return isFieldValid;
}

let isValid = () => {
  let valid = true;

  valid &= fieldValidation(formFields.firstName, isNotEmpty);
  valid &= fieldValidation(formFields.lastName, isNotEmpty);
  valid &= fieldValidation(formFields.email, isNotEmpty);

  return valid;
}

class User {
  constructor(firstName, lastName, email, telNo, investments, retirement, family, estate, advice, other, addInfo) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.telNo = telNo;
    this.investments = investments;
    this.retirement = retirement;
    this.family = family;
    this.estate = estate;
    this.advice = advice;
    this.other = other;
    this.addInfo = addInfo;
  }
}

const sendContact = () => {
  if (isValid()) {
    let user = new User(
      firstName.value, 
      lastName.value, 
      email.value, 
      investments.checked, 
      retirement.checked, 
      family.checked,
      estate.checked,
      advice.checked,
      other.checked,
      addInfo.value 
    );

    alert(`Thank you ${user.firstName}, your form has been received. We will be in touch.`)
    
    } else {
    alert('Apologies, there was an error submitting your form. Please check your inputs and try again.')
  }
}

