function solve(arr) {
  let result = [];
  let num = 1;

  while (arr.length != 0) {
    let command = arr.shift();
    if (command == "add") {
      result.push(num);
    } else {
      result.pop(num);
    }
    num++;
  }
  if(result.length == 0){
      console.log("Empty");
  }else{
      result.forEach(el => console.log(el))
  }
}
solve(['add', 
'add', 
'remove', 
'add', 
'add']);
