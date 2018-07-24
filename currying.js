// Using functions
// function curryAdd(x) {
//     return function (y) {
//         return x + y;
//     }
// }

// Using lambda expressions
// curryAdd() takes a parameter x and returns a function taking a parameter y
// that adds x and y. N.B. The parameter x is a free variable in the closure.
const curryAdd = x => y => x + y;

let result = curryAdd(2)(10);
console.log(result);

result = curryAdd(2)(55);
console.log(result);

result = curryAdd(2)(-3);
console.log(result);

// Partial application of 2
const add2 = (y) => curryAdd(2)(y);

result = add2(37);
console.log(result);
