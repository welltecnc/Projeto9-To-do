//Declarando as variaveis
let tarefas=[];

//Função que valida o preenchimento do campo caso esteja vazio

function validaCampo()
{
    let valida =false;
    if(document.getElementById("task").value =="") 
    valida =true;
    return valida;
}
//Função que adiciona a tarefa

function adicionarTarefa(){
        //criando a variavel que vai receber as tarefas
    let linhas =document.getElementById("task");

    if(validaCampo()){
        alert("Preencha o campo com a tarefa")
    }else{
        //adicionando as tarefas
        tarefas.push(linhas.value);
        //passando para a proxima linha vazia
        linhas.value="";
        //chamando a função que vai mostrar todas as tarefas
        listarTarefas();
    }
    //volta para o input da tarefa
    document.getElementById("task").focus();
}

//Função Listar tarefas

function listarTarefas(){
    let valor="";
    for(let i=0; i<tarefas.length;i++){
        valor += tarefas[i] +"<br>";
    }
    document.getElementById("lista").innerHTML =valor;
}
//função remover tarefa

function removerTarefa(){
    //pop - metodo que remove a utlima linha adicionada
    tarefas.pop();
    listarTarefas();
}
