function solve(arr, command) {

     return command == "asc" ? arr.sort((a,b) => a - b ) : arr.sort( (a,b) => b - a)
    
}
solve([14, 7, 17, 6, 8], "desc");
