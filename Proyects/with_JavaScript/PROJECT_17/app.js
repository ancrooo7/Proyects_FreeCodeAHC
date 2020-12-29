const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
];
const diasSemana = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

const futureDate = new Date(tempYear, tempMonth, tempDay+10, 22, 43, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = meses[month];
const date = futureDate.getDate()

const weekday = diasSemana[futureDate.getDay()];

giveaway.textContent = `el sorteo termina el ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

//-------------------------------------------------------------------------------------

const futureTime = futureDate.getTime();

function getRemainingTime() {
    const today = new Date().getTime();
    const t = futureTime - today;
    console.log(t);

    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMinute = 60*1000;
    
    let days = Math.floor(t/oneDay);
    let hours = Math.floor((t%oneDay) / oneHour);
    let minutes = Math.floor((t%oneHour) / oneMinute);
    let seconds = Math.floor((t%oneMinute) / 1000);
    
    const values = [days, hours, minutes, seconds];

    function format(item) {
        if (item < 10)
            return (item = `0${item}`);
        return item;
    }

    items.forEach((item, index) => {
        item.innerHTML = format(values[index]);
    });

    if(t < 0) {
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">Disculpa, este regalo ya expiro.</h4>`
    }
}

let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();