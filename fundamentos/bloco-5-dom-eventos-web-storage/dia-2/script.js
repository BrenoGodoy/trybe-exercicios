let acessElement = document.getElementById("elementoOndeVoceEsta");
console.log(acessElement);

let paiElement = document.getElementById("elementoOndeVoceEsta").parentNode;
console.log(paiElement);

let filhoDoFilho = document.getElementById("primeiroFilhoDoFilho");

filhoDoFilho.innerText = "Testando se eu lembro ainda :)";

let primeiroFilho = document.getElementById("pai").firstElementChild;

console.log(primeiroFilho);

let previousElement = document.getElementById("elementoOndeVoceEsta").previousElementSibling;

console.log(previousElement);