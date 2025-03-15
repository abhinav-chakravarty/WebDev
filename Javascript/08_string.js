const name = 'hitesh'
const count = 50

console.log(name + count + " Value");

// string interpolation
console.log(`Hello my name is ${name} and repo count is ${count}`);

const game = new String("Hit-esh")
console.log(game);

console.log(game[0]);

console.log(game.__proto__);

console.log(game.length);

console.log(game.toUpperCase());

console.log(game.charAt(2));

console.log(game.indexOf('t'));

console.log(game.substring(0,4));

console.log(game.slice(-6, 4))

const str1 = "      hitesh    "
console.log(str1)
console.log(str1.trim());

const url = 'https:/g.com/js%202025'
console.log(url.replace("%20", '-'))

console.log(url.includes('2025'));

console.log(game.split('-'))