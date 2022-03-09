const sorteio = (aposta, func) => {
  const min = Math.ceil(1);
  const max = Math.floor(5);
  const resultado = Math.floor(Math.random() * (max - min)) + min;
  return testaSorteio(aposta, resultado);
}

const testaSorteio = (number, resultado) => {
  if (number === resultado) {
    return 'parabéns você ganhou!!!!'
  } else {
      return 'Tente Novamente.'
    }
}

console.log(sorteio(4, testaSorteio));
