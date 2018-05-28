"use strict";

var form = document.querySelector("form");
var catName = form.querySelector("[name=cat-name-field]");
var catWeight = form.querySelector("[name=cat-weight-field]");
var email = form.querySelector("[name=email-field]");
var phone = form.querySelector("[name=phone-field]");

var validateForm = function(evt) {
  var hasError = false;

  if (catName.value === "") {
    hasError = true;
    catName.classList.add("error");
  } else {
    catName.classList.remove("error");
  }

  if (catWeight.value  === "") {
    hasError = true;
    catWeight.classList.add("error");
  } else {
    catWeight.classList.remove("error");
  }

  if (email.value  === "") {
    hasError = true;
    email.classList.add("error");
  } else {
    email.classList.remove("error");
  }

  if (phone.value  === "") {
    hasError = true;
    phone.classList.add("error");
  } else {
    phone.classList.remove("error");
  }

  return hasError;
}

form.addEventListener("submit", function(evt) {
  var isFormNotValid = validateForm();

  if(isFormNotValid) {
    evt.preventDefault();
    console.log("Введите, пожалуйста, имя кота, его вес, ваш e-mail и номер телефона для связи.");
  }
});

catName.addEventListener('change', function() {
  validateForm();
});

catWeight.addEventListener('change', function() {
  validateForm();
});

email.addEventListener('change', function() {
  validateForm();
});

phone.addEventListener('change', function() {
  validateForm();
});
