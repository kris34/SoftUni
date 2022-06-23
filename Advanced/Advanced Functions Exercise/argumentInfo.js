function solve() {
  let data = Array.from(arguments);
  let collection = {};
  for (let param of data) {
    let type = typeof param;

    console.log(`${type}: ${param}`);

    if (!collection.hasOwnProperty(type)) {
      collection[type] = 0;
    }
    collection[type]++;
  }

  let sortedArr = Object.entries(collection).sort((a,b) => b[1] - a[1])
  
  for(let [type,count] of sortedArr){
    console.log(`${type} = ${count}`);

  }
  
}
solve("kris", "cat", 42, function () {
  console.log("Hello world!");
});
