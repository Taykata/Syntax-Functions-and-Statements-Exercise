function fruit(fruit, weightInGrams, pricePerKilo) {

    let weight = weightInGrams / 1000;
    let money = pricePerKilo * weight;
    
    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);

}

fruit('orange', 2500, 1.80);