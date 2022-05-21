function solve(arr){

    let sorted = arr.sort((a,b)=> a - b)
    let smallest = []
    for(let i = 0; i < 2;i++){
        smallest.push(sorted[i])
    }

    console.log(smallest.join(" "));

}
solve([30, 15, 50, 5])