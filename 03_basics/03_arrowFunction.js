"use strict"// Treat all JS code as newer version
const user ={
    username:"Muhammad Burhan",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username} welcome to the website`)
        console.log(this)
    }
}
// const price=user.price
// console.log(price)
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this)

// function burhan(){
//    let username ="burhan"   
//     console.log(this.username)
// }

// burhan()
// const burhan = function(){
//     let username = "Burhan"
//     console.log(this.username)
// }
// burhan()
// const burhan = ()=>{
//     let username = "Burhan"
//     console.log(this)
// }
// burhan()
// const addTwo=(num1,num2)=> {
//     return num1 + num2 
// }

// console.log(addTwo(5,4))
// const addTwo=(num1,num2)=> num1 + num2 


// console.log(addTwo(5,4))
// const addTwo=(num1,num2)=> (num1 + num2) 


// console.log(addTwo(5,4))
// const addTwo=(num1,num2)=> ({username:"burhan"}) 


// console.log(addTwo(5,4))
// const myArray= [5,7,3,2,4,6];
// myArray.forEach(()=>())