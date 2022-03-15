// Faça uma lista com as suas frutas favoritas
const specialFruit = ['pêssego', 'manga', 'morango'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite condensado', 'granola', 'creme de leite com açucar'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional]; //spread operator
};

console.log(fruitSalad(specialFruit, additionalItens));
