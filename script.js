// Alternância de tema claro/escuro
const toggleButton = document.getElementById('toggle-theme');
const body = document.body;

// Função para alternar o tema
toggleButton.addEventListener('click', () => {
    body.classList.toggle('tema-claro');
    body.classList.toggle('tema-escuro');
});

// Validação do formulário de contato
const formContato = document.getElementById('form-contato');
const sucessoMensagem = document.getElementById('mensagem-sucesso');

// Função para exibir a mensagem de sucesso
formContato.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o envio real do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Validação simples (você pode adicionar mais validações aqui)
    if (nome && email && mensagem) {
        sucessoMensagem.style.display = 'block'; // Exibe a mensagem de sucesso
        formContato.reset(); // Reseta os campos do formulário
    } else {
        alert('Por favor, preencha todos os campos!');
    }
});
