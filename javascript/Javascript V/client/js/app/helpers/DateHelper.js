class DateHelper{

    constructor(){
        throw new Error('DateHelper não pode ser instanciada');
    }

    static dataParaTexto(data){
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`
    }

    static textoParaData(texto){
        //Expressão regular 
        //número de 4 dígitos - número de 2 dígitos - número de 2 dígitos
        if(!/\d{4}-\d{2}-\d{2}/.test(texto)) 
            throw new Error('Deve estar no formato aaaa-mm-dd');
            
        return new Date(...texto.split('-').map((item, indice)=> item - indice % 2));
    }

}