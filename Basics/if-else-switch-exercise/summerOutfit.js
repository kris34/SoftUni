function summerOutfits(input) {
  let degrees = Number(input[0]);
  let time = input[1];

  if (degrees >= 10 && degrees <= 18) {
    switch (time) {
      case "Morning":
        let outfit = "Sweatshirt";
        let shoes = "Sneakers";
        console.log(
          `It's ${degrees} degrees, get your ${outfit} and ${shoes}.`
        );
        break;
      case "Afternoon":
        let outfit2 = "Shirt";
        let shoes2 = "Moccasins";
        console.log(
          `It's ${degrees} degrees, get your ${outfit2} and ${shoes2}.`
        );
        break;
      case "Evening":
        let outfit3 = "Shirt";
        let shoes3 = "Moccasins";
        console.log(
          `It's ${degrees} degrees, get your ${outfit3} and ${shoes3}.`
        );
        break;
    }
  } else if (degrees > 18 && degrees <= 24) {
    switch (time) {
      case "Morning":
        let outfit = "Shirt";
        let shoes = "Moccasins";
        console.log(
          `It's ${degrees} degrees, get your ${outfit} and ${shoes}.`
        );
        break;
      case "Afternoon":
        let outfit2 = "T-Shirt";
        let shoes2 = "Sandals";
        console.log(
          `It's ${degrees} degrees, get your ${outfit2} and ${shoes2}.`
        );
        break;
      case "Evening":
        let outfit3 = "Shirt";
        let shoes3 = "Moccasins";
        console.log(
          `It's ${degrees} degrees, get your ${outfit3} and ${shoes3}.`
        );
    }
  } else if (degrees >= 25) {
    switch (time) {
      case "Morning":
        let outfit = "T-Shirt";
        let shoes = "Sandals";
        console.log(
          `It's ${degrees} degrees, get your ${outfit} and ${shoes}.`
        );
        break;
      case "Afternoon":
        let outfit2 = "Swim Suit";
        let shoes2 = "Barefoot";
        console.log(
          `It's ${degrees} degrees, get your ${outfit2} and ${shoes2}.`
        );
        break;
      case "Evening":
        let outfit3 = "Shirt";
        let shoes3 = "Moccasins";
        console.log(
          `It's ${degrees} degrees, get your ${outfit3} and ${shoes3}.`
        );
    }
  }
}
summerOutfits(["28", "Evening"]);
