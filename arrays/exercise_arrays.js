// Place the magnets in the correct order
var products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
var hasBubbleGum = [false, false, false, true];
var i = 0;

while (i < hasBubbleGum.length) {
  if (hasBubbleGum[i]) {
    console.log(products[i] + " contains bubble gum");
  }
  i = i + 1;
}
// Console JS: Bubblegum contains bubble gum

// Cycle for
var products = ["Choo Choo Chocolate", "Isy Mint", "Cake Batter", "Bubblegum"];
var hasBubbleGum = [false, false, false, true];
for (var i = 0; i < hasBubbleGum.length; i = i + 1) {
  if (hasBubbleGum[i]) {
    console.log(products[i] + "contains bubble gum");
  }
}
