const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();  
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minsDegrees = ((minutes / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minsDegrees}deg)`; 

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}


setInterval(setDate, 1000);

i = 90;
var handy  = secondHand.style.transform = `rotate(${secondsDegrees}deg)`;


for (i = 90; i > handy ; secondsDegrees += 6){
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
}