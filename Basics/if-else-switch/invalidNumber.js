function number(input) {
  let num = Number(input[0]);
  let isValid = (num >= 100 && num <= 200) || num == 0;
  if (!isValid) {
    console.log("invalid");
  }
}
number(["75"]);
