
let bar = document.querySelector(".bar");
let progress = document.querySelector(".bar__progress-line");

let processingTime = 800;
let i = 0;
setInterval( function(){

    if ( i < 99 ) {
        i = i + Math.floor(Math.random() * (25 - 1));
        progress.style.width = i + "%";
        processingTime = Math.floor(Math.random() * (3000 - 800));
        if ( i >= 99 ) {
            i = 99;
            bar.classList.add('complete');
            processingTime = 1000;
        }
    } else {
        i = 0;
        progress.style.width = i + "%";
        bar.classList.remove('complete');
        processingTime = Math.floor(Math.random() * (3000 - 800));
    };

}, processingTime);
