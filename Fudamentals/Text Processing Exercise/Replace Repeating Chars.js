function repeatingChars(input){
    let result = input[0]

    for(let i = 1; i < input.length;i++){
        if(input[i] != input[i -1]){
            result += input[i]
        }
    }
       console.log(result);
}
repeatingChars('aaaaabbbbbcdddeeeedssaa')


