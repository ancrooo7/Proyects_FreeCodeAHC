// Se tiene un array con dos de cada uno de los elementos dado el juego que se realiza.
const cardArray = [
    {
        name:'fries',
        img: './images/fries.png'
    },
    {
        name:'fries',
        img: './images/fries.png'
    },
    {
        name:'cheeseburger',
        img: './images/cheeseburger.png'
    },
    {
        name:'cheeseburger',
        img: './images/cheeseburger.png'
    },
    {
        name:'hotdog',
        img: './images/hotdog.png'
    },
    {
        name:'hotdog',
        img: './images/hotdog.png'
    },
    {
        name:'ice-cream',
        img: './images/ice-cream.png'
    },
    {
        name:'ice-cream',
        img: './images/ice-cream.png'
    },
    {
        name:'milkshake',
        img: './images/milkshake.png'
    },
    {
        name:'milkshake',
        img: './images/milkshake.png'
    },
    {
        name:'pizza',
        img: './images/pizza.png'
    },
    {
        name:'pizza',
        img: './images/pizza.png'
    }
];

// Como el método sort se dedica a ordenar se pasara un valor random para que este pueda organizar
cardArray.sort(() => 0.5 - Math.random()); 

const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result');
var cardsChosen = [];
var cardsChosenId = [];
var cardsWon = [];

// En este caso se tiene una función que crea la pizarra donde estara cada uno de los cuadros
function createBoard() {
    for (let i = 0; i<cardArray.length; i++) { // Según el largo del array se creará la pizarra.
        // Crea una etiqueta a partir del nombre de esta que sera en donde se deposite cada una de la imagenes.
        var card = document.createElement('img'); 
        // Le define a la etiqueta el atributo de carga de imagen.
        card.setAttribute('src', './images/blank.png'); 
        // Se define una data-id global en la etiqueta recien creada.
        card.setAttribute('data-id', i);
        // Se define el escuchador de eventos que va agregar el evento si se hizo click en la imagen
        card.addEventListener('click', flipcard);
        // Coloca la etiqueta creada como hijo de la etiqueta con clase '.grid'.
        grid.appendChild(card); 
    }
}

function checkForMatch() {
    // Se toma una lista de elementos al selector indicado
    var cards = document.querySelectorAll('img');
    // Se toma el primero y el segundo valor del array indicado
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    // Se compara la igualdad de el primer y el segundo valor de el array que contiene los nombres de cada una de las imagenes
    if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match'); // Se devuelve un alerta con el aviso
        // Dado los lugares que se seleccionaron se cambian por una imagen en blanco
        cards[optionOneId].setAttribute('src', './images/white.png'); 
        cards[optionTwoId].setAttribute('src', './images/white.png');
        // Se coloca los elementos que dieron el resultado de igualdad.
        cardsWon.push(cardsChosen);
    }
    // Se colocan nuevamente las imagenes que representan la parte de atras de las imagenes-comida  
    else {
        cards[optionOneId].setAttribute('src', './images/blank.png');
        cards[optionTwoId].setAttribute('src', './images/blank.png');
    }
    // Se inicializa los arreglos nuevamente a cero elementos.
    cardsChosen = [];
    cardsChosenId = [];
    // Devuelve el largo del array que representa los puntos que se van ganando.
    resultDisplay.textContent = cardsWon.length;
    // En caso de ganar el juego se devuelve el contenido.
    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = "Cogratulations! You found them all!";
    }
}

// En este caso esta función se dedica a guardar cada par de elementos que levantados.
function flipcard() {
    // Toma el valor del atributo 'data-id' de la etiqueta creada.
    var cardId = this.getAttribute('data-id');
    // En un array global se coloca el nombre de la imagen que aparcio al seleccionar.
    cardsChosen.push(cardArray[cardId].name);
    // Se guarda en un nuevo array global el valor que del index 
    cardsChosenId.push(cardId);
    // Se coloca segun que cuadro se seleccion la imagen predeterminada para ese lugar
    this.setAttribute('src', cardArray[cardId].img);
    // En caso de que se el largo del array sea igual a 2 se ejecutara una función en medio segundo.
    if (cardsChosen.length == 2) {
        setTimeout(checkForMatch, 500);
    }
}

createBoard();