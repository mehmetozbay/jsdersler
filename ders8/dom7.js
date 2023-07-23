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
    <td><Button class="btn btn-danger btn-sil">Sil</Button></td>
  </tr>`;
}
document.querySelector(".employe-table tbody").innerHTML = employeInfo;
let allrows = document.querySelectorAll(".employe-table tbody tr");

// for (const row of allrows) {
//   let maas = row.querySelector("td:nth-child(2)").innerHTML;
//   if (maas > 5000) {
//     row.classList.add("table-primary");
//   }
// }

let txtAd = document.getElementById("txtAd");
let txtMaas = document.getElementById("txtMaas");
let btnAdd = document.getElementById("btnAdd");

btnAdd.addEventListener("click", () => {
  let tr = document.createElement("tr");
  let tdAd = document.createElement("td");
  tdAd.innerText = txtAd.value;

  let tdMaas = document.createElement("td");
  tdMaas.innerText = txtMaas.value;
  let tdSil = document.createElement("td");
  let btnSil = document.createElement("button");
  btnSil.innerText = "Sil";
  btnSil.setAttribute("class", "btn btn-danger btn-sil");
  tdSil.append(btnSil);
  tr.append(tdAd, tdMaas, tdSil);
  document.querySelector(".employe-table tbody").append(tr);
  tableGuncelle();
});

const tableGuncelle = () => {
  document.querySelectorAll(".btn-sil").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let isim = e.target
        .closest("tr")
        .querySelector("td:first-child").innerHTML;
      if (confirm(`${isim} silmek istediginizden emin misiniz?`)) {
        e.target.closest("tr").remove();
      }
    });
  });
};

tableGuncelle();
