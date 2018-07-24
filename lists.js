const arr = [1, 2, 3];

const head = (list) => list[0];
const tail = (list) => [...list.slice(1)];
const construct = (value, list) => [value, ...list];
const concatenate = (list1, list2) => [...list1, ...list2];

console.log(head(arr));

console.log(tail(arr));
// console.log(arr);   // doesn't modify arr

console.log(construct(1, [2, 3]));

// Not really part of lists, but useful
const arr2 = [8, 10, 12];

console.log(concatenate(arr, arr2));