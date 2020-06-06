window.addEventListener('load', () => {

    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");

    //Sound
    pads.forEach(pad =>{
        pad.addEventListener("click", function() {
            sounds[4]
        });
    });
});
