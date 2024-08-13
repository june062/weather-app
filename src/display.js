export { displayWeatherData };

function displayWeatherData(weather, unit) {
  let distanceUnit = "miles";
  let speedUnit = "m/h";
  let tempUnit = "fahrenheit";
  console.log(unit);
  if (unit === "metric") {
    distanceUnit = "kilometers";
    speedUnit = "k/h";
    tempUnit = "celsius";
  } else {
    distanceUnit = "miles";
    speedUnit = "m/h";
    tempUnit = "fahrenheit";
  }

  let location = document.querySelector(".location");
  let temp = document.querySelector(".temp");
  let tempMax = document.querySelector(".temp-max");
  let tempMin = document.querySelector(".temp-min");
  let humidity = document.querySelector(".humidity");
  let visibility = document.querySelector(".visibility");
  let windSpeed = document.querySelector(".wind-speed");
  let chanceOfRain = document.querySelector(".rain-chance");
  let uVIndex = document.querySelector(".uv");
  let dew = document.querySelector(".dew");

  location.textContent = weather.resolvedAddress;
  temp.textContent = `Temp: ${weather.days[0].temp} ${tempUnit}`;
  tempMax.textContent = `Max: ${weather.days[0].tempmax} ${tempUnit}`;
  tempMin.textContent = `Min: ${weather.days[0].tempmin} ${tempUnit}`;
  humidity.textContent = `Humidity: ${weather.days[0].humidity}%`;
  visibility.textContent = `Visibility: ${weather.days[0].visibility} ${distanceUnit}`;
  windSpeed.textContent = `Wind Speed: ${weather.days[0].windspeed} ${speedUnit}`;
  chanceOfRain.textContent = `Chance of rain: ${weather.days[0].precipprob}%`;
  uVIndex.textContent = `UV Index: ${weather.days[0].uvindex}`;
  dew.textContent = `Dew: ${weather.days[0].dew} ${tempUnit}`;
}
