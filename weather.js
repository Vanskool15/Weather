const apiKey = "555ce0686a2eced0bdb7103c51cad48b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const weatherIcon = document.querySelector('.clouds-icon');

const searchBox = document.querySelector('.search-container input');
const searchBtn = document.querySelector('.search-container button');

async function checkWeather(city) {
    const response = await fetch (apiUrl + city +`&appid=${apiKey}`);
    var data = await response.json();
console.log(data);

   document.querySelector('.city').innerHTML = data.name;
   document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "℃";
   document.querySelector('.humid-percent').innerHTML = data.main.humidity + "%";
   document.querySelector('.wind-speed').innerHTML = data.wind.speed + "km/h";

   if(data.weather[0].main == "Clouds") {
    weatherIcon.src = "images/clouds.png";
   } else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "images/clear.png";
   } else if(data.weather[0].main == "Drizzle" ) {
    weatherIcon.src = "images/drizzle.png";
   } else if(data.weather[0].main == "Rain") {
    weatherIcon.src = "images/rain.png";
   }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

