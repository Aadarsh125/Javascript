const userEmail = "" // False
// const userEmail = [] // true

// if (userEmail){
//     console.log("Got user email");
// }else{
//     console.log("Dont't have user email");
    
// }

// falsy values

// false, 0, -0, BigInt 0n, "" ,null, undefined, NaN

//truthy values
// "0" , "false", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("array is empty"); 
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalesing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10 // Output: 5
// val1 = null ?? 10 // Output: 10
// val1 = undefined ?? 15 // Output: 15
// val1 = null ?? 10 ?? 20 // Output: 10

// console.log(val1);

// Terniary Oprerator

const IceTeaPrice = 100
IceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");


