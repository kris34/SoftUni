function solve(arr, start, end) {

    let startIndex = arr.indexOf(start)
    let endIndex = arr.indexOf(end)

    let result = arr.slice(startIndex, endIndex +1)
    return result
}
solve(
    ['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
   'Pot Pie',
   'Smoked Fish Pie');
