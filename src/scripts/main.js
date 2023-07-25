// Imports go first
import { makePottery } from "./PotteryWheel.js";
import { firePottery }  from './Kiln.js';


// Make 5 pieces of pottery at the wheel
const piece1 = makePottery("Mug", 1, 3);
const piece2 = makePottery("Platter", 5, 7);
const piece3 = makePottery("Bowl", 2, 4);
const piece4 = makePottery("Vase", 3, 8);
const piece5 = makePottery("Plate", 4, 6);



let mug = makePottery()

const lowTemp = 2100; // Below 2200 degrees
const highTemp = 2300; // Above 2200 degrees

const firedPiece1 = firePottery(piece1, lowTemp);
const firedPiece2 = firePottery(piece2, highTemp);
const firedPiece3 = firePottery(piece3, lowTemp);
const firedPiece4 = firePottery(piece4, highTemp);
const firedPiece5 = firePottery(piece5, lowTemp);

console.log(firedPiece1);
console.log(firedPiece2);
console.log(firedPiece3);
console.log(firedPiece4);
console.log(firedPiece5);
// Fire each piece of pottery in the kiln


// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list



