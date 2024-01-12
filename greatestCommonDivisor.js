function greatestCommonDivisor(a, b) {

    let aDivisors = [];
    let bDivisors = [];
    let finalNums = [];

    for (let i = 1; i <= a; i++) {
        if (a % i === 0) {
            aDivisors.push(i);
        }
    }

    for (let i = 1; i <= b; i++) {
        if (b % i === 0) {
            bDivisors.push(i);
        }
    }

    for (let num of aDivisors) {
        if (bDivisors.includes(num)) {
            finalNums.push(num);
        }
    }

    for (let num of bDivisors) {
        if (aDivisors.includes(num)) {
            finalNums.push(num);
        }
    }

    console.log(Math.max(...finalNums));

}

greatestCommonDivisor(2154, 458);