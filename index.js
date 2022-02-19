const weddingDay = new Date(2022, 1, 21, 18,0,0);
const oneMinute = 1000 * 60;
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
    
    const minutes = formatUnit(Math.ceil(seconds / secondsInAMinute));
    
    const counter = document.getElementById("counter");
    counter.innerHTML = `
        ${days} <span>Dias</span> : 
        ${hours} <span>Hrs</span> : 
        ${minutes} <span>Min</span>`;
}

setInterval(init,oneMinute);
init(1,2,3,4,5,6);




