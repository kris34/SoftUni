function towns(datas) {
  let table = {};

  for (let element of datas) {
    let data = element.split(' | ');
    table.town = data[0];
    table.latitude = Number(data[1]).toFixed(2);
    table.longitude = Number(data[2]).toFixed(2);
    console.log(table);
  }
}
towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);
