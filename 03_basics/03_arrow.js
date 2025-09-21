const user = {
    username: "aadarsh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage() // Output: aadarsh, welcome to website
// user.username = "sam"
// user.welcomeMessage() //Output: sam, welcome to website

// console.log(this);

// function chai(){
//     let username = "aadarsh"
//     console.log(this.username);
    
// }
// chai()

// const chai = function () {
//     let username = "aadarsh"
//     console.log(this.username); // undefined
    
// }
// chai()

const chai = () => {
    let username = "aadarsh"
    console.log(this.username); // undefined
    
}
// chai()

// const addTwo =(num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,5)) // output: 8

// const addTwo =(num1, num2) => num1 + num2
// console.log(addTwo(3,5)) // output: 8

const addTwo =(num1, num2) => ({username: "aadarsh"})
console.log(addTwo(3,5))