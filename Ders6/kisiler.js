import { users } from "../assets/js/users.js";

let userInfo = "";
for (const user of users) {
  userInfo += ` <tr>
  <td>${user.name}</td>
  <td>${user.age}</td>
  <td>${user.job}</td>
</tr>`;
}

document.querySelector("#users").innerHTML = userInfo;
