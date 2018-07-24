let purchaseList = [
    {
        retailer: 'Town Cinema',
        date: new Date('February 10, 2017'),
        amount: 11.00,
        category: 'Entertainment'
    },
    {
        retailer: `Joe's Restaurant`,
        date: new Date("February 13, 2017"),
        amount: 20.65,
        category: 'Food'
    },
    {
        retailer: 'Video Rental',
        date: new Date("February 16, 2017"),
        amount: 5.95,
        category: 'Entertainment'
    },
    {
        retailer: 'Supermarket',
        date: new Date("February 19, 2017"),
        amount: 50.81,
        category: 'Food'
    },
    {
        retailer: `Joe's Restaurant`,
        date: new Date("February 23 2017"),
        amount: 5.19,
        category: 'Food'
    }
];

console.log('Imperative style');
console.log('----------------');
let total = 0;

for (let i = 0; i < purchaseList.length; i++) {
    if (purchaseList[i].category === 'Food') {
        total += purchaseList[i].amount;
    }
}

console.log(`Total amount of food: $${total}`);
console.log('\n');

const hasCategoryFood = purchase => purchase.category === 'Food';
const getAmount = purchases => purchases.map(purchase => purchase.amount);
const sum = amounts => amounts.reduce((acc, val) => acc + val, 0);

const print = message => console.log(message);

console.log('Functional style');
console.log('-----------------');
console.log(`Total amount of food: $${sum(getAmount(purchaseList.filter(hasCategoryFood)))}`);
// print(sum(getAmount(purchaseList.filter(purchase => purchase.category === 'Food'))));



