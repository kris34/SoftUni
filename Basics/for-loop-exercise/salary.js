function salaryEx(input) {
  let index = 0;
  let tabsCount = Number(input[index]);
  index++;
  let currentSalary = Number(input[index]);
  index++;

  for (let i = 1; i <= tabsCount; i++) {
    let currentTab = input[index];
    index++;

    switch (currentTab) {
      case "Facebook":
        currentSalary -= 150;
        break;
      case "Instagram":
        currentSalary -= 100;
        break;
      case "Reddit":
        currentSalary -= 50;
        break;
    }
    if (currentSalary <= 0) {
      console.log("You have lost your salary.");
      break;
    }
  }

  if (currentSalary > 0) {
    console.log(Math.trunc(currentSalary));
  }
}
salaryEx(["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"]);
