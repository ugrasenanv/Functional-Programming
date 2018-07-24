let purchasesList = [
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

const hasCategoryFood = purchase => purchase.category === 'Food';
const getAmount = purchases => purchases.map(purchase => purchase.amount);
const sum = amounts => amounts.reduce((acc, val) => acc + val, 0);
const print = message => console.log(message);

let foodPurchasesList = purchasesList.filter(hasCategoryFood);
let amountsList = getAmount(foodPurchasesList);
let total = sum(amountsList);
print(total);

