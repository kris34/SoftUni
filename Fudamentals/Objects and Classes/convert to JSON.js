function solve(firstName, lastName, hair) {
  let obj = {
    name: firstName,
    lastName: lastName,
    hairColor: hair,
  };

  let json = JSON.stringify(obj)
  console.log(json);
}
solve("George", "Jones", "Brown");
