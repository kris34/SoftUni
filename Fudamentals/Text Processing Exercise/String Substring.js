function solve(word, text) {
  text = text.toLowerCase().split(" ")
  

  for (let token of text) {
     if(token == word){
         console.log(word);
         return
     }
  }
  console.log(`${word} not found!`);
}
solve('python',
'JavaScript is the best programming language');
