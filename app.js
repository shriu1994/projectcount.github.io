const endDate = "26 Dec 2022 00:00 AM";
document.getElementById("end-date").innerText= endDate;
const inputs = document.querySelectorAll("input")
// In this, we have taken all inputs so first index of input will be days, then hours, mins,sec, like inputs[0].value = 

function countdown(){
    const end = new Date(endDate);
    const now = new Date();
    const diff =(end-now)/1000;
    console.log(diff);
    // convert into days
    inputs[0].value = Math.floor(diff/3600/24);//days
    inputs[1].value = Math.floor(diff/3600)%24;//hours
    inputs[2].value = Math.floor(diff/60)%60;//mins
    inputs[3].value = Math.floor(diff%60);//sec



    
    
}

countdown();
// sec continuosly chalu rehna hai to set interval karo

setInterval(
    ()=>{
        countdown()
    },
    1000
)