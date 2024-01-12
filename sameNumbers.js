function sameNumbers(num) {

    let isSame = true;
    let sum = 0;
    let numAsStr = String(num);
    let a = 0;

    for (let i = 0; i < numAsStr.length; i++) {
        if (i > 0 && a != numAsStr[i]) {
            isSame = false;
        }
        a = numAsStr[i];
    }

    for (let i = 0; i < numAsStr.length; i++) {
        sum += Number(numAsStr[i]);
    }

    if (isSame) {
        console.log('true');
    } else {
        console.log('false');
    }

    console.log(sum);

}

sameNumbers(1234);