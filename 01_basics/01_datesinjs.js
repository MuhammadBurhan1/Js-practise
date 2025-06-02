//Dates
// let myDate = new Date()
// consol;e.log(myDate)
// console.log(myDate.toString());
// console.log(myDate.toDateString())// To actually get Day ,Month , Day , Year  u can use todatestring
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleTimeString())// To actually get the time in utc u can use tolocalestring
// console.log(myDate.toLocaleString())
// console.log(typeof (myDate));
// let myCreatedDate = new Date(2025,5,2);
// let myCreatedDate = new Date(2025,5,2,5,3)
let myCreatedDate = new Date("2025-06-2")
console.log(myCreatedDate.toString())
let Date1 = Date.now();
console.log(Date1);
console.log(myCreatedDate.getTime());
if (myCreatedDate.getTime()>Date1){
    console.log(`MycreatedDate wins ${myCreatedDate.getHours()}`)
}
else {
    console.log(`Date1 wins ${Date1}`)
}
// To actually convert millisecond into second we divide the value by 1000
console.log(Math.floor(Date.now()/1000));//Here we have converted millisecond into second

let newDate = new Date();
console.log(newDate.toUTCString());
console.log(newDate.getMonth());
console.log(newDate.getDay()+1);
console.log(newDate.toLocaleString());
let obj=newDate.toLocaleString('default',{
    weekday:"long"
}
)
console.log(obj)