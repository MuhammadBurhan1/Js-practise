"use strict" // Treat all JS code as newer version
// let score = "Burhan"
// console.log(typeof score)
// console.log(typeof(score));
// let valueInNumber = Number(score)
// console.log(valueInNumber)
// // This is when we are trying to convert into a number
// // "33"=> 33
// // "33abc"=> NaN
// // null=> 0
// // undefined=> NaN
// let isLoggedIn = false;
// let inNumber = Number(isLoggedIn)
// console.log(typeof inNumber)
// console.log(inNumber)
// //So, here we are trying to convert boolean into number
// //So, when true => 1, false=> 0
// isLoggedIn = ""
// let inBoolean = Boolean(isLoggedIn)
// console.log(inBoolean)
//So, when we try to convert into boolean
//1 => true
//0=> false
//"burhan"=>true
//null=> false
//undefined=> false
//""=> false
// Now let's convert into string
// let number = undefined;
// let stringInNumber = String(number)
// console.log(typeof (stringInNumber))
// console.log(stringInNumber)
// let number = undefined;
// let stringInNumber = String(number)
// console.log(typeof (stringInNumber))
// console.log(stringInNumber)
//********** Operations *************************************************
let value = 3
let negValue = -value
console.log(negValue)
console.log(2+2)
console.log(2-2)
console.log(2/2)
console.log(2%3)
console.log(2**3)
let str1 = "Assalam mu Allikum"
let str2 = " Burhan"
let str3 = str1 + str2 
console.log(str3)
console.log(1 + "2") // 12
console.log("1"+ 2)  // 12
console.log("1"+ "2")// 12
console.log("1"+"2"+2)//122
console.log("1"+2+2) //122
console.log(1+2+"2")// 3+"2"=>32
console.log(+true);//1
console.log(+false);//0
let gameCounter = 100
++gameCounter
//gameCounter++ //Postfix operator 
console.log(gameCounter)
let a= 5;
let b= a++; //Postfix operator
console.log(`${a},${b}`)

let x =2 ;
let y=++x; // Prefix Operator
console.log(`${x},${y}`);

