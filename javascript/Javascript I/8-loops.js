console.log(`\n Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 20;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Fortaleza";

console.log("\n Destinos possíveis: ");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada;

let contador = 0;
let destinoExiste = false;
while (contador < 3) {
    if (listaDeDestinos[contador] == destino) {
        console.log("Destino existe")
        destinoExiste = true;
        break;
    }
    contador++;
}

console.log("Destino existe? ", destinoExiste);

if (podeComprar && destinoExiste) {
    console.log("Boa viagem");
} else {
    console.log("Desculpe, tivemos um erro");
}

for (let i; i < 3; i++) {
    if (listaDeDestinos[contador] == destino) {
        console.log("Destino existe")
        destinoExiste = true;
        break;
    }
}