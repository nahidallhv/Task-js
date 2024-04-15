let allow = true;
const orderRow = () => {
  const rows = [...document.querySelector("tbody").querySelectorAll("tr")];
  rows.map((row, key) => {
    row.querySelector("td:first-child").textContent = key + 1;
  });
};
const saveData = (e) => {
  const inputs = [
    ...e.target.parentElement.parentElement.querySelectorAll("input"),
  ];
  const isEmpty = inputs.some((input) => input.value.trim() === "");
  if (isEmpty) {
    alert("Xanaları doldurun");
    return;
  }
  inputs.map((input) => {
    input.parentElement.textContent = input.value;
  });
  e.target.textContent = "Düzəliş et";
  allow = true;
};
const editData = (e) => {
  const row = e.target.parentElement.parentElement;
  const inputs = row.querySelectorAll("input");
  inputs.forEach((input) => {
    input.removeAttribute("readonly");
  });
  e.target.textContent = "Saxla";
  e.target.classList.remove("editBtn");
  e.target.classList.add("saveBtn");
  allow = false;
};
const deleteRow = (e) => {
  const row = e.target.parentElement.parentElement;
  row.remove();
  orderRow();
};
const addBtn = document.querySelector(".addBtn");
const tbody = document.querySelector("tbody");
addBtn.addEventListener("click", () => {
  if (!allow) {
    alert("Əvvəlki xananı doldurun");
    return;
  }
  allow = false;
  const row = document.createElement("tr");
  const noTd = document.createElement("td");
  noTd.textContent = tbody.querySelectorAll("tr").length + 1;
  const nameTd = document.createElement("td");
  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("placeholder", "Ad");
  nameTd.append(nameInput);
  const surnameTd = document.createElement("td");
  const surnameInput = document.createElement("input");
  surnameInput.setAttribute("type", "text");
  surnameInput.setAttribute("placeholder", "Soyad");
  surnameTd.append(surnameInput);
  const ageTd = document.createElement("td");
  const ageInput = document.createElement("input");
  ageInput.setAttribute("type", "number");
  ageInput.setAttribute("placeholder", "Yaş");
  ageTd.append(ageInput);
  const optionsTd = document.createElement("td");
  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Saxla";
  saveBtn.classList.add("saveBtn");
  saveBtn.addEventListener("click", saveData);
  const cancelBtn = document.createElement("button");
  cancelBtn.textContent = "Sil";
  cancelBtn.classList.add("cancelBtn");
  cancelBtn.addEventListener("click", deleteRow);
  optionsTd.append(saveBtn, cancelBtn);
  row.append(noTd, nameTd, surnameTd, ageTd, optionsTd);
  tbody.append(row);
});
