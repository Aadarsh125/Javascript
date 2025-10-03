//***********   Maps  *********** */
const myNumers = [1,2,3,4,5,6,7,8,9,10]
// Map me return likhna zaruri nhi hota hai
// const newNums = myNumers.map( (num) => num + 10)
// console.log(newNums);

const newNums = myNumers
    .map((num) => num * 10 )
    .map((num) => num + 1) // Chaning = 2 , 3 methods ko sath me chalana ko chaning boolte hn
    .filter( (num) => num >= 40)
console.log(newNums);
