const accountId = 143556
let accountEmail = "aadarsh@google.com"
var accountPassword = "12345"
accountCity = "Raipur"
let accountState;
// accountId = 2 // not allowed

accountEmail = "abc@gmail.com"
accountPassword = "22345"
accountCity = "Delhi"

console.log(accountId);

/*
Prefer not to use var
Because of issue in bloke scope and functional scope
*/
console.log({accountId, accountEmail, accountPassword, accountCity, accountState});
