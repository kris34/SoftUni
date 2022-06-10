function generateReport() {
  let cbs = document.querySelectorAll("thead tr th input");
  let colPos = [];
  for (let i = 0; i < cbs.length; i++) {
    if (cbs[i].checked) {
      colPos.push(i);
    }
  }

  let result = [];

  let data = document.querySelectorAll("tbody tr");

  for (let i = 0; i < data.length; i++) {
    let currRow = data[i].children;
    let items = {};
    for (let k = 0; k < currRow.length; k++) {
      if (colPos.includes(k)) {
        let label = cbs[k].name;
        items[label] = currRow[k].textContent;
      }
    }
    result.push(items);
  }
  let json = JSON.stringify(result);
  let target = document.getElementById("output");
  target.value = json;
}
/* function generateReport() {
  let cbs = document.querySelectorAll("thead tr th input");
  let colPos = [];
  for (let i = 0; i < cbs.length; i++) {
    if (cbs[i].checked) {
      colPos.push(i);
    }
  }

  let finalResult = [];

  let data = document.querySelectorAll("tbody tr");
  for (let j = 0; j < data.length; j++) {
    let currRow = data[j].children;
    let currItems = {};
    for (let k = 0; k < currRow.length; k++) {
      if (colPos.includes(k)) {
        let label = cbs[k].name;
        currItems[label] = currRow[k].textContent;
      }
    }
    finalResult.push(currItems);
  }

  let jsonFinal = JSON.stringify(finalResult);
  let target = document.getElementById("output");
  target.value = jsonFinal;
}
 */