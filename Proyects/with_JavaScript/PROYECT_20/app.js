const buttonCheck = document.querySelector(".button-check");
const result = document.getElementById("result");
const valueOne = document.querySelector(".value-one");
const valueTwo = document.querySelector(".value-two");

let numOne = randomNumber();
let numTwo = randomNumber();

window.addEventListener("DOMContentLoaded", () => {

    valueOne.textContent = numOne;
    valueTwo.textContent = numTwo;
});

buttonCheck.addEventListener("click", () => {
    let resultOutput = result.value;

    getResult(resultOutput);
});

function getResult(output) {
    let result = numOne + numTwo;
    if (result == output) {
        alert("Muy bien");
    }else {
        alert("Mal");
    }
}

function randomNumber() {
    return Math.floor(Math.random() * 10);
}

