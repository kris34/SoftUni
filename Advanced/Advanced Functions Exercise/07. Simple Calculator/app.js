function calculator() {
  let f1 = null;
  let f2 = null;
  let f3 = null;

  return {
    init(selector, selector2, resultSelector) {
      f1 = document.querySelector(selector);
      f2 = document.querySelector(selector2);
      f3 = document.querySelector(resultSelector);
    },
    add() {
      f3.value = Number(f1.value) + Number(f2.value);
    },
    subtract() {
      f3.value = Number(f1.value) - Number(f2.value);
    },
  };

}

