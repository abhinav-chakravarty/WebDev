const accountId = 144553
let accountEmail = "abh@google.com"
var accountPassword = "1235"
accountCity = "Pune"
let accountState;

// accountId = 2 -> can't change const variables
console.log(accountId);

accountEmail = 'aq@yahoo.com'
accountPassword = '21345'
accountCity = 'Jaipur'

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var - issue in block scope and functional scope
*/
