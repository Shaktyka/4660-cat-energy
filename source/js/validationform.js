//Валидация формы на странице подбора программы

var form = document.querySelector("form");
var catName = form.querySelector("[name=cat-name-field]");
var catWeight = form.querySelector("[name=cat-weight-field]");
var email = form.querySelector("[name=email-field]");
var phone = form.querySelector("[name=phone-field]");

var isStorageSupport = true;
var storage = "";
  
try {
  storage = localStorage.getItem("email");
  } catch (err) {
    isStorageSupport = false;
  }

form.addEventListener("submit", function (evt) {
  if (!catName.value || !catWeight.value || !email.value || !phone.value) {
	form.classList.add("input-error");
    evt.preventDefault();
    console.log("Введите, пожалуйста, имя кота, его вес, ваш e-mail и номер телефона для связи.");
  } else {
	  form.classList.remove("input-error");
	  if (isStorageSupport) {
        localStorage.setItem("email", email.value);
	  }
  }
});

  