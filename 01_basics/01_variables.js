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
