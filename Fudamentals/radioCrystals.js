function crystals(array) {
  let target = Number(array[0]);
  let index = 1;
  let currentCrystal = Number(array[index++]);

  let finalResult = 0;
  let cutCounter = 0;
  let lapCounter = 0;
  let grindCounter = 0;
  let etchCounter = 0;
  let xrayCounter = 0;

  for (let i = 1; i < array.length; i++) {
    console.log(`Processing chunk ${array[i]} microns`);

    currentCrystal = array[i];

    while (currentCrystal !== target) {
      if (cut(currentCrystal) >= target - 1) {
        currentCrystal = cut(currentCrystal);
        cutCounter++;
        if (cut(currentCrystal) < target - 1) {
          console.log(`Cut x${cutCounter}`);
          console.log('Transporting and washing');
          currentCrystal = transport(currentCrystal);
        }
      } else if (lap(currentCrystal) >= target - 1) {
        currentCrystal = lap(currentCrystal);
        lapCounter++;
        if (lap(currentCrystal) < target - 1) {
          console.log(`Lap x${lapCounter}`);
          console.log('Transporting and washing');
          currentCrystal = transport(currentCrystal);
        }
      } else if (grind(currentCrystal) >= target - 1) {
        currentCrystal = grind(currentCrystal);
        grindCounter++;
        if (grind(currentCrystal) < target - 1) {
          console.log(`Grind x${grindCounter}`);
          console.log('Transporting and washing');
          currentCrystal = transport(currentCrystal);
        }
      } else if (etch(currentCrystal) >= target - 1) {
        currentCrystal = etch(currentCrystal);
        etchCounter++;
        if (etch(currentCrystal) < target - 1) {
          console.log(`Etch x${etchCounter}`);
          console.log('Transporting and washing');
          currentCrystal = transport(currentCrystal);
        }
      }
      if (currentCrystal == target - 1) {
        currentCrystal = xray(currentCrystal);
        xrayCounter++;
        if (currentCrystal == target) {
          console.log(`X-ray x${xrayCounter}`);
        }
      }
      finalResult = currentCrystal;
    }
    currentCrystal = 0;
    cutCounter = 0;
    lapCounter = 0;
    grindCounter = 0;
    etchCounter = 0;
    xrayCounter = 0;
    console.log(`Finished crystal ${finalResult} microns`);
  }
  function cut(num) {
    let result = num / 4;
    return result;
  }

  function lap(num) {
    let result = num * 0.8;
    return result;
  }

  function grind(num) {
    let result = num - 20;
    return result;
  }

  function etch(num) {
    let result = num - 2;
    return result;
  }

  function xray(num) {
    let result = num + 1;
    return result;
  }

  function transport(num) {
    let result = Math.floor(num);
    return result;
  }
}
crystals([1375, 50000]);

/* function cut(num) {
  let result = num / 4;
  return result;
}

function lap(num) {
  let result = num * 0.8;
  return result;
}

function grind(num) {
  let result = num - 20;
  return result;
}

function etch(num) {
  let result = num - 2;
  return result;
}

function xray(num) {
  let result = num + 1;
  return result;
}

function transport(num) {
  let result = Math.floor(num);
  return result;
}
 */
