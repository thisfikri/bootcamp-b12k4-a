function buyNoodle(date, budget) {
    let
        bonus = 1, // bonus mie
        noodlePrice = 2500, // harga mie
        noodleCount = 0, // jumlah mie yang dibeli
        bonusReceived = 0;

    noodleCount = budget / noodlePrice;

    if ((date % 2) != 0) {
        bonusReceived = Math.floor(noodleCount / 3);
    } else if ((date % 2) == 0) {
        bonusReceived = Math.floor(noodleCount / 4);
    }

    if ((date % 5) == 0) {
        if ((bonusReceived % 2) != 0) {
            bonusReceived *= 5;
        } else if ((bonusReceived % 2) == 0) {
            bonusReceived *= 10;
        }
    }

    return noodleCount + bonusReceived;
}

console.log(buyNoodle(25, 50000));
console.log(buyNoodle(25, 100000));
console.log(buyNoodle(16, 40000));
