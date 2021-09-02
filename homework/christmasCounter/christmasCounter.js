const clockTitle = document.querySelector(".js-clock");


function untilChristmasDateFunc(){
    const now =  new Date();
    const nowYear = now.getFullYear();
    const dDay = new Date(`Dec 25,${nowYear},00:00:00`).getTime();
    const distance = dDay - now;
    var d = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2,"0");
	var h = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2,"0");
	var m = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2,"0");
	var s = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2,"0");
     

    clockTitle.innerText = `${d}d ${h}h ${m}m ${s}s`    
} 
untilChristmasDateFunc();
setInterval(untilChristmasDateFunc,1000);