btnAlterar.addEventListener('click', function () {    
    alterar();
    
});

function alterar() {
    const dadosFormulario = new FormData(form);
    fetch("http://localhost:8080/", {
        method: 'PUT',
        body: dadosFormulario
    })
    .then(resposta => resposta.json())
    .then(produto => alterarProduto(produto))
    .catch(erro => console.log("༺🍃☞ 𝓞𝓬𝓸𝓻𝓻𝓮𝓾 𝓾𝓶 𝓮𝓻𝓻𝓸 𝓪𝓸 𝓪𝓵𝓽𝓮𝓻𝓪𝓻 𝓹𝓻𝓸𝓭𝓾𝓽𝓸: ☪ツ " + erro));
}

function alterarProduto(produto){
    var ids = document.getElementsByClassName('col-id');
    for(var i = 0; i < ids.length; i++){  
        if(ids[i].innerText == inputId.value){
            var tr = ids[i].closest('tr');
            tr.querySelector("img").src = "data:img/jpg;base64," + produto.img;
            tr.querySelector(".col-desc").innerText = produto.description;
            tr.querySelector(".col-preco").innerText = produto.preco;
            if(produto.tipo == 1){
                tr.querySelector(".col-tipo").innerText = "Mais Vendidos";
            }else if(produto.tipo == 2){
                tr.querySelector(".col-tipo").innerText = "Lançamentos";
            } 
        }
    }
    form.reset();
}