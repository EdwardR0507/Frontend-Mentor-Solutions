const containerForm = document.querySelector("#containerForm");
const signUpForm = document.querySelector("#signUpForm");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const successState = document.querySelector("#successState");
const emailSuccess = document.querySelector("#emailSuccess");
const dismissButton = document.querySelector("#dismissButton");

const isValidEmail = (email) => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return regex.test(email);
};

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailValue = email.value;
  if (!isValidEmail(emailValue)) {
    emailError.style.display = "block";
    email.classList.add("sign-up-form__input-error");
  } else {
    signUpForm.classList.remove("error-message");
    emailError.style.display = "none";
    email.classList.remove("sign-up-form__input-error");
    successState.style.display = "block";
    containerForm.style.display = "none";
    emailSuccess.textContent = emailValue;
  }
});

dismissButton.addEventListener("click", () => {
  successState.style.display = "none";
  containerForm.style.display = "flex";
  email.value = "";
});
