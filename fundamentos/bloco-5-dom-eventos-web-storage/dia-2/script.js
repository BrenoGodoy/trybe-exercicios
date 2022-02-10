let pai = document.getElementById("pai");
let brotherElement = document.createElement("section");
brotherElement.innerText = "Acho que agora funfa";
pai.appendChild(brotherElement);

// <-------------------------------------------------------------->

let acessElement = document.getElementById("elementoOndeVoceEsta");
console.log(acessElement);

let filhoElementOndeVoceEsta = document.createElement("section");
filhoElementOndeVoceEsta.innerText = "QUE VIAGEM!";
acessElement.appendChild(filhoElementOndeVoceEsta);

// <-------------------------------------------------------------->

let paiElement = document.getElementById("elementoOndeVoceEsta").parentNode;
console.log(paiElement);

// <-------------------------------------------------------------->

let filhoDoFilho = document.getElementById("primeiroFilhoDoFilho");

filhoDoFilho.innerText = "Testando se eu lembro ainda :)";

let maisUmFilhoMeuDeus = document.createElement("section");
maisUmFilhoMeuDeus.innerText = "Maneiro isso tá?";
filhoDoFilho.appendChild(maisUmFilhoMeuDeus);
// <-------------------------------------------------------------->

let primeiroFilho = document.getElementById("pai").firstElementChild;

console.log(primeiroFilho);

// <-------------------------------------------------------------->

let previousElement = document.getElementById("elementoOndeVoceEsta").previousElementSibling;

console.log(previousElement);

// <-------------------------------------------------------------->

let acessandoTerceiroFilho = maisUmFilhoMeuDeus.nextSibling.nextSibling.nextSibling;

console.log(acessandoTerceiroFilho)
