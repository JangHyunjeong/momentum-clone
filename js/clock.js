const clock = document.querySelector('.clock');

function clockFunc(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    //console.log(date);

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}


clockFunc();
setInterval(clockFunc,1000);