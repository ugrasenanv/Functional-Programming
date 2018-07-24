const head = (list) => list[0];
const tail = (list) => [...list.slice(1)];
const construct = (value, list) => [value, ...list];
const concatenate = (list1, list2) => [...list1, ...list2];

const length = (list) => list.length !== 0 ? 1 + length(tail(list)) : 0;

// const arr = [5, 7, 3, 6, 21, 9];

// console.log(arr);
// console.log(construct(5, [7, 3, 6, 21, 9]));
// console.log(`arr === construct(5, [7, 3, 6, 21, 9]): ${arr}, ${construct(5, [7, 3, 6, 21, 9])}`);

console.log(length([5, 7, 4]));
// console.log(length(arr));


