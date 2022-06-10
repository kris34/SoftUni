function addItem() {
  let text = document.getElementById("newItemText").value;

  let ulElement = document.getElementById("items");

  let liItem = document.createElement("li");
  liItem.textContent = text;
  ulElement.appendChild(liItem);
  //creating the delete button
  let deleteBtn = document.createElement("a");
  deleteBtn.textContent = "[Delete]";
  deleteBtn.href = "#";
  liItem.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", onDelete);

  function onDelete(event) {
    event.target.parentElement.remove();
  }
  //adding count button
  // - creating the button
  let countBtn = document.createElement("button");
  countBtn.textContent = "0";
  //--appending the button to the list element
  liItem.appendChild(countBtn);
  countBtn.addEventListener("click", onCount);
  // --- creating the count function
  function onCount() {
    let number = Number(countBtn.textContent) + 1;
    countBtn.textContent = number;
  }

  document.getElementById("newItemText").value = " ";
}
