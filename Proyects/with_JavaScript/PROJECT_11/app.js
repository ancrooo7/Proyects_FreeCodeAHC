const navButton = document.querySelector(".nav-button");
const showMenu = document.querySelector(".show-menu");
const closeButton = document.querySelector(".close-button");

navButton.addEventListener("click", () => {
    showMenu.classList.toggle('hidden-menu');
});
closeButton.addEventListener("click", () => {
    showMenu.classList.add('hidden-menu');
});