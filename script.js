const secondHand =  document.querySelector('.second-hand');
const ThirdHand = document.querySelector(".min-hand")

function setDate(){
   
    // console.log("hi");
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60)* 360)+90;
    console.log(seconds)
    secondHand.style.transform =  `rotate(${secondsDegrees}deg)`




const mins = now.getMinutes();
const minsDegrees = ((mins / 60)* 360)+90;
ThirdHand.style.transform = `rotate(${minsDegrees}deg)`
}


setInterval(setDate, 1000);