let purchaseList = [
    {
        retailer: 'Town Cinema',
        date: new Date('February 10, 2017'),
        cost: 11.00,
        category: 'Entertainment'
    },
    {
        retailer: `Joe's Restaurant`,
        date: new Date("February 13, 2017"),
        cost: 20.65,
        category: 'Food'
    },
    {
        retailer: 'Video Rental',
        date: new Date("February 16, 2017"),
        cost: 5.95,
        category: 'Entertainment'
    },
    {
        retailer: 'Supermarket',
        date: new Date("February 19, 2017"),
        cost: 50.81,
        category: 'Food'
    },
    {
        retailer: `Joe's Restaurant`,
        date: new Date("February 23 2017"),
        cost: 5.91,
        category: 'Food'
    }
];

// Imperative style
console.log('Imperative style');
console.log('----------------');
// purchaseList.forEach(purchase => {
//     if (purchase.category === 'Food') {
//         console.log(`${purchase.retailer}: $${purchase.cost}`);
//     }
// });

for (let i = 0; i < purchaseList.length; i++) {
    if (purchaseList[i].category === 'Food') {
        console.log(`${purchaseList[i].retailer}: $${purchaseList[i].cost}`);
    }
}

console.log('\n');

const hasCategoryFood = purchase => purchase.category === 'Food';
const print = purchases => purchases.map(purchase => console.log(`${purchase.retailer}: $${purchase.cost}`));

console.log('Functional style');
console.log('-----------------');
print(purchaseList.filter(hasCategoryFood));
