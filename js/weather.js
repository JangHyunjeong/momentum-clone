const API_KEY = "eb70e3076aec351b65dac9b555ff4b97";
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

function onGeoOk(position){
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    //console.log("You live in", lat , log);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}`;
    //console.log(url);
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError(){
    alert("can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);