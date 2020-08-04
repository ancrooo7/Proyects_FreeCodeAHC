const button = document.querySelector(".boton");
const entry = document.getElementById("entry");
const message = document.querySelector(".message");

button.addEventListener("click", () => {
    message.textContent = entry.value;
});