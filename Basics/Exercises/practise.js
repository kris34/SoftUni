function practise(input) {
  let groupsCount = Number(input[0]);
  let index = 1;

  let musala = 0;
  let monblan = 0;
  let kilimanjaro = 0;
  let k2 = 0;
  let everest = 0;
  let total = 0;

  for (let i = 1; i <= groupsCount; i++) {
    let countPpl = Number(input[index++]);

    total += countPpl;

    if (countPpl <= 5) {
      musala += countPpl;
    } else if (countPpl >= 6 && countPpl <= 12) {
      monblan += countPpl;
    } else if (countPpl >= 13 && countPpl <= 25) {
      kilimanjaro += countPpl;
    } else if (countPpl >= 26 && countPpl <= 40) {
      k2 += countPpl;
    } else {
      everest += countPpl;
    }
  }

  //Остава само формулата за колко процента са хората от дадените групи - броят на хората делено на тотал умножено по 100.
}
practise(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);
