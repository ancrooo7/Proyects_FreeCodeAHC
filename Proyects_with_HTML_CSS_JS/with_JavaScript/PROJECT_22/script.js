"use strict";

var reloj = document.querySelector(".reloj");

var getHour = function getHour() {
    var date = new Date();
    var tiempo = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    };
    var dateNow = "".concat(tiempo.hour, " : ").concat(tiempo.minute, " : ").concat(tiempo.second);
    reloj.innerHTML = dateNow;
};

setInterval(getHour, 1000);