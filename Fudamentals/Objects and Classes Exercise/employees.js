function employees(employees) {
  let list = {};

  for (let element of employees) {
    let employee = element.split(',');
    list.name = element;
    list.personalNumber = element.length;
    console.log(
      `Name: ${list.name} -- Personal Number: ${list.personalNumber}`
    );
  }
}
employees([
  'Silas Butler',
  'Adnaan Buckley',
  'Juan Peterson',
  'Brendan Villarreal',
]);
