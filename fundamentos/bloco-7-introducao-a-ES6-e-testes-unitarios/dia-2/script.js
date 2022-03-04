function show(object) {
  const keys = Object.keys(object);
  const values = Object.values(object);
  let show = `Estudante:`
  for (const index in keys) {
    show =`${show} 
    ${keys[index]} Nível: ${values[index]}`
  }
  return show;
}

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

console.log(show(student1));