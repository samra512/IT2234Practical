function maxNumber(num) {
    if (num < 10) return num; // Ensures a minimum of 2 digits

    let digits = num.toString().split('');
    digits.sort((a, b) => b - a); // Sort digits in descending order

    return parseInt(digits.join(''), 10);
}

// Example Test Cases
console.log(maxNumber(215));  // 521
console.log(maxNumber(1093)); // 9310
console.log(maxNumber(540));  // 540
