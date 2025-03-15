// Primitive (7 types)
// String
// Number
// Boolean
// null
// undefined
// Symbol
// BigInt

const id1 = Symbol('123')
const id2 = Symbol('123')
console.log(id1===id2);

const bigNum = 5112481357963331n

// Reference (Non-Primitive)
// Array
// Objects
// Functions

const names = ['Rahul', 'Abhay', 'Harshit']

const obj = {
    name : 'hitesh',
    age : 23
}

const myFunc = function(){
    console.log("Hello World")
}
