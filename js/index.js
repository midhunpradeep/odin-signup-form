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

function main() {
  addInteractedClassToInputs();
  addAsteriskToRequiredFieldLabels();
}

main();
