btnRemover.addEventListener('click', function () {
    remover();
    form.reset();
},
);

function remover() {
    if (confirm("༺🍃☞ 𝓣𝓮𝓶 𝓬𝓮𝓻𝓽𝓮𝔃𝓪 𝓺𝓾𝓮 𝓭𝓮𝓼𝓮𝓳𝓪 𝓮𝔁𝓬𝓵𝓾𝓲𝓻 𝓮𝓼𝓼𝓮 𝓹𝓻𝓸𝓭𝓾𝓽𝓸 ☪ツ")) {

        fetch(local + inputId.value, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'DELETE',
        })
        removerProduto();
    }
}

function removerProduto() {
    alert("༺🍃☞ 𝓟𝓻𝓸𝓭𝓾𝓽𝓸 𝓮𝔁𝓬𝓵𝓾𝓲𝓭𝓸 𝓬𝓸𝓶 𝓼𝓾𝓬𝓮𝓼𝓼𝓸 ☪ツ");
    var ids = document.getElementsByClassName('col-id');
    for (var i = 0; i < ids.length; i++) {
        if (ids[i].innerText == inputId.value) {
            var tr = ids[i].closest('tr');
            tr.remove();
        }
    }
}