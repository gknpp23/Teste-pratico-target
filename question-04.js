function descobrirInterruptores() {
    let l1 = false; // Lâmpada 1 inicialmente apagada
    let l2 = false; // Lâmpada 2 inicialmente apagada
    let l3 = false; // Lâmpada 3 inicialmente apagada

    // Primeira ida à sala das lâmpadas
    // Ligar o interruptor 1
    l1 = !l1;

    // Segunda ida à sala das lâmpadas
    // Ligar o interruptor 2 e desligar o interruptor 1
    l2 = !l2;
    l1 = !l1;

    // Mostrar resultados
    console.log("Lâmpada 1:", l1 ? "Acesa" : "Apagada");
    console.log("Lâmpada 2:", l2 ? "Acesa" : "Apagada");
    console.log("Lâmpada 3:", l3 ? "Acesa" : "Apagada");
}

descobrirInterruptores();
