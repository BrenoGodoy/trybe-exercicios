const person = {
  name: 'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const test = {
  name: 'maria',
  age: 23,
}

const clone = Object.assign(person, lastName);

console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
console.log(person); // { name: 'Roberto', lastName: 'Silva' }

Object.assign(clone, test);

console.log(clone);
console.log(person);
console.log(test);