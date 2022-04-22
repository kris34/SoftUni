function party(array) {
  let list = {
    vip: [],
    regular: [],
  };

  while (array[0] !== "PARTY") {
    let guest = array.shift();

    let isVip = guest[0];

    if (isNaN(isVip) == false) {
      list.vip.push(guest);
    }else{
        list.regular.push(guest)
    }
  }

  for(let i = 1; i < array.length;i++){
      
  }
}
party([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);
