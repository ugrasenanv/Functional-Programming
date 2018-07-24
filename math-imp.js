

const findReciprocalSqrt = (x) => {
    let isError = false;
    let z = null;

    if (x >= 0) {
        let y = Math.sqrt(x);

        if (y !== 0) {
            z = 1 / y;
        } else {
            isError = true;
        }
    } else {
        isError = true;
    }

    return z;
};

let result = findReciprocalSqrt(4);

if (result) {
    console.log(result);
} else {
    console.log('Error');
}

result = findReciprocalSqrt(-0.0001);

if (result) {
    console.log(result);
} else {
    console.log('Error');
}
