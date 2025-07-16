// Dates 

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2022, 0, 21)
// let myCreatedDate = new Date(2022, 0, 21, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(Math.floor(Date.now()/1000));// Seconds me convert krna or sath hi sath point value hatane ke liya floor ka use krna

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+ 1);
// console.log(newDate.getDay());

// `${newData.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday: "long",
    
})
console.log(newDate);
