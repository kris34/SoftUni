function basketballEquipment(input) {
  let tax = Number(input[0]);

  let sneakersPrice = tax * 0.6;
  let clothes = sneakersPrice - sneakersPrice * 0.2;
  let ball = clothes / 4;
  let accessories = ball / 5;
  let totalPrice = sneakersPrice + clothes + ball + accessories + tax;

  console.log(totalPrice);
}
basketballEquipment([365]);
