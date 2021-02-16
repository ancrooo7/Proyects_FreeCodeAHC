const btnShow = document.querySelector(".btn-show");
const btnHidden = document.querySelector(".btn-hidden");
const hiddenMain = document.querySelector(".hidden-main");

btnShow.addEventListener("click", () => {
    hiddenMain.classList.add("show-main");      
});

btnHidden.addEventListener("click", () => {
    hiddenMain.classList.remove("show-main");
});