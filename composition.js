// function f(x) {
//     return x + 1;
// }
//
// function g(x) {
//     return x * x;
// }

const f = x => x + 1;
const g = x => x * x;

let result = f(g(2));
console.log(`Result of f(g(2)): ${result}`);

result = g(f(2));
console.log(`Result of g(f(2)): ${result}`);
