const primeiroProblema = n => {
    let ultimo = 1;
    let penultimo = 0;
    let atual;
    console.log("0");
    if (n > 1) {
        console.log(" 1");
        for (let i = 2; i < n; i++) {
            atual = ultimo + penultimo;
            penultimo = ultimo;
            ultimo = atual;
            console.log(" " + atual);
        }
    }
}

const segundoProblema = (n, m, fig) => {
    let album = [];
    for (let i = 0; i < m; i++) {
        album[fig[i]]++;
    }
    m=0;
    for (let i = 1; i < n; i++) {
        if (album[i] == 0)
            m++;
    }
    console.log(m);
}

const terceiroProblema = numeros => {
    let pares = [];
    let impares = [];
    let numero;
    let quantidadePares = 0;
    let quantidadeImpares = 0;
    for (let i = 0; i < 10; i++) {
        numero = numeros[i];
        if (numero % 2 == 0) {
            pares[quantidadePares] = numero;
            quantidadePares += 1;
        } else {
            impares[quantidadeImpares] = numero;
            quantidadeImpares += 1;
        }
    }
    for (let i = 0; i < quantidadeImpares; i++)
        console.log(pares[i] + " ");
    console.log("\n");
    for (let i = 0; i < quantidadeImpares; i++)
        console.log(impares[i] + " ");
}

module.exports = {
    primeiroProblema,
    segundoProblema,
    terceiroProblema,
};
