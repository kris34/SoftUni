function repainting(input) {
  let naylon = Number(input[0]);
  let paint = Number(input[1]);
  let thinner = Number(input[2]);
  let hoursNeeded = Number(input[3]);

  let naylonNeeded = naylon + 2;
  let paintNeeded = paint * 1.1;
  let price = naylonNeeded * 1.5 + paintNeeded * 14.5 + thinner * 5 + 0.4;

  let hoursPrice = price * 0.3;
  let hoursTotalPrice = hoursNeeded * hoursPrice;
  let totalPrice = price + hoursTotalPrice;
  console.log(totalPrice);
}
repainting(["10 ", "11 ", "4 ", "8 "]);
