const employes = [
  { id: 1, ad: "Ahmet", maas: 5000 },
  { id: 2, ad: "Ali", maas: 7000 },
  { id: 3, ad: "Huzeyfe", maas: 6000 },
  { id: 4, ad: "Sena", maas: 6500 },
];

let employeInfo = "";
for (const employe of employes) {
  employeInfo += ` <tr>  
    <td>${employe.ad}</td>
    <td>${employe.maas}</td>
    <td><Button class="btn btn-danger">Sil</Button></td>
  </tr>`;
}
document.querySelector(".employe-table tbody").innerHTML = employeInfo;
let allrows = document.querySelectorAll(".employe-table tbody tr");

for (const row of allrows) {
  let maas = row.querySelector("td:nth-child(2)").innerHTML;
  if (maas > 5000) {
    row.classList.add("table-primary");
  }
}
