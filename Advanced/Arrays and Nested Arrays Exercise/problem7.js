function solve(arr) {
  arr = arr.sort((a, b) => a - b);
let result = []
  while(arr.length != 0){
    let first = arr.shift()
    let last = arr.pop()
    

    result.push(first)
    result.push(last)

  }
  return result
}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
