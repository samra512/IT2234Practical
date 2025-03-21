//write a boolean function to find a given number is prime

function isPrime(num) {
    if (num < 2){
	   return false;
	}
    for (let i = 2; i <num; i++) {
        if (num % i ==0) {
			return false;
		}
    }
    return true;
}

// Example usage:
console.log(isPrime(7));  // true
