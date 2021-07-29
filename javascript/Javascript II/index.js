import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 11122233310);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
const conta2 = new ContaCorrente(102, cliente2);

contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.transferir(200, conta2);

console.log(cliente2.cpf);

console.log(ContaCorrente.numeroDeContas);