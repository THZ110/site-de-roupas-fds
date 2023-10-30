let btnterabyte = document.getElementById("pumpstore");

let inputId = document.getElementById("id");
let inputImg = document.getElementById("img");
let inputNome = document.getElementById("nome");
let inputDesc = document.getElementById("descricao");
let inputPreco = document.getElementById("preco");
let inputMais = document.getElementById("masvendidos");
let inputLancamentos = document.getElementById("lancamentos");

let form = document.querySelector("form");

let btnCadastrar = document.getElementById("cadastrar");
let btnAlterar = document.getElementById("alterar");
let btnRemover = document.getElementById("remover");
let btnCancelar = document.getElementById("cancelar");

let hidden = true;

let local = "http://localhost:8080/"

btnterabyte.addEventListener('click', function(){
    window.location.href = "http://127.0.0.1:5500/front/index.html";
});