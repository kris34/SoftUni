function solve(string) {
    let list = {};
  
    let array = [];
    array.push(string);
    let splitted = array[0].split(" ");
  
    for (let word of splitted) {
      word = word.toLowerCase();
  
      if (!list.hasOwnProperty(word)) {
        list[word] = 1;
      } else {
        list[word]++;
      }
    }
  
    let entries = Object.entries(list);
  
    let newArr = [];
    for (let element of entries) {
      if (element[1] % 2 == 1) {
        newArr.push(element[0]);
      }
    }
    console.log(newArr.join(" "));
  }
  solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#'	
  );
  