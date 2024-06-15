// 印出所有小於 n 的質數總和 sumPrime(n)
function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function sumPrime(n) {
    let sum = 0;
    for (let j = 2; j < n; j++) {
        if (isPrime(j)) {
            sum += j;
        }
    }
    return sum;
}

console.log("sumPrime(7)", sumPrime(7));
