const accountId = 1443
let accountEmail = "krishna099@gmail.com"

// prefer not to use var
// beacuse of issue in block scope and functional scope
var accountPassword = 1234
accountCity = "jaipur"
 
accountEmail = "parth11@gmail.com"
accountPassword = 2345
accountCity = "mumbai"

// const accountId = 2 NOT ALLOWED

console.log(accountId);
console.table([accountEmail,accountPassword,accountCity,accountId  ])