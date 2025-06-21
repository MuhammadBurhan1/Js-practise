"use strict"
// console.log("B");
// console.log("u");
// console.log("r");
// console.log("h");
// console.log("a");
// console.log("n");

function sayMyName(){
console.log("B");
console.log("u");
console.log("r");
console.log("h");
console.log("a");
console.log("n"); 
}
// sayMyName(); // sayMyName is function reference and () is execution
// sayMyName();
// sayMyName();
// sayMyName();
// sayMyName();
// sayMyName();
// Write function to add two numbers

function addTwoNumbers(a,b,sum){
// sum = 0; 
sum = a + b;
return sum 

}

const result = addTwoNumbers(2,3);
// console.log(result)

function loginUserMessage(username = "sam"){
    if(!username){                // Not operator , it will turn true into false value and false into true value
        console.log("Please enter ur username")
        return 
    }
    else {
    
    return `${username} just logged in`
    }
}

const login=loginUserMessage("muhammad Burhan");
// console.log(login)
//console.log(login.trim(""))// trim is used to remove white spaces

function calculateCartPrice(val1,val2,...num1){
    // console.log( num1);
    const array = [val1,val2,...num1]
    return array
    
}

// console.log(calculateCartPrice(200,400,600,2000))
const user ={
    username:"Muhammad Burhan",
    price :9000,
}

function handleObject(anyObj){
   console.log(`username is ${anyObj.username} and price is ${anyObj.price}`) 
}
// handleObject(user);
// handleObject(
//     {
//         username:"Muhammad Burhan",
//         price: 9000,
//     }
// )
const newArray = [200,400,600,900]
function returnSecondValue(getArray){
    return getArray[1]

}
// const result1= returnSecondValue(newArray)
// console.log(result1)
console.log(returnSecondValue([200,400,600,1000]))