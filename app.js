let secondhand=document.querySelector('.second-hand');
let minhand=document.querySelector('.min-hand');
let hourhand=document.querySelector('.hour-hand');
function setTime(){
    const newtime=new Date();
    // get seconds
    const seconds=newtime.getSeconds();
    let secdeg=((seconds/60)*360)+90;
    secondhand.style.transform=`rotate(${secdeg}deg)`;
//    get minutes
    const min=newtime.getMinutes();
    let mindeg=((min/60)*360)+90;
    minhand.style.transform=`rotate(${mindeg}deg)`;
//  get hours
    const hour=newtime.getHours();
    let hourdeg=((hour/24)*360)+90;
    hourhand.style.transform=`rotate(${hourdeg}deg)`;

}

setInterval(setTime,1000);
