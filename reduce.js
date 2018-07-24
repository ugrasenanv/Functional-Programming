const arr = [5, 10, 23];

// let sum = arr.reduce((acc, val) => acc - val, 0);
// console.log(sum);
console.log(arr.reduce((acc, val) => acc - val, 0));

// using explicit lambda expression
const minus = (x, y) => x - y;
console.log(arr.reduce(minus, 0));

// reducing from the right
console.log(`reduceRight: ${arr.reduceRight(minus, 0)}`);

