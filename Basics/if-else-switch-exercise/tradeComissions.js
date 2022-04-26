function tradeComissions(input) {
  let city = input[0];
  let volume = Number(input[1]);

  let sumVolume = 0;

  if (city === "Sofia") {
    if (volume >= 0 && volume <= 500) {
      sumVolume = volume * 0.05;
    } else if (volume > 500 && volume <= 1000) {
      sumVolume = volume * 0.07;
    } else if (volume > 1000 && volume <= 10000) {
      sumVolume = volume * 0.08;
    } else {
      sumVolume = volume * 0.12;
    }
  } else if (city === "Varna") {
    if (volume >= 0 && volume <= 500) {
      sumVolume = volume * 0.045;
    } else if (volume > 500 && volume <= 1000) {
      sumVolume = volume * 0.075;
    } else if (volume > 1000 && volume <= 10000) {
      sumVolume = volume * 0.1;
    } else {
      sumVolume = volume * 0.13;
    }
  } else if (city === "Plovdiv") {
    if (volume >= 0 && volume <= 500) {
      sumVolume = volume * 0.055;
    } else if (volume > 500 && volume <= 1000) {
      sumVolume = volume * 0.08;
    } else if (volume > 1000 && volume <= 10000) {
      sumVolume = volume * 0.12;
    } else {
      sumVolume = volume * 0.145;
    }
  }

  if (sumVolume > 0) {
    console.log(sumVolume.toFixed(2));
  } else {
    console.log("error");
  }
}
tradeComissions(["Sofia", "-1500"]);
