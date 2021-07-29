var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando pacientes...");

    //XMLHttpRequest é o objeto reponsável por fazer requisições web
    var xhr = new XMLHttpRequest();

    //Abre a requisição e diz qual tipo e para onde
    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

    //Envia a requisição
    xhr.send();

    //Escuta se a resposta da requisição já foi carregada e exibe o texto da resposta
    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax");
        if(xhr.status == 200){
            erroAjax.classList.add("invisivel")
            var resposta = xhr.responseText;

            //Transforma o JSON da reposta em um objeto javascript
            var pacientes = JSON.parse(resposta);
    
            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente);
            });
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText)
            erroAjax.classList.remove("invisivel");
        }
        
    })

})