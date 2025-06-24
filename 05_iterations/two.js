"use strict"; // Treat all JS code as newer version
const myObject = {
    js:"Javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift"
}
for (const key in myObject) {
    // console.log(`${key} shortcut is ${myObject[key]}`)
}
const arr = ["cpp", "rb", "javascript", "react", "swift"];
for (const key in arr){
// console.log(arr[key])
}
const maps = new Map();
maps.set("PK","Islamic Republic Of Pakistan")
maps.set("CN","People Liberation of China")
maps.set("Fr","France")
for(const key in maps){
    // console.log(maps[key])
}