const score = 100
console.log(score)
console.log(typeof (score))
const balance = new Number(200.89)
console.log(balance)
console.log(balance.toString().length);
console.log(balance.toFixed(2))
const otherNumber = balance.toPrecision(3)
console.log(otherNumber)
const hundred = 1000000;
console.log(hundred.toLocaleString());
//++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));// ceil will always choose the highest value
console.log(Math.floor(4.9)); // floor will always choose the smallest value
console.log(Math.min(4,3,6,9));//3
console.log(Math.max(1,9,8,6));//9
console.log(Math.random())
console.log(Math.random()*10)
console.log(Math.floor(Math.random()*10))
console.log(Math.floor(Math.random()*10)+ 1)

const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max-min+1))+ min)