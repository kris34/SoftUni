function solve(input, currentCase) {
  input = document.getElementById("text").value;
  currentCase = document.getElementById("naming-convention").value;

  if (currentCase == "Camel Case") {
    document.getElementById("result").textContent = camel(input);
  } else if (currentCase == "Pascal Case") {
    document.getElementById("result").textContent = pascal(input);
  }else{
    document.getElementById("result").textContent = "Error!"
  }

  function camel(string) {
    let arr = string.toLowerCase().split(" ");

    let result = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
      let word = arr[i];
      word = word.charAt(0).toUpperCase() + word.slice(1);
      result.push(word);
    }
    return result.join("");
  }

  function pascal(string) {
    let arr = string.toLowerCase().split(" ");

    let result = [];

    for (let i = 0; i < arr.length; i++) {
      let word = arr[i];
      word = word.charAt(0).toUpperCase() + word.slice(1);
      result.push(word);
    }
    return result.join("");
  }


}
