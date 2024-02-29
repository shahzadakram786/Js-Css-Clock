const secondHand =  document.querySelector('.second-hand');
const ThirdHand = document.querySelector(".min-hand")
const FirstHand = document.querySelector(".hour-hand")

function setDate(){
   
    // console.log("hi");
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60)* 360)+90;
    console.log(seconds)
    secondHand.style.transform =  `rotate(${secondsDegrees}deg)`


if(secondHand.style.transform == `rotate(444deg)`)
{
    secondHand.style.transform = `rotate(90deg)`
}


const mins = now.getMinutes();
const minsDegrees = ((mins / 60)* 360)+90;
ThirdHand.style.transform = `rotate(${minsDegrees}deg)`;



const hours = now.getHours();
const hoursDegrees = ((hours / 12)* 360)+90;
FirstHand.style.transform = `rotate(${hoursDegrees}deg)`;
}
setDate()

setInterval(setDate, 1000);