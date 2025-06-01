'use strict '
//Primitive or Call By Value
// 7 datatypes: String,Number,Boolean,Null,Undefined,Symbol,BigInt
let name ="Burhan"
let number = 1;
let isloggedoff = true;
let outsideTemperature = null
const number1 = Symbol(2)
let bigNumber = BigInt(2n);
console.table([name,number,isloggedoff,outsideTemperature,number1,bigNumber])
//Non-Primitive or Call By Reference
// 3 datatypes: Array,Object,Function

const name1 =['burhan','ahmad','aryan']
console.log(name1[2]);
let myObj = {
    name:'Burhan',
    age : 22,
}
const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof name1 )











