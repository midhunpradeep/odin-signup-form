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

function main() {
  addInteractedClassToInputs();
}

main();
