/*
Ser autenticável significa ter o método autenticar

*/

export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static ehAutenticavel(autenticavel){
        //Verifica se a chave 'autenticar' está no endereço de memória 'autenticável'
        // e se esse autenticavel é do tipo de uma função e não uma propriedade, por exemplo
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function
    }
}