//Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .

n = 5
quad = "";
trian = "";

for (let i = 0; i < n; i += 1) {
    quad = quad + "*";
}

for (let i = 0; i < n; i += 1) {
    console.log(quad);
}

//Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

for (let i = 0; i < n; i += 1) {
    trian = trian + "*";
    console.log(trian)
}



