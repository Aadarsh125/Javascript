// Primitive DT

// 7 types : String, Number, Boolean, null, Undefined, Symbol, BigInt  

// const score = 100
// const scoreValue = 100.4

// const isLoggedIn = false
// const outSideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherid = Symbol('123')
// console.log(id === anotherid); // reture value are not same

// const bigNumber = 231561451456464n//BigInt


// Reference (Non Primitive)
// Array, Object, Function

const heros = ["superman", "spiderman", "ironman"]

let myObj = {
    name: "Aadarsh",
    age: 20,
}

// const myFun = function(){
//     console.log("Hello World");
    
// }

// console.log(typeof anotherid);


// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

// console.log(Object.prototype.toString);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap(Non-primitive)

// let myYouTubename = "codewithaadarsh"
// let anotherName = myYouTubename

// anotherName = "chaiorcode"

// console.log(myYouTubename);
// console.log(anotherName);

let userOne = {
    email : "user1@gmail.com",
    upi : "user1@upi"
}

let userTwo = {
    email : "usertwo@gmial.com",
    upi : "usertwo@upi"
}

userTwo = userOne

userTwo.email = "aadarsh@123"

console.log(userOne.email);
console.log(userTwo.email);
