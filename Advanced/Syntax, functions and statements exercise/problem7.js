function solve(number, command1, command2, command3, command4, command5) {
  let num = +number;
  let commandArr = [command1, command2, command3, command4, command5];

  for (let i = 0; i < commandArr.length; i++) {
    if (commandArr[i] == "chop") {
      num = chop(num);
      console.log(num);
    } else if (commandArr[i] == "dice") {
      num = dice(num);
      console.log(num);
    } else if (commandArr[i] == "spice") {
      num = spice(num);
      console.log(num);
    } else if (commandArr[i] == "bake") {
      num = bake(num);
      console.log(num);
    } else {
      num = fillet(num);
      console.log(num);
    }
  }

  function chop(num) {
    return (num = num /= 2);
  }
  function dice(num) {
    return Math.sqrt(num);
  }
  function spice(num) {
    return ++num;
  }
  function bake(num) {
    return (num *= 3);
  }
  function fillet(num) {
    return (num = num - num * 0.2);
  }
}
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
