function getMaxPurchaseAmount(budget, keyboardPrices, mousePrices) {
    let maxAmount = -1;

    for (let keyboard of keyboardPrices) {
        for (let mouse of mousePrices) {
            let total = keyboard + mouse;
            if (total <= budget && total > maxAmount) {
                maxAmount = total;
            }
        }
    }

    return maxAmount;
}

// Example Test Cases
console.log(getMaxPurchaseAmount(60, [40, 50, 60], [5, 8, 12])); // 58
console.log(getMaxPurchaseAmount(10, [3, 1], [5, 2, 8])); // 9
console.log(getMaxPurchaseAmount(20, [30, 15], [8, 10, 6])); // -1
