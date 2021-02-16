document.addEventListener('keydown', function(event) {
    let e = event.code;
    if( e == "KeyA" || e == "KeyS" || e == "KeyD" || 
        e == "KeyF" || e == "KeyG" || e == "KeyH" ||
        e == "KeyJ" || e == "KeyW" || e == "KeyE" ||
        e == "KeyT" || e == "KeyY" || e == "KeyU") {
        console.log("The '" + event.key.toUpperCase() + "' key is pressed.");
        let audio = new Audio(document.getElementById(e).src);
        audio.play();
    } else {
        console.log("Key don't found");
    }
});