const reviews = [{
    id: 1,
    name: "Andres Crespi",
    job: "Web Developer",
    img: "andres.png",
    text: "Constantemente motivado en adquirir nuevos conocimientos y mejorar mis habilidades actuales. Perseverante en la realización de mis tareas de manera simple y eficiente",
},
{
    id: 2,
    name: "Olivia Wilson",
    job: "It Project Manager",
    img: "tipa.png",
    text: "I am an IT project manager with holistic knowledge of software development and design. I am also experienced in coordinating with stakeholders."
},
{
    id: 3,
    name: "Ariel Crespi",
    job: "Técnico en equipos e Instalaciones Electromecánicas",
    img: "ariel.png",
    text: "Constantemente motivado en adquirir nuevos conocimientos y mejorar mis habilidades actuales. Perseverante en la realización de mis tareas de manera simple y eficiente"
},
{
    id: 4,
    name: "Jamie Chastain",
    job: "Software Developer",
    img: "tipo.png",
    text: "I am a software developer with robust problem-solving skills and proven experience in creating and designing software in a test-driven environment"
}];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = Math.floor(Math.random() * reviews.length);

window.addEventListener("DOMContentLoaded", function() {
    showPerson();
});

function showPerson () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener("click", () => {
    currentItem++;
    if (currentItem > reviews.length - 1) 
        currentItem = 0;
    showPerson();
});

prevBtn.addEventListener("click", () => {
    currentItem--;
    if (currentItem < 0) 
        currentItem = reviews.length - 1;
    showPerson();
});

randomBtn.addEventListener("click", () => {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();
});