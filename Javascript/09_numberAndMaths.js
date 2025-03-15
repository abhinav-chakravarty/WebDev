const score = 400
console.log(score)
const newScore = new Number(110)
console.log(newScore);

console.log(newScore.toString());

console.log(newScore.toFixed(2));

const otherNum = 23.9822
console.log(otherNum.toPrecision(3))

const num = 1000000
console.log(num.toLocaleString('en-IN'))

// ******** Maths **********

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(14.6));
console.log(Math.ceil(14.6));
console.log(Math.floor(14.6));
console.log(Math.min([14,6,3,1]));
console.log(Math.max([14,6,3,1]));

console.log(Math.random());
console.log((Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor((Math.random() * (max - min + 1) )+ min))