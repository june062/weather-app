import { getWeatherData } from "./index.js";
import { displayWeatherData } from "./display.js";
/* export { button }; */

let changeTemp = document.querySelector(".change-temp");
let changeLocation = document.querySelector(".change-location");
let unitType;

function checkTempUnit() {
  if (changeTemp.textContent === "C") {
    unitType = "us";
  } else {
    unitType = "metric";
  }
}
async function getData() {
  try {
    let weatherInput = document.querySelector("input").value;
    checkTempUnit();
    let weather = await getWeatherData(weatherInput, unitType);
    displayWeatherData(weather, unitType);
  } catch (error) {
    /* console.log(error); */
  }
}

async function changeText() {
  changeTemp.textContent == "F"
    ? (changeTemp.textContent = "C")
    : (changeTemp.textContent = "F");
  checkTempUnit();
  displayWeatherData(
    await getWeatherData(document.querySelector("input").value, unitType)
  );
}

changeLocation.addEventListener("click", getData);
changeTemp.addEventListener("click", changeText);
