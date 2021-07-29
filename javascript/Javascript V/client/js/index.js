//Percorrer os campos para montar a tr

//Pega os inputs e coloca em um array
var campos = [
    document.querySelector("#data"),
    document.querySelector("#quantidade"),
    document.querySelector("#valor"),
]

console.log(campos)

//pega a tabela onde será inserida a linha
var tbody = document.querySelector('table tbody')

//Coloca um ouvidor de eventos para quando o formulário for submetido
document.querySelector(".form").addEventListener('submit', function(event){
    //Impede que a página seja carregada ao submeter o formulário
    event.preventDefault();

    //Cria a tr
   var tr = document.createElement('tr');

   //Cria uma td para cada campo do formulário e insere na tr
   campos.forEach(function(campo){
       var td = document.createElement('td');
       td.textContent = campo.value;
       tr.appendChild(td);
   });

   //Calcula o volume e insere na tr
   var tdVolume = document.createElement('td');
   tdVolume.textContent = campos[1].value * campos[2].value;
   tr.appendChild(tdVolume);

   //Insere a tr na tabela
   tbody.appendChild(tr);

   //Limpa o formulário e dá o foco ao primeiro campo
   campos[0].value = '';
   campos[1].value = 1;
   campos[2].value = 0;
   campos[0].focus();

});