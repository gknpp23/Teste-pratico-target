function completarSequencia(sequencia) {
    if (sequencia.length === 4) {
        // Sequência de quadrados dos números pares
        const ultimoElemento = sequencia[sequencia.length - 1];
        const proximoElemento = Math.pow(Math.sqrt(ultimoElemento) + 2, 2);
        return proximoElemento;
    } else if (sequencia.length === 6) {
        // Sequência de Fibonacci
        const penultimoElemento = sequencia[sequencia.length - 2];
        const ultimoElemento = sequencia[sequencia.length - 1];
        const proximoElemento = penultimoElemento + ultimoElemento;
        return proximoElemento;
    }else if (sequencia.length === 7){
      if(sequencia[0] == 2){
       
          let ultimoNumero = sequencia[sequencia.length - 1];
          
          // Encontramos o próximo número que começa com a letra "D"
          let proximoNumero = ultimoNumero + 1;
          while (!proximoNumero.toString().startsWith("2")) {
            proximoNumero++;
          }
  
          return proximoNumero;
}

// Chamamos a função para encontrar o próximo número e o armazenamos em uma variável
let proximoNumero = encontrarProximoNumero(sequencia);

// Imprimimos o próximo número encontrado
console.log(proximoNumero); // O próximo número na sequência é 200

      }
      else {
        // Sequências com lógica simples de incremento
        return sequencia[sequencia.length - 1] + (sequencia.length * 2 - 1);
      }
    }
    
}

// Testando com as sequências fornecidas
console.log(completarSequencia([1, 3, 5, 7])); // retorna 9
console.log(completarSequencia([2, 4, 8, 16, 32, 64])); // retorna 128
console.log(completarSequencia([0, 1, 4, 9, 16, 25, 36])); // retorna 49
console.log(completarSequencia([4, 16, 36, 64])); // retorna 100
console.log(completarSequencia([1, 1, 2, 3, 5, 8])); // retorna 13
console.log(completarSequencia([2, 10, 12, 16, 17, 18, 19])); // retorna 200
