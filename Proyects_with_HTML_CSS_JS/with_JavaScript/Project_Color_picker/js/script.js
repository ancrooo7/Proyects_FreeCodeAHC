const color = document.querySelector("#color")
const exit = document.querySelector("#exit")

color.addEventListener("input", () => {
    const value = color.value;
    
    exit.innerHTML = value;
    exit.style.background = value;
    exit.style.color = "#ffffff"
})