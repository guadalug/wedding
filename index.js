const weddingDay = new Date(2023, 0, 7, 18,0,0);
const oneSecond = 1000;
const secondsInADay = 86_400;
const secondsInAnHour = 3_600;
const secondsInAMinute = 60;

function formatUnit(value){
    if(value >= 10) return value;
    return `0${value}`;
}

function init(){
    const today = new Date();
    let seconds = (weddingDay - today) / 1000;
    
    const days = formatUnit(Math.trunc(seconds / secondsInADay));
    seconds-= (secondsInADay * days);
    
    const hours = formatUnit(Math.trunc(seconds / secondsInAnHour));
    seconds-= secondsInAnHour * hours;
    
    const minutes = formatUnit(Math.trunc(seconds / secondsInAMinute));
    seconds-= secondsInAMinute * minutes;
    seconds = Math.trunc(seconds);
    
    const counter = document.getElementById("counter");
    counter.innerHTML = `
        ${days} <span>d</span> : 
        ${hours} <span>h</span> : 
        ${minutes} <span>m</span> :
        ${seconds} <span>s</span>`;
}

setInterval(init,oneSecond);
init();



