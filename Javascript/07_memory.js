// Stack (used in Primitive Datatype)

let myName = "Akshay"
let anotherName = myName

anotherName = "Abhay"
console.log(myName);
console.log(anotherName);


// Heap (used in Non-Primitive Datatype)
let user = {
    email : "user@gmail.com",
    upi : "user@ybl"
}

let userCopy = user

userCopy.email = "usercopy@gmail.com",

console.log(user);
console.log(userCopy);