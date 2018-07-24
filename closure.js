const makeNewFunction = () => {
    let count = 0;

    // const f = () => ++count;
    //
    // return f;
    return () => ++count;
};

const incrementA = makeNewFunction();

console.log(incrementA());
console.log(incrementA());

// Create second counter
const incrementB = makeNewFunction();

console.log(incrementB());
console.log(incrementA());

