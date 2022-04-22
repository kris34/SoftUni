function minerTask(input) {
  let result = {};

  for (let i = 0; i < input.length; i += 2) {
    let resource = input[i];
    let quant = Number(input[i + 1]);

    if (!result.hasOwnProperty(resource)) {
      result[resource] = 0
    }
    result[resource] += quant
  }

  for(let element in result){
      console.log(`${element} -> ${result[element]}`);
  }
}
minerTask(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
