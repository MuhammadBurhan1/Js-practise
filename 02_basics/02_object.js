"use strict"
// Singleton (when we create object with the help of constructor it is singleton)

// Object literals
const sym1 = Symbol("key1");
const user1={
name:"Muhammad Burhan",
"full name": "Muhammad Burhan Hussain",
city:"Islamabad",
email:"burhanmalik813@gmail.com",
isLoggedIn:false,
loginDays:["Monday","Saturday"],
[sym1]: "mykey1",



}
console.log(user1);
console.log(user1.email)
console.log(user1["full name"])
console.log(typeof  user1[sym1])
console.log(user1.email="burhanmalik@google.com")
// Object.freeze(user1);
user1.email="burhan@microsoft.com"
console.log(user1)
user1.greeting = function(){
    console.log("Hi, how r u")
}