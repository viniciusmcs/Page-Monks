// Função para verificar a soma e ativar o botão
document.getElementById('verification').addEventListener('input', function() {
    const inputValue = parseInt(this.value, 10);
    const submitButton = document.getElementById('submit-button');
    if (inputValue === 8) {  // 3 + 5
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
});
