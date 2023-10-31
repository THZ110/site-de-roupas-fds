function preencherTabela(produtos) {
    produtos.forEach(produto => {
        inserirProduto(produto)
    });
};

function inserirProduto(produto) {
    var novalinha = document.createElement('tr');
    var colId = document.createElement('td');
    var colImg = document.createElement('td');
    var colNome = document.createElement('td');
    var colDesc = document.createElement('td');
    var colPreco = document.createElement('td');
    var ColTipo = document.createElement('td');
    var colSelect = document.createElement('td');

    colId.classList.add('col-id');
    colId.innerText = produto.id;

    var img = document.createElement('img');
    img.src = "data:img/jpg;base64," + produto.img;
    // img.alt = produto.img;
    colImg.classList.add('col-img');
    colImg.appendChild(img);
    
    colImg.classList.add('col-nome');
    colImg.appendChild(nome);

    colDesc.classList.add('col-desc')
    colDesc.innerText = produto.descricao;

    colPreco.classList.add('col-preco')
    colPreco.innerText = produto.preco;

    ColTipo.classList.add('col-tipo')
    if(produto.tipo === 1){
        ColTipo.innerText = "Mais Vendidos";
    }else if(produto.tipo === 2){
        ColTipo.innerText = "Lançamentos";
    }

    var btnSelect = document.createElement('button');
    btnSelect.classList.add("btn", "btn-success");
    btnSelect.innerText = "Selecionar";

    colSelect.appendChild(btnSelect);
    novalinha.appendChild(colId);
    novalinha.appendChild(colNome);
    novalinha.appendChild(colImg);
    novalinha.appendChild(colDesc);
    novalinha.appendChild(colPreco);
    novalinha.appendChild(ColTipo);
    novalinha.appendChild(colSelect);

    document.querySelector('tbody').appendChild(novalinha);
    selecionar(btnSelect);
}

