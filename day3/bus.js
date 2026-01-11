
const busPrice = [5000, 9000, 12000];

let busSeater = 40;     
let traveledKm = 120;
let usedHours = 30;

const baseKm = 100;
const baseHours = 24;


let basePrice;
if (busSeater === 20) basePrice = busPrice[0];
if (busSeater === 40) basePrice = busPrice[1];
if (busSeater === 50) basePrice = busPrice[2];


let extraKm = traveledKm - baseKm;
if (extraKm < 0) extraKm = 0;

let extraHours = usedHours - baseHours;
if (extraHours < 0) extraHours = 0;

let finalAmount =
  basePrice +
  (extraKm * 5) +
  (extraHours * 3);

console.log("Final Amount:", finalAmount);