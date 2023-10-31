fetch('http://localhost:8080/')
.then(resposta => resposta.json())
.then(produtos => preencherTabela(produtos))
.catch(erro => console.log("Ocorreu um ero: " + erro))