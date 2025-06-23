"use strict";// Treat all JS code as newer version
// const userEmail = " null ";
// if(userEmail){
//     console.log("Got user email")
// }
// else
// {
//     console.log("Didnot got user email")
// }

// falsy values   false,0, -0, bigInt 0n, null , undefined,Nan
// console.log(typeof null) // type of NaN is undefined,type of null is object 
//truthy values
// "0","false","null","undefined" // Anything under a string is a truthy value
// const userEmail = ["burhan"];

// if (userEmail.length === 0){
//     console.log("The array is empty")
// }
// else
// {
//     console.log("The array is not empty")
// }

// let  obj1 = {}
// if(Object.keys(obj1).length === 0){
//     console.log("The object is empty")
// }
// else
// {
//     console.log("The object is not empty")
// }
// console.log(Object.keys(obj1))
//nullish Coalescing Operator ?? null , undefined
// let val1 ;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = undefined ?? null 
//  val1 = null ?? undefined
// val1 = null ?? 10 ?? 20
// val1 = null?? undefined?? null 
//  val1 = undefined ?? null ?? null ?? undefined

// console.log(val1)
// Ternary Operator
// condition ? true : false
const icePrice = 20;
icePrice === 20 ? console.log(true):console.log(false)
