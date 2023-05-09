const rateButtons = document.querySelectorAll(".rate-button");
const submitButton = document.querySelector("#submit-button");
const thanksSection = document.getElementById("th-section");
const ratingSection = document.getElementById("rat-section");
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

// Presional boton submit
submitButton.addEventListener("click", () => {
  // falta comprobar si hay algun rating selecionado, si no se selecciona, no avanza
  let num;
  rateButtons.forEach((button) => {
    if (button.classList.contains("selected")) {
      num = button.dataset.value;
    }
  });
  if (num) {
    thanksSection.querySelector("div:nth-child(2)").textContent =
      "You selected " + num + " out of 5";
  }
  thanksSection.removeAttribute("hidden");
  thanksSection.style.display = "block";
  ratingSection.setAttribute("hidden", "true");
});
