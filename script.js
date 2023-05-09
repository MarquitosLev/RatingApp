const rateButtons = document.querySelectorAll(".rate-button");
const submitButton = document.querySelector("#submit-button");
let selectedValue = null;

// Realiza la releccion del rating
rateButtons.forEach((button) => {
  button.addEventListener("click", () => {
    rateButtons.forEach((otherButton) =>
      otherButton.classList.remove("selected")
    );
    button.classList.add("selected");
  });
});

// Efecto de apretar el submit
rateButtons.forEach((button) => {
  button.addEventListener("click", () => {
    rateButtons.forEach((otherButton) =>
      otherButton.classList.remove("selected")
    );
    button.classList.add("selected");
    selectedValue = button.getAttribute("data-value");
  });
});

submitButton.addEventListener("click", () => {
  console.log("Valor seleccionado:", selectedValue);
  
});
