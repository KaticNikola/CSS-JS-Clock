let secondHand = document.querySelector(".second-hand");
let minHand = document.querySelector(".min-hand");
let hourHand = document.querySelector(".hour-hand");


function setDate(){
    let now = new Date();
    
    
    let seconds = now.getSeconds();  
    let secondsDegrees = ((seconds / 60 ) * 360) + 90;
    /* +90 zato sto su inicijalno pomerene za 90stepei da bi stajale uspravno*/
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    
    
    let mins = now.getMinutes();
    let minsDegrees = ((mins / 60 ) * 360) + 90;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;
    
    
    /* da li now.getHours ili now.hetMinutes*/
    let hours = now.getHours();
    let hoursDegrees = ((hours / 12 ) * 360 ) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000)