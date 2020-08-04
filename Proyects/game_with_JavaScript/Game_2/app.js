const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');

let result = 0;
let currentTime = timeLeft.textContent;

// Esta función se dedica a "mover" la imagen del dragon de un cuadro a otro
function randomSquare() {
    // En caso de que halla uno de los elementos con la clase mole en su lista se removera
    square.forEach(className => {
        className.classList.remove('mole');
    });
    /* En este caso se elige un elemento random de la lista de elementos que tengan
    la clase 'square' para luego agregar en una de esta la clase 'mole'*/
    let randomPosition = square[Math.floor(Math.random() * 9)];
    randomPosition.classList.add('mole');

    hitPosition = randomPosition.id;
}

// Se mueve en cada uno de los elementos de la lista de clase square
square.forEach(id => {
    // Se toma el elemto escucha de cada uno de los elementos que esten en el selector 'square'
    id.addEventListener('mouseup', () => {
        // Se compara el elemento id pulsado, a través de su id, con otra variable 
        if(id.id === hitPosition) {
            // Se suma los puntos y se muestra el resultado en pantalla
            result += 1;
            score.textContent = result;
        }
    }); 
});

// Esta función se dedica a mover cada segundo la imagen
function moveMole() {
    let timerId = null;
    timerId = setInterval(randomSquare, 1000);
}

moveMole();

// Esta función se dedica a correr el tiempo hacia atras para ir mostrandolo en pantalla y cuando llege a cero termina el juego.
function countDown() {
    // Se descuenta el valor que se tiene en variable que hace referencia a tiempo cada 1000 millisegundos
    currentTime--;
    // Se muestra el nuevo valor de timpo en pantalla
    timeLeft.textContent = currentTime;

    // En caso de llegar a cero como valor en la variable anterior termina el juego y se muestra un mensaje en pantalla.
    if(currentTime === 0) {
        clearInterval(timerId);
        //alert('GAME OVER! Your final score is' + result);
    }
}

let timerId = setInterval(countDown, 1000);
