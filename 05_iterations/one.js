"use strict"; // Treat all JS code as newer version
// for of 
//["","",""]
//[{},{},{}] array of objects
// const number =[1,2,3,4,5,6,7,8,9,10]
// const two = [1,2,3,4,5,6,7,8,9,10]
// for (const num of number) {
//     // console.log(num);
//     for (const table of two) {
//         // console.log(`the value of ${num} * ${table} = ${num*table}`)
//     }
// }
const number =[1,2,3,4,5,6,7,8,9,10]
const two = [1,2,3,4,5,6,7,8,9,10]
for(let i =0 ;i<=number.length ; i++){
   const element = number[i]
//    console.log(element)
    for(let j=0; j<=two.length; j++){
        const element1= two[j];
        // console.log(element1)
        // console.log(`${i} * ${j} = ${i*j}`)
    }
}
const greeting = "Hello World ";
// console.log(greeting.trim())
// console.log(greeting)

for (const greet of greeting) {
    // console.log(greet);
    if (greet.includes(" ")== true){
        break;
    }
    
}
// Maps
const maps = new Map();
maps.set("PK","Islamic Republic Of Pakistan")
maps.set("CN","People Liberation of China")
maps.set("Fr","France")
// maps.set("PK","Islamic Republic Of Pakistan") , So, duplicate value is not allowed in map.
// console.log(maps);
for (const [key,value] of maps) {
    // console.log(key, ":-" ,value)
}
const games = {
    gameOne: "NFS",
    gameTwo: "CallofDuty"
}
// for (const [game,map]  of games) {
//     // console.log(`${game} and ${map}`)

    
// }
