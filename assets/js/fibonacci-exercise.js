function fibonacci(x) {
    let fibonacciNumber = [0, 1];
    for (let i = 2; i <= x; i++) {
        fibonacciNumber[i] = fibonacciNumber[i - 1] + fibonacciNumber[i - 2];
    }
    return fibonacciNumber[x];
}

console.log(fibonacci(9));


// solution II
let fibonacciSolution = [0, 1];

for (let i = 2; i <= 10; i++) {
    fibonacciSolution[i] = fibonacciSolution[i - 1] + fibonacciSolution[i - 2];
}
console.log(fibonacciSolution[9]);

