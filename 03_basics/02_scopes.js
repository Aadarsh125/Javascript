// var c = 300

// if (true) {
//     let a = 10
//     const b = 20 
//      c = 30 // avoide scope
// }

// console.log(a);
// console.log(b);
// console.log(c);

let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ",a);
}
// console.log(a);


function one(){
    const username = 'aadarsh'

    function two(){
        const website = 'youtube'
        // console.log(username);
        
    }
    // console.log(website); // shows error
    two()
    
}
// one()

if (true) {
    const username = 'aadarsh'
    if (username === 'aadarsh') {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); // show's error becaue here scope is only lines 38 to 42 
}
// console.log(username); // show's error becaue usernmae scope is not present here

// +++++++++++++ intersting +++++++++++++++++

addone(5) // no error
function addone(num){
    return num + 1
}


addTwo(7) // ERROR , because humne ise variable me store karaya hai
const addTwo = function(num){
    return num + 2
}
