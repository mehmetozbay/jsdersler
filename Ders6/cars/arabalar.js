import { cars } from "./cars.js";

let carsInfo = "";
for (const car of cars) {
  carsInfo += `<li>${car.marka}</li>`;
}
document.querySelector("#cars").innerHTML = carsInfo;
