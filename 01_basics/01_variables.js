const accountId =144553
let accountEmail="burhanmalik@google.com"
var accountCity="Islamabad"
let accountState;
accountName="Burhan"

// accountId = 2  //Assignment to constant variable error
console.log(accountId)
accountEmail="no@gmail.com"
accountCity="London"
accountName="Nope"

console.log(accountEmail,accountCity,accountName)
//There is another method of console which is console.table
console.table([accountId,accountEmail,accountCity,accountName,accountState])
//There were scope issues in javascript, There was no concept of block scoping
/* There was issue of scoping specifically block scoping in var variable so , which reduces the uses of var variable */
// There are two type of scope block scope and functional scope
//Assignment
//Problem:
//Write a JavaScript program that declares two variables — length and width — using let, assigns them any numeric values, and calculates the area of the rectangle. Then, print the result.
let length = 5;
let width = 10;

area = length * width;
console.log(area)// So, this is the area of rectangle