"use strict";

var form = document.querySelector("form");
var catName = form.querySelector("[name=cat-name-field]");
var catWeight = form.querySelector("[name=cat-weight-field]");
var email = form.querySelector("[name=email-field]");
var phone = form.querySelector("[name=phone-field]");

form.addEventListener("submit", function (evt) {
  if (!catName.value || !catWeight.value || !email.value || !phone.value) {
  evt.preventDefault();
  form.classList.add("error");
  email.classList.add("error");
  phone.classList.add("error");
  console.log("Введите, пожалуйста, имя кота, его вес, ваш e-mail и номер телефона для связи.");
  } else {
  form.classList.remove("input-error");
  email.classList.remove("error");
  phone.classList.remove("error");
  }
});
