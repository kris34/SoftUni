/* function deleteByEmail() {
  let input = document.querySelector(`input[name="email"]`).value;
  let rows = Array.from(document.querySelectorAll("tbody tr"));

  let isTrue = false;

  for (let row of rows) {
    if (row.children[1].textContent === input) {
      let parent = row.parentElement;
      parent.removeChild(row);
      isTrue = true;
    }
  }

  isTrue
    ? (document.getElementById("result").textContent = "Deleted")
    : (document.getElementById("result").textContent = "Not found.");
}

 */

function deleteByEmail() {
  // selecting the input
  let input = document.querySelector(`input[name="email"]`).value;
  // selecting the exact row
  let rows = Array.from(document.querySelectorAll("tbody tr"));

  let isFound = false;
  // checking if row contains email
  //- if yes, we remove the row and set the isFound boolean to true
  for (let row of rows) {
    if (row.children[1].textContent == input) {
      row.remove();
      isFound = true;
    }
  }
  // if isFound == true, we set the result.textContent to "Deleted" else to "Not Found"
  isFound
    ? (document.getElementById("result").textContent = "Deleted")
    : (document.getElementById("result").textContent = "Not found.");
}
