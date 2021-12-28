var a = 10; b = 20;

console.log(`a \t: ${a}`);
console.log(`b \t: ${b}`);
console.log(`a == b \t: ${(a == b)}`);
console.log(`a != b \t: ${(a != b)}`);
console.log(`a < b \t: ${(a < b)}`);
console.log(`a > b \t: ${(a > b)}`);
console.log(`a <= b \t: ${(a <= b)}`);
console.log(`a >= b \t: ${(a >= b)}`);

//operator relasional dalam blok pemilihan
if (a < b) {
    console.log('A lebih kecil dari B');
}

//operator relasional dalam blok pengulangan
var i = a
while (i<=b) {
    console.log(`${i}`);
    i += 2
}