'use strict'

function cubeSum(numOne, numTwo) {
    if (numOne === numTwo) return 0;

    let res = 0;

    const max = Math.max(numOne, numTwo);
    const min = Math.min(numOne, numTwo);

    for (let i = min + 1; i <= max; i++) {
        res = res + Math.pow(i, 3);
    }

    return res;
}
