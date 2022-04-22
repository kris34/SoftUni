function company(input) {
  let list = {};

  for (let company of input) {
    let [firm, code] = company.split(" -> ");

    if (list.hasOwnProperty(firm) == false) {
      list[firm] = new Set();
    }

    list[firm].add(code);
  }

  let listEntries = Object.entries(list).sort((a, b) =>
    a[0].localeCompare(b[0])
  );
  for (let [firm, code] of listEntries) {
    console.log(firm);
    for (let element of code) {
      console.log(`-- ${element}`);
    }
  }
}
company([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);
