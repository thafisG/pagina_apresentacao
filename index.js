// Função chamada ao clicar no botão
function participarButton() {
    alert("Obrigado por se inscrever no curso!");

    // Selecionar o botão pelo ID
    const button = document.getElementById('participarButton');

    // Alterar o texto do botão
    button.textContent = "Inscrição Concluída!";
    // Alterar a cor do fundo do botão para verde
    button.style.backgroundColor = "#28a745";
    // Desativar o botão após o clique
    button.disabled = true;
}

document.getElementById('participarButton').addEventListener('click', participarButton);
