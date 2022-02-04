// Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.
let arrayPrimos = [];
maior = 0;

for (let i = 0; i < 50; i += 1) {
    let numeroDeDivisoes = 0;
    for (let i2 = 0; i2 < 50; i2 += 1) {
        if (i%i2 == 0) {
            numeroDeDivisoes += 1;
        }
    }
    if (numeroDeDivisoes == 2) {
        arrayPrimos.push(i);
    }
}

for (let i = 0; i < arrayPrimos.length; i+= 1) {
    if (arrayPrimos[i] > maior) {
        maior = arrayPrimos[i]
    }
}

console.log(maior)