
const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const {name, age, nationality} = user;
const {profession, squad, squadInitials} = jobInfos;

const fraseFinal = `Hi my name is ${name}, im ${age} years old and im ${nationality}. I work as a ${profession}, and my squad is ${squadInitials}-${squad}`;

console.log(fraseFinal);