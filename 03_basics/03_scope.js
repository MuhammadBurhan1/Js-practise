"use strict" //  Treat all JS code as newer version
// var c =300
let a =300
if(true){
let a =10
const b = 20
console.log("INNER", a)
}
// console.log(a)
// console.log(b)
const cricket= {
    name: "cricket"
}
const {name:cric}= cricket
// console.log(cric)
function one (){
    const username = "Muhammad Burhan"
    // console.log(username)
    function two (){
        const website = "youtube"
        console.log(username)
        // console.log(website)
    }
    // console.log(website)
    two()
}
one()
const obj1 ={1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const objassign=Object.assign({},obj1,obj2)
// console.log(objassign)
if (true){
    const username = "MuhammadBurhan"
    if(username==="MuhammadBurhan"){
        const website ="youtube"
        console.log(username);
        console.log(website)
    }
    // console.log(website)
}
// console.log(username)




// +++++++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const resultOne= addOne(5)
console.log(resultOne)
function addOne(num){
return num + 1
}
const addTwo = function (num){          // Function expression
    return num + 2
}
const resultTwo=addTwo(5)
console.log(resultTwo)