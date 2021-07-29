class Mensagem{
    //Caso não seja inserido parâmetro, texto recebe o valor padrão
    constructor(texto=''){
        this._texto = texto;
    }
    get texto(){
        return this._texto;
    }

    set texto(texto){
        this._texto = texto;
    }
}