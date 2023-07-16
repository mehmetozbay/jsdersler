import { cities } from "./cities.js";

let cityInfo = "";
for (const city of cities) {
  cityInfo += ` <option value="${city.name}">${city.name}</option>`;
}

document.querySelector("#cities").innerHTML = cityInfo;
