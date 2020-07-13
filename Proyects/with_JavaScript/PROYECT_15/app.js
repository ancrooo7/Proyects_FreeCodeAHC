const btn = document.querySelector(".onoffswitch-checkbox");
const video = document.querySelector(".video-container");

btn.addEventListener("click", () => {
    if(!btn.classList.contains("slide")){
        btn.classList.add("slide");
        video.play();
    }
    else {
        btn.classList.remove("slide");
        video.pause();
    }
});