function solve(data, criteria) {
  let paresedData = JSON.parse(data);

  let [key, value] = criteria.split("-");

  let filtered = paresedData.filter((p) => p[key] == value);

  for (let i = 0; i < filtered.length; i++) {
    console.log(`${i}. ${filtered[i].first_name} - ${filtered[i].email}`);
  }
}
solve(
  `[{
        "id": "1",
        "first_name": "Kaylee",
        "last_name": "Johnson",
        "email": "k0@cnn.com",
        "gender": "Female"
      }, {
        "id": "2",
        "first_name": "Kizzee",
        "last_name": "Johnson",
        "email": "kjost1@forbes.com",
        "gender": "Female"
      }, {
        "id": "3",
        "first_name": "Evanne",
        "last_name": "Maldin",
        "email": "emaldin2@hostgator.com",
        "gender": "Male"
      }, {
        "id": "4",
        "first_name": "Evanne",
        "last_name": "Johnson",
        "email": "ev2@hostgator.com",
        "gender": "Male"
      }]`,
  "last_name-Johnson"
);
