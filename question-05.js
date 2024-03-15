function inverterString(str) {
    let novaString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        novaString += str[i];
    }
    return novaString;
}


let minhaString = 'Hello, world!';
let stringInvertida = inverterString(minhaString);
console.log(stringInvertida); // Saída: '!dlrow ,olleH'
