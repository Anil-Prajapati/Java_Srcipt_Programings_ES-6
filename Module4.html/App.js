import { add, sub, mul } from "./math";
let a = +prompt('Enter fast the Number..');
let b = +prompt('Enter second the Number..');

console.log(`addition of the function one ${a} &  ${b}=${add(a,b)}`)
console.log(`substraction of the function two  ${a} &  ${b}=${sub(a,b)}`)
console.log(`multiplication of the function third ${a} &  ${b}=${mul(a,b)}`)