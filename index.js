// Função chamada ao clicar no botão
function participarCurso() {
    alert("Obrigado por se inscrever no curso!");
}

// Exemplo de adicionar comportamento interativo
document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector('.btn');
    button.addEventListener('click', function() {
        participarCurso();
    });

    // Exemplo de alterar o texto do botão após o clique
    button.addEventListener('click', function() {
        button.textContent = "Inscrição Concluída!";
        button.style.backgroundColor = "#28a745"; // Cor verde para indicar sucesso
        button.disabled = true; // Desativar o botão após o clique
    });
});
