function suppliesforSchool(input) {
  let penPack = Number(input[0]);
  let packMarkers = Number(input[1]);
  let detergent = Number(input[2]);
  let discount = Number(input[3]);

  let pricePens = penPack * 5.8;
  let priceMarkers = packMarkers * 7.2;
  let priceDetergent = detergent * 1.2;
  let priceNoDiscount = pricePens + priceMarkers + priceDetergent;
  let discountSum = priceNoDiscount * (discount / 100);
  let finalPrice = priceNoDiscount - discountSum;
  console.log(finalPrice);
}
suppliesforSchool(["2 ", "3 ", "4 ", "25 "]);
