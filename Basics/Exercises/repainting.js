function repainging(input) {
  let paint = Number(input[0]);
  let wallpaper = Number(input[1]);
  let glove = Number(input[2]);
  let brush = Number(input[3]);

  let totalPaint = paint * 21.5;

  let totalWallpapers = wallpaper * 5.2;
  let gloves = Math.ceil(wallpaper * 0.35);
  let brushes = Math.floor(paint * 0.48);
  let priceBrushes = brushes * brush;
  let priceGloves = gloves * glove;
  let totalPrice = totalPaint + totalWallpapers + priceBrushes + priceGloves;
  let delivery = totalPrice / 15;
  console.log(`This delivery will cost ${delivery.toFixed(2)} lv.`);
}
repainging(["10", "8", "2.2", "5"]);
