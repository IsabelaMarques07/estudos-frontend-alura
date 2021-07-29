import { Gerente } from "./Funcionario/Gerente.js"
import { Diretor } from "./Funcionario/Diretor.js"
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"
import { Cliente } from "./Cliente.js";

const diretor = new Diretor("Rodrigo", 10000, 123456789);
const gerente = new Gerente("Ricardo", 5000, 9876543210);

diretor.cadastrarSenha("123456");
gerente.cadastrarSenha("123");


const cliente = new Cliente("Isabela", 12345678900, "1234");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "1234");

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
console.log(diretorEstaLogado);
console.log(gerenteEstaLogado);
console.log(clienteEstaLogado);
console.log(cliente);

