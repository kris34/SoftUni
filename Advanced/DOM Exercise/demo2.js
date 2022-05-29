function solve(text, type) {
    if (type == "Camel Case") {
      text = camel(text);
    }
  
    function camel(string) {
      let arr = string.toLowerCase().split(" ");
  
      let result = [arr[0]];
  
      for (let i = 1; i < arr.length; i++) {
        let word = arr[i];
        word = word.charAt(0).toUpperCase() + word.slice(1);
        result.push(word);
      }
      return result;
    }
    console.log(text.join(""));
  }
solve("this is an example", "Camel Case")  