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

const hasCategoryFood = purchase => purchase.category === 'Food';
const print = purchases => purchases.map(purchase => console.log(`${purchase.retailer}: $${purchase.cost}`));

console.log('Explicitly defined lambda');
console.log('-------------------------');
print(purchaseList.filter(hasCategoryFood));

console.log('\n');

console.log('Anonymous lambda');
console.log('----------------');
print(purchaseList.filter(purchase => purchase.category === 'Food'));



