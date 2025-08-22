console.log("Problem 1:");
// Problem: Swap two numbers without using a third variable.

let a = window.prompt("Enter The number:");
let b = window.prompt("Enter The number:");

console.log( "a =", a );
console.log( "b =", b );

let c = {
    a : b,
    b : a
};

console.log("Swapped values:");
console.log( "a =", c.a);
console.log( "b =", c.b); 