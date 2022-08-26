const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

let int = setInterval(blurring, 80);

function blurring(){
    load++;

    if(load > 99){
        clearInterval(int);
    }

    // console.log(load);
    loadText.innerHTML = `${load}%`;  //to show the increase in percentage with time
    loadText.style.opacity = scale(load, 0, 100, 1, 0);

    bg.style.filter = `blur(${scale(load, 0, 100, 30, 1)}px)`;
}

// jse jse percentage ki value badhegi vse vse uss percentage text ki opacity decrease krenge taaki 100% invisible ho jaye ya fade out ki feeling aaye!!
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}