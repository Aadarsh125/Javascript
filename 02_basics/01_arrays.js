// array 

// const arr = [0,1,2,3,4,5,"heros"]// hum JS me srting, number kuch bhi sath me bhi likh sakte hn koe problem nhi aati
const arr = [0,1,2,3,4,5]

const arr2 = new Array(1,2,3,4)
// console.log(arr[1])


// Array methods

// arr.push(6)
// arr.push(7)
// arr.pop()

// arr.unshift(9)// array me aage new numbr add krna
// arr.shift()// starting number hata deta hai
//  console.log(arr.includes(9))// Chech krta hai hai ki vo numbr uske ai ya nhi output true or false me deta hai
//  console.log(arr.indexOf(9));// index batata hai or agar vo numbr nhi hai to -1 output deta hai
//  console.log(arr.indexOf(3))// outpurt 3

const newArr = arr.join()// arr ko string me datatype me covert krta hai pr show noraml number hi krta hai

// console.log(arr);
// console.log(newArr);

// console.log(typeof newArr);

// slice, splice

console.log("A ",arr);

const myn1 = arr.slice(1, 3)
console.log(myn1);
console.log("B ", arr);

const myn2 = arr.splice(1, 3)
console.log("C ",arr);
console.log(myn2);



