"use strict " // Treat all JS code as newer version

for ( i = 0 ; i <= 10; i++ ){
    const element = i ;
    if(i==5){
        // console.log("5 is the best number")

    }
    // console.log(element)

}

for (let i=1 ; i < 10; i++){
    // console.log(`Inner loop is ${i}`)
    for(let j=1;j<10;j++){
// console.log(`Outer loop is ${j} and Inner loop is ${i}`)
    // console.log(`${i} * ${j} = ${i*j}`)
    }
}

let myArray=["Burhan","Ahmad","Abdul"];
// console.log(myArray.length)
for (let i = 0 ;i<myArray.length ; i++){
    // console.log(myArray[i])
    const element  = myArray[i];
    if (myArray[i].length){
        // console.log(element)
    }
}
// const number  =[1,2,3,4,5,6,7,8,9,10]
// for (let i=0; i<number.length; i++){
// //     for (let j=1;j<10;j++){
// // console.log(`${i} `)
// //     }
// const multiplication = number[i] 
// console.log(`${i}*${multiplication} =${i*multiplication} `)
// }

// for (let i=2; i<3;i++){
//     console.log(`The inner Loop is: ${i}`)
   
//    for (let j=1;j<=10;j++){
//     console.log(`so , the multiplication of ${i}*${j}= ${i*j}`)
      
//    }   
// }
for (index=1; index<=20 ;  index++){
    if(index===5){
        console.log("Number Detected")
      continue;
    }
    console.log(`value of array is : ${index}`)
}