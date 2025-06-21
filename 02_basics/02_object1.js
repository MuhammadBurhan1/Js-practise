// const tinderUser = new Object();
// console.log(tinderUser)// singleton object
const tinderUser = {}
tinderUser.id ="123abc";
tinderUser.name= "Muhammad Burhan";
tinderUser.isLoggedIn = false;
// console.log(tinderUser) 
const regularUser = {
 email:"temp@gmail.com",
 fullname : {
    userfullname: {
      username :"abcd",
      firstname :"Muhammad",
      middlename:"Burhan",
      lastname : "Hussain"


    }
 }
}
// console.log(regularUser.fullname.userfullname.middlename)
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4 :"d"}
// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1 , ...obj2}
// const obj3 = {obj1.concat(obj2)}
// console.log(obj3)
const users =[
    {
        id: 1,
        name:"burhan"
    },
    {
        id:2,
        name:"Shehroz"
    },
    {
        id:3,
        name:"Ahmad"
    },
    {
        id:4,
        name:"Noman"
    }

]
// console.log(users[2].id);
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'))
const array = ["Burhan","Muhammad"];
const newTwo=array.splice(0,1,"drum");
console.log(newTwo)
console.log("A",array)