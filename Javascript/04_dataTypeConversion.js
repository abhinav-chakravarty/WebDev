let score = "22"
let valueInNumber = Number(score)
console.table([valueInNumber, typeof valueInNumber])

let score1 = "22a"
let valueInNumber1 = Number(score1)
console.table([valueInNumber1, typeof valueInNumber1])

let score2 = null
let valueInNumber2 = Number(score2)
console.table([valueInNumber2, typeof valueInNumber2])

let score3 = undefined
let valueInNumber3 = Number(score3)
console.table([valueInNumber3, typeof valueInNumber3])

let isLoggedIn = 1
let boolIsLoggedIn = Boolean(isLoggedIn)
console.table([boolIsLoggedIn, typeof boolIsLoggedIn])

let num = 1
let strNum = String(num)
console.log(typeof strNum)

// *********************** Operations ************************
let value = 3
let negValue = -value

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2**2);
console.log(2%2);

let str1 = 'Hello '
let str2 = 'Hitesh'

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2)
console.log(1 + "2");
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")

console.log(true);
console.log(+true)
console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 5

let count = 100
++count
console.log(count);
