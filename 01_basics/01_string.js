const name= "Burhan"
const repoCount= 50

// console.log(name + repoCount + "Value")
// String Interpolation
console.log( `My name is ${name} and my repoCount is ${repoCount}` )

const gameName = new String("muhammad-burhan-hussain")
// console.log(gameName.toUpperCase())
// console.log(gameName[0])
// console.log(gameName.__proto__)
// console.log(typeof gameName)
console.log(gameName.charAt(1));
console.log(gameName.indexOf('h'))
const newString= gameName.substring(0,3);
console.log(newString)
const anotherStuff= gameName.slice(0,4); // but in slice we can give negative number as well
console.log(anotherStuff)
const newStringOne =     "  Burhan    ";
console.log(newStringOne)
console.log(newStringOne.trim());// trim is used to remove white spaces  plus line terminators
const url = "https://www.burhan.com/muhammadburhan%20.com"
console.log(url.replace('%20','-'));// replace method is used to replace one value with another value
console.log(url.includes("cricket"))
console.log(gameName.split("-"))// split function will split the value into array
console.log(gameName.split("-")[1]);

let sentence = " Burhan is going to be an officer inshallah"
console.log(`the character code at which ${sentence.charCodeAt([4])} which is equal to ${sentence[4]}`)
console.log(sentence.blink())
console.log(sentence.bold())
let str1 = "Muhammad";
let str2= "Burhan"
console.log(str1.concat(" ", str2))
console.log(str1.concat([]))
// The String constructor creates string object , whenever the function is used , it returns the primitive value of string
const no = new String ("       Captain - Burhan   ");
console.log(no.indexOf('u'))
console.log(no.trim(""))