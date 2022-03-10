const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const corretorProva = (gabarito, verificar, func) => {
  return func(gabarito,verificar);
}

const corretor = (prova, aluno) => {
  let nota = 0;
  for (let i in prova) {
    if (aluno[i] === prova[i]) {
      nota += 1;
    } else if (aluno[i] === 'N.A') {
        nota = nota;
    } else if (aluno[i] !== prova[i]) {
        nota -= 0.5;
    } else {
      return 'deu algum ruim hein'
    }
  }
  return nota;
}

console.log(corretorProva(RIGHT_ANSWERS, STUDENT_ANSWERS, corretor));
