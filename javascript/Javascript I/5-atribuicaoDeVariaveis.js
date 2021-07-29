console.log("Atribuição de variáveis");

//const idade = 18;
let primeiroNome = "Isabela"
const sobrenome = "Marques"


console.log(primeiroNome + " " + sobrenome);
//Ou
//console.log(nome, sobrenome);

//Interpolação
console.log(`Meu nome é ${primeiroNome} ${sobrenome}`);

//Não é uma boa prática
//Melhor seria se criasse uma nova variável como 'nomeCompleto', por exemplo
//nome = primeiroNome + sobrenome;

let contador = 0;
contador = contador + 1;

const nomeCompleto = primeiroNome + sobrenome;
console.log(nomeCompleto);

let idade; // declarando a variável
idade = 18; // atribuindo valor
//Quando é constante, é preciso que se faça tudo em uma única linha

idade = idade +1;
console.log(idade);
