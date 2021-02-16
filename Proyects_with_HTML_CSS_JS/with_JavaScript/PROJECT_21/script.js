const days = document.getElementById('days');
const hours = document.getElementById('hours');
const mins = document.getElementById('mins');
const seconds = document.getElementById('seconds');

const dayNewYear = "1 Jan 2021"; 

function setTimeNewYear() {
    let dateNewYear = new Date(dayNewYear);
    let today = new Date();

    let totalDaysMissing = Math.floor((dateNewYear - today) / 1000);

    let daysE = Math.floor(totalDaysMissing / 3600 / 24); 
    let hoursE = Math.floor(totalDaysMissing / 3600) % 24;
    let minsE = Math.floor(totalDaysMissing / 60) % 60;
    let secondsE = totalDaysMissing % 60;

    days.innerHTML = daysE;
    hours.innerHTML = hoursE;
    mins.innerHTML = minsE;
    seconds.innerHTML = secondsE;
}

setTimeNewYear();

setInterval(setTimeNewYear, 1000);