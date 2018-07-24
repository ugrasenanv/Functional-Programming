// function expression
// let hasCategoryFood = function (purchase) {
//     return purchase.category === 'Food';
// };

// lambda expression
const hasCategoryFood = purchase => purchase.category === 'Food';

let firstPurchase = {
    retailer: 'Town Cinema',
    date: new Date('February 10, 2017'),
    cost: 11.00,
    category: 'Entertainment'
};

console.log(hasCategoryFood(firstPurchase));

// anonymous lambda expression replaces explicitly defined lambda expression above
console.log((purchase => purchase.category === 'Food')(firstPurchase));

// composition of lambda expressions
const print = message => console.log(message);

print((purchase => purchase.category === 'Food')(firstPurchase));