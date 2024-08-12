import { getWeatherData } from "./index.js";
export { button };

async function displayData() {
  try {
    let weatherInput = document.querySelector("input").value;
    let temp = document.querySelector(".temp");
    let tempMax = document.querySelector(".tempmax");
    let tempMin = document.querySelector(".tempmin");

    let weather = await getWeatherData(weatherInput);

    temp.textContent = `The current temp is: ${weather.days[0].temp}`;
    tempMax.textContent = `The current temp is: ${weather.days[0].tempmax}`;
    tempMin.textContent = `The current temp is: ${weather.days[0].tempmin}`;
  } catch (error) {
    console.log(error);
  }
}
let button = document.querySelector("button");

button.addEventListener("click", displayData);
