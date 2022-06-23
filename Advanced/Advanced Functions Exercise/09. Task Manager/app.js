function solve() {
  let addBtn = document.getElementById("add").addEventListener("click", onAdd);
  let taskField = Array.from(document.getElementById("task").value);
  let dateField = Array.from(document.getElementById("date").value);
  let textArea = Array.from(document.getElementById("description").value);

  

  function onAdd() {
    if (taskField.length > 0 && dateField.length > 0 && textArea.length > 0) {
      console.log("test");
    } else {
      console.log("no");
    }
  }
}
