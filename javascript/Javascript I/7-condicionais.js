console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 20;
const estaAcompanhada = true;
console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Venda realizada")
//     listaDeDestinos.splice(1, 1);
// } else if (estaAcompanhada) {
//     console.log("Comprador acompanhado. Venda realizada")
//     listaDeDestinos.splice(1, 1);
// } else {
//     console.log("Comprador não é maior de idade. Venda não realizada!");
// }

const temPassagemComprada = true;
if (idadeComprador >= 18 || estaAcompanhada) {
    console.log("Venda realizada")
    listaDeDestinos.splice(1, 1);
} else {
    console.log("Comprador não é maior de idade. Venda não realizada!");
}

console.log("Embarque \n");
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viagem");
}else{
    console.log("Você não pode embarcar")
}


console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

