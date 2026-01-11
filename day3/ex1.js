const basePrice = 20000;   
const taxPercent = 18;

let people = 5;           
let extraPeople = people - 4;

if (extraPeople < 0) {
  extraPeople = 0;
}

let extraCharge = basePrice * 10 / 100 * extraPeople;
let priceAfterExtra = basePrice + extraCharge;

let taxAmount = priceAfterExtra * taxPercent / 100;
let finalAmount = priceAfterExtra + taxAmount;

console.log("Final Amount:", finalAmount);