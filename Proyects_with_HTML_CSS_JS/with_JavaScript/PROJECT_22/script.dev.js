const reloj = document.querySelector(".reloj");

const getHour = () => {
    const date = new Date()
    
    const tiempo = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds(),
    }

    const dateNow = `${tiempo.hour} : ${tiempo.minute} : ${tiempo.second}`

    reloj.innerHTML = dateNow;
}

setInterval(getHour, 1000)