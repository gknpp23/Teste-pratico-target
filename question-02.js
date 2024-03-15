function verificaFibonacci(numero) {
    let a = 0;
    let b = 1;
    let c;

    if (numero === a || numero === b) {
        console.log(`${numero} pertence à sequência de Fibonacci.`);
        return;
    }

    while (true) {
        c = a + b;
        if (c === numero) {
            console.log(`${numero} pertence à sequência de Fibonacci.`);
            return;
        } else if (c > numero) {
            console.log(`${numero} não pertence à sequência de Fibonacci.`);
            return;
        }
        a = b;
        b = c;
    }
}
