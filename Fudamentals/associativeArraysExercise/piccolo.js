function solve(input) {
  let parking = new Set()

  for (let element of input) {
    let car = element.split(",");
    if (car[0] == "IN") {
      parking.add(car[1])
    }else{
        parking.delete(car[1])
    }
  }

  let sorting = Array.from(parking).sort( )
   
   if(sorting.length <= 0){
     console.log(`Parking Lot is Empty`);
   }else{
     for(let element of sorting){
       console.log(element);
     }
   }
  
  
  

  

}
solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']);
