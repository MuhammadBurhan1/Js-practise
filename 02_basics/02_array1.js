"use strict " // treat all JS code as newer version
const marvel_heroes=['thor','batman','flash'];
const dc_heroes = ['superman','flash','spiderman'];
// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)
// console.log(marvel_heroes[3][0])
// concat method: Combines two or more array without modifying the existing array
// const concatenatedHeroes=marvel_heroes.concat(dc_heroes)
// console.log(concatenatedHeroes)
// Now we will use spread operator
const allHeroes= [...marvel_heroes, ...dc_heroes];
// console.log(allHeroes)
const anotherarray =  [1,2,3,[4,5],[6,7,8],[9,10]]
console.log(anotherarray)
const anotherarray1=anotherarray.flat()
console.log(anotherarray1);

console.log(Array.isArray("Burhan"));
// to make any value into array we can use from
console.log(Array.from("Burhan"))
console.log(Array.from({name:"Burhan"}))// Interesting case as he will not be able to access the key-value pair and we have to defined whether to access key or value pair
// We can use the of concept as well because it will return array with new set of elements
// let score1 = 100 ;
// let score2 = 200 ;
// let score3 = 300 ;
// console.log(Array.of(score1,score2,score3));

let obj1 = new Date("2025-06-2")
// console.log(obj1.toLocaleString())
let obj2 =Date.now();
console.log(obj2)
console.log(obj1.getTime());
if (obj2>obj1.getTime()){
    console.log(`obj2 ${obj2} is greater than ${obj1.getTime()} `);
}
else
{
    console.log(`obj1 ${obj1.getTime()} is greater than obj2 ${obj2}`)
}

const array = [];
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));