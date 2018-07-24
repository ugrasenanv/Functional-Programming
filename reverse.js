const head = (list) => list[0];
const tail = (list) => [...list.slice(1)];
const construct = (value, list) => [value, ...list];
const concatenate = (list1, list2) => [...list1, ...list2];
const length = (list) => list.length !== 0 ? 1 + length(tail(list)) : 0;
const elementAt = (list, pos) => pos !== 0 ? elementAt(tail(list), pos - 1) : head(list);

const reverse = (list) => list.length !== 0 ? concatenate(reverse(tail(list)), [head(list)]) : [];

console.log(reverse([2, 4, 5]));