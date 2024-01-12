function cookingByNumbers(...input) {

    let num = Number(input.shift());
    let command = input.shift();

    while (input.length >= 0) {

        if (command === 'chop') {
            num /= 2;
            console.log(num);
        } else if (command === 'dice') {
            num = Math.sqrt(num);
            console.log(num);
        } else if (command === 'spice') {
            num += 1;
            console.log(num);
        } else if (command === 'bake') {
            num *= 3;
            console.log(num);
        } else if (command === 'fillet') {
            num *= 0.80;
            console.log(num.toFixed(1));
        }

        if (input.length === 0) {
            break;
        }

        command = input.shift();
    }

}

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');