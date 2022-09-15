let nombreInput = document.getElementById("nombreInput");

let nombreLabel = document.getElementById("nombreLabel");

nombreInput.addEventListener("focus", () => {
    nombreLabel.classList.add("contact-nombre-label-up")
});
nombreInput.addEventListener("focusout", () => {
    if (nombreInput.length === 0) {
        nombreLabel.classList.remove("contact-nombre-label-up")
    }
})