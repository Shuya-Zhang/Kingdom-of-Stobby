const inputEls = document.querySelectorAll("input");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#phone-number");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const submitBtn = document.querySelector("button");
const pwdRequirements = document.querySelector(".password-requirements");
let msg = "";
let num;
let specialChars

inputEls.forEach((input) => {
  input.addEventListener("click", () => {
    if (firstName.value.length < 2) {
      firstName.style.backgroundColor = "#f36c6c";
    } else {
      firstName.style.backgroundColor = "#ffffff";
    }
    if (lastName.value.length < 1) {
      lastName.style.backgroundColor = "#f36c6c";
    } else {
      firstName.style.backgroundColor = "#ffffff";
    }
    if (email.value.length < 3) {
      email.style.backgroundColor = "#f36c6c";
    } else {
      firstName.style.backgroundColor = "#ffffff";
    }
    if (phoneNumber.value.length < 7) {
      phoneNumber.style.backgroundColor = "#f36c6c";
    } else {
      firstName.style.backgroundColor = "#ffffff";
    }
    if (password.value.length < 8) {
      password.style.backgroundColor = "#f36c6c";
    } else {
      firstName.style.backgroundColor = "#ffffff";
    }
    if (password !== confirmPassword) {
      confirmPassword.style.backgroundColor = "#f36c6c";
    } else {
      firstName.style.backgroundColor = "#ffffff";
    }
  });
});

submitBtn.addEventListener("click", () => {
  num = /\d/.test(password);
  specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password);
  if (num === false) {
    console.log("false");
    msg = msg + " a number ";
    pwdRequirements.innerText = "Please include" + msg + "in your password";
  } else if (msg.includes(" a number ") && num === true) {
    console.log("true");
    msg = msg.replace(" a number ", "");
  }
  if (specialChars === false) {
    console.log("false");
    msg = msg + " a special character ";
    pwdRequirements.innerText = "Please include" + msg + "in your password";
  } else if (msg.includes(" a special character ") && num === true) {
    msg = msg.replace(" a special character  ", "");
  }
});
