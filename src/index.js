import "./styles.css";
import {} from "./controller.js";
export { getWeatherData };

async function getWeatherData(location, unit) {
  try {
    let response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${unit}&key=SSLL4HC8P9Z59XR7DAK3XSFZ5&contentType=json`,
      {
        mode: "cors",
      }
    );
    let weatherData = await response.json();
    return weatherData;
  } catch (error) {
    console.log("Enter a valid location");
  }
}
