// Um objeto com nomes de usuários e senhas válidos
var validCredentials = {
  'admin': '123456',
  'user1': 'password1',
  'user2': 'password2'
};

function login() {
  // Recupera os valores dos campos de entrada
  var email = document.querySelector(".caixa-email").value;
  var password = document.querySelector(".caixa-senha").value;

  // Verifica se as credenciais de login são válidas
  if (validCredentials.hasOwnProperty(email) && validCredentials[email] === password) {
    // login realizado com sucesso
    alert("Login realizado com sucesso!");
    // redireciona para a página home
    window.location.href = "home.html";
  } else {
    // login falhou
    alert("Nome de usuário ou senha incorretos.");
  }
}

// Adiciona um event listener para o botão de login
document.querySelector(".botao-entrar").addEventListener("click", login);
