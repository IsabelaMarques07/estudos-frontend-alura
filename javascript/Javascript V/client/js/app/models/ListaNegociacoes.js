class ListaNegociacoes{
    constructor(){
        this._negociacoes = []
    }
    adiciona(negociacao){
        this._negociacoes.push(negociacao);
    }
    get negociacoes(){
        //Retorna uma cópia da lista, impedindo o usuário de executar push ou alterar o length do array
        return [].concat(this._negociacoes);
    }
}