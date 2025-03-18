/*
[4,8,3,4,3,2,1,8,4]
find the most frequent element in the array
*/

function findMostFrequent(arr) {
    let frequency = new Map(); // Using Map to store frequencies
    let maxCount = 0;
    let mostFrequentElement = null;

    for (let num of arr) {
        // Update frequency count
        frequency.set(num, (frequency.get(num) || 0) + 1);

        // Update max count and most frequent element
        if (frequency.get(num) > maxCount) {
            maxCount = frequency.get(num);
            mostFrequentElement = num;
        }
    }

    return mostFrequentElement;
}

let arr = [4, 8, 3, 4, 3, 2, 1, 8, 4];
console.log("Most frequent element:", findMostFrequent(arr));
	 