// singleton(only contructor se hi singleton banta hai)

// object literals 
const mySym = Symbol("key1")


const JsUser = {
    name: "Aadarsh",
    "full name": "Aadarsh Sahu",
    [mySym]: "mykey1",
    age: 18,
    location: "Bhopal",
    email: "aadarsh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "aadarsh@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email = "aadarsh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello js user"); 
}

JsUser.greeting2 = function(){
    console.log(`Hello js user, ${this.name}`); 
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());
