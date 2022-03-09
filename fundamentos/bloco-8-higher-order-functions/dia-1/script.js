const acordando = () => 'acordando!!';
const tomarCafe = () => 'Bora tomar café!!';
const partiuDormir = () => 'Partiu dormir!!';

const doingThings = (func) => func();

console.log(doingThings(acordando));
console.log(doingThings(tomarCafe));
console.log(doingThings(partiuDormir));
