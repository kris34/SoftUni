function addItem() {
  let text = document.getElementById("newItemText").value;

  let ulElement = document.getElementById("items");

  let liItem = document.createElement("li");
  liItem.textContent = text;
  ulElement.appendChild(liItem);
  document.getElementById("newItemText").value = " ";
}
