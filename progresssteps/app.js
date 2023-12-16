const progressBar = document.getElementById("progress-bar");
const progressNext = document.getElementById("progress-next");
const progressPrev = document.getElementById("progress-prev");
const steps = document.querySelectorAll(".step");
let active = 1;

progressNext.addEventListener("click", () => {
    active++;

    if(active > steps.length){
        active = steps.length;
    }
    updateProgress();
});

progressPrev.addEventListener("click", () => {
    active--;

    if(active < 1){
        active = 1;
    }
    updateProgress();
});