// console.log(3>2);
// console.log(2==2);
console.log(null==0);//false
console.log(null>0); // false
console.log(null>=0);// true
// Here , strict equality operator and comparison operator works completely differently .Comparison operator converts null to '0' treating it as a number
console.log(undefined == 0);
console.log(undefined >  0);
console.log(undefined >= 0);

// ===
console.log("2"===2);// Strictly equality operator // false

console.log("2"==2); // Loosely equality operator // true

