import * as stuff from "./fib.js";

let x = stuff.generateFibonacci(10);
let y = stuff.BadSum(1, 2);
console.log(x);
console.log(y);

const person = {
    name: { 
        first: "John",
        last: "Doe"
    }
}


const first = person?.name?.first;
const last = person?.name?.last;

console.log(first, last);