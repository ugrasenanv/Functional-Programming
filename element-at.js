const head = (list) => list[0];
const tail = (list) => [...list.slice(1)];
const construct = (value, list) => [value, ...list];
const concatenate = (list1, list2) => [...list1, ...list2];

const length = (list) => list.length !== 0 ? 1 + length(tail(list)) : 0;

const elementAt = (list, pos) => pos !== 0 ? elementAt(tail(list), pos - 1) : head(list);

console.log(elementAt([21, 84, 5, 99], 1));