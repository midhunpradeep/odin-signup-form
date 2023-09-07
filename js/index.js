function addInteractedClassToInputs() {
  const inputFields = document.querySelectorAll(".signup-form input");
  for (const inputField of inputFields) {
    inputField.addEventListener("focus", () => {
      inputField.classList.add("interacted");
    });
  }

  const submitBtn = document.getElementById("signup-submit-btn");
  submitBtn.addEventListener("click", () => {
    for (const inputField of inputFields) {
      inputField.classList.add("interacted");
    }
  });
}

function addAsteriskToRequiredFieldLabels() {
  const labels = document.querySelectorAll("form label");
  for (const label of labels) {
    if (document.getElementById(label.htmlFor).required) {
      label.textContent += "*";
    }
  }
  document.getElementById("required-hint").removeAttribute("hidden");
}

function checkPasswordsMatch() {
  const passwordFields = document.querySelectorAll(
    ".signup-form input[type='password']",
  );
  const differentPasswordsHint = document.getElementById("password-hint");

  for (const passwordField of passwordFields) {
    passwordField.addEventListener(
      "input",
      () => {
        for (const field of passwordFields) {
          field.classList.add("interacted");
        }
      },
      { once: true },
    );

    passwordField.addEventListener("input", () => {
      if (passwordFields[0].value === passwordFields[1].value) {
        for (const field of passwordFields) {
          field.classList.remove("different-passwords");
          differentPasswordsHint.hidden = true;
        }
      } else {
        for (const field of passwordFields) {
          field.classList.add("different-passwords");
          differentPasswordsHint.hidden = false;
        }
      }
    });
  }
}

function main() {
  addInteractedClassToInputs();
  addAsteriskToRequiredFieldLabels();
  checkPasswordsMatch();
}

main();
