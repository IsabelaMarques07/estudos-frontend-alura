console.log(`Trabalhando com listas`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

//colocar novo item
listaDeDestinos.push("Curitiba");

//excluir dado
listaDeDestinos.splice(1, 1);

console.log("Destinos possíveis: ");
console.log(listaDeDestinos);
console.log(listaDeDestinos[1]);
