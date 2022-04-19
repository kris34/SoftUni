function loadingBar(num) {
  let bar = "";

  for (let i = 1; i < 100; i += 10) {
    if (i > num) {
      bar += ".";
    } else {
      bar += "%";
    }
  }

  if (num === 100) {
    console.log("100% Complete!");
    console.log("[%%%%%%%%%%]");
  } else {
    console.log(`${num}% [${bar}]`);
    console.log("Still loading...");
  }
}
loadingBar(10);
