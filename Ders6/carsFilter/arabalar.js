import { cars } from "./cars.js";

document.querySelector("#search").addEventListener("keyup", (e) => {
  //change
  let carsInfo = "";
  cars
    .filter((item) =>
      item.marka.toUpperCase().includes(e.target.value.toUpperCase())
    )
    .forEach((item) => {
      carsInfo += `<li>${item.marka}</li>`;
    });

  document.querySelector("#cars").innerHTML = carsInfo;
});
