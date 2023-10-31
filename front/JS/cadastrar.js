document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();
    
    if (!fica_em_alerta()){
        const dadosFormulario = new FormData(this);
        fetch("http://localhost:8080/", {
            method: "POST",
            body: dadosFormulario
        })
        .then(resposta => resposta.json())
        .then(produto => inserirProduto(produto))
        .catch(erro => console.log("Ocorreu um erro ao cadastrar produto: " + erro));
    };
    form.reset();
});