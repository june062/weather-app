import { getWeatherData } from "./index.js";
import { displayWeatherData } from "./display.js";
export { button };

async function getData() {
  try {
    let weatherInput = document.querySelector("input").value;
    let weather = await getWeatherData(weatherInput, "us");
    console.log(weather);
    displayWeatherData(weather);
  } catch (error) {
    /* console.log(error); */
  }
}
let button = document.querySelector("button");

button.addEventListener("click", getData);
