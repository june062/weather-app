export { displayWeatherData };

function displayWeatherData(weather) {
  let location = document.querySelector(".location");
  let temp = document.querySelector(".temp");

  location.textContent = weather.resolvedAddress;
  temp.textContent = weather.days[0].temp;
}
