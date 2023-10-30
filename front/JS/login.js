function checkLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Verifique as credenciais aqui. Exemplo simples:
    if (username === "Arthur" && password === "123@qwe") {
        window.location.href = "http://127.0.0.1:5501/front/html/gerenciamento.html";
    } else {
        document.getElementById("error-message").innerText = "Credenciais inválidas. Tente novamente.";
    }
  
}

function logout() {
    // Lógica de logout aqui, se necessário.
    // Por exemplo, redirecionar o usuário para a página de login.
    window.location.href = "http://127.0.0.1:5501/front/html/loja.html";
}