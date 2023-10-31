function btnHidden(){
    if (hidden) {
        btnCadastrar.classList.toggle('visually-hidden');
        btnAlterar.classList.toggle('visually-hidden');
        btnRemover.classList.toggle('visually-hidden');
        btnCancelar.classList.toggle('visually-hidden');
    }
};

function fica_em_alerta(){
    if(inputImg.files.length === 0 || inputDesc.value.trim() === "" || inputPreco.value.trim() === ""){
        alert("༺🍃☞ <3 𝓟𝓻𝓮𝓮𝓷𝓬𝓱𝓮 𝓽𝓾𝓭𝓸 𝓶𝓪𝓷𝓸 𝓪𝓯𝓯 :𝓓 <3 ☪ツ");
        return true;
    }

};

btnCancelar.addEventListener('click', function(){
    hidden = true;
    btnHidden();
});
