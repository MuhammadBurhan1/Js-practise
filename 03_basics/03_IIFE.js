// IIFE immediately invoked function expression

(function chai(){
    //Named IIFE
    console.log('DB Connected')
})();



((name)=>(
    //Simple IIFE
    console.log(`DB connected Two ${name}` ))
)("burhan")
const random = Math.floor(Math.random() *10) + 1
console.log(random)