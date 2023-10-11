const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");
const submitButton = document.getElementById("email-btn");
const mainPage = document.getElementById("main-container");
const mainImage = document.getElementById("image-container");
const dismissBtn = document.getElementById("dismiss-btn");

const successCard = document.getElementById("success-card");
const successEmail = document.getElementById("success-email");

submitButton.addEventListener("click", function () {
  const email = emailInput.value.trim();
  // case for when email address in invalid
  if (email === "" || !validateEmail(email)) {
    emailInput.classList.add("turn-red");
    emailError.style.display = "block";
  } else {
    // case for when email address in valid.
    emailInput.classList.remove("turn-red");
    emailError.style.display = "none";
    successCard.classList.remove("hidden");
    mainPage.style.display = "none";
    mainImage.style.display = "none";
    successEmail.innerHTML = `${emailInput.value}`;
  }
});

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
}

dismissBtn.addEventListener("click", function () {
  successCard.classList.add("hidden");
  mainPage.style.display = "flex";
  mainImage.style.display = "flex";
});
