const navButton = document.querySelector(".nav-button");
const navLinks = document.querySelector(".nav-links");

navButton.addEventListener("click", () => {
    navLinks.classList.toggle('show-links');
});