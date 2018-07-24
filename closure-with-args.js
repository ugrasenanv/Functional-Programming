const makeNewFunction = amount => {
    let count = 0;

    // add amount to count and return the new count value
    return () => count += amount;
};

const incrementA = makeNewFunction(2);

console.log(incrementA());
console.log(incrementA());

const incrementB = makeNewFunction(200);
console.log(incrementB());
console.log(incrementA());
