var readline = require('readline-sync')

var a = parseInt(readline.question('Masukkan Nilai a : '));
var b = parseInt(readline.question('Masukkan Nilai b : '));

console.log(`${a} + ${b} = ${a + b}`);
console.log(`${a} - ${b} = ${a - b}`);
console.log(`${a} * ${b} = ${a * b}`);
console.log(`${a} / ${b} = ${a / b}`);
console.log(`${a} % ${b} = ${a % b}`);
console.log(`${a} ** ${b} = ${a ** b}`);