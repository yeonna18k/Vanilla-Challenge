const API_KEY = "58b2a76569ae10d2370a11d5b0100eaa";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  const today = new Date();
  let date = today.getDate();
  const WEEKDAY = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let day = WEEKDAY[today.getDay()];
  console.log(date);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      const temp_k = Math.abs(data.main.temp - 273.15);
      const temp_c = temp_k.toFixed(1);
      city.innerText = data.name;
      weather.innerText = `${date}(${day}) ${data.weather[0].main}  ${temp_c}℃  `;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
