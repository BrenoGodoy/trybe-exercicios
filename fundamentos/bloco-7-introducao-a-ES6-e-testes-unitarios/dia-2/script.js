function criaObject (object, key, value) {
  const newKey = key;
  const newValue = value;
  object[newKey] = newValue;
  return object
}

const objectTest = {
  nacionalidade: 'Brasileiro',
}

console.log(criaObject(objectTest, 'name', 'Breno'));
