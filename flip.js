// function flip(fn) {
//     return function (p, q, r) {
//         return fn(p, r, q)
//     };
// }

// flip( f(p, q, r) ) = f(p, r, q)
// flip : function -> function
const flip = fn => (p, q, r) => fn(p, r, q);

function y(m, x, b) {
    return m * x + b;
}

let result = y(3, 5, 1);
console.log(result);

result = flip(y)(3, 1, 5);
console.log(result);

result = flip(y)(3, 5, 1);
console.log(result);

// For a function f(m, x, b) where m and b should be constant, we
// can flip the last two arguments so that currying can be used.
// function curryFlipY(m) {
//     console.log(`m: ${m}`);
//     return function (b, x) {
//         console.log(`m: ${m}, x: ${x}, b: ${b}`);
//         return flip(y)(m, b, x);
//     };
// }

// Curry the first argument, flip the last two arguments
// const curryFlipY = m => (b, x) => flip(y)(m, b, x);
//
// result = curryFlipY(3)(1, 5);
// console.log(result);
//
// result = curryFlipY(3)(3, 6);
// console.log(result);

// Fully curry the function
const curryFlipY = m => b => x => flip(y)(m, b, x);

result = curryFlipY(3)(1)(5);
console.log(result);

result = curryFlipY(3)(3)(6);
console.log(result);

// To solve the equation for a line, e.g. myLine = 3x + 1
const myLine = x => curryFlipY(3)(1)(x);

console.log(myLine(7));

