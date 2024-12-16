// JavaScript para gerar a soma e verificar a resposta
document.addEventListener('DOMContentLoaded', function () {
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const securityAnswer = document.getElementById('security-answer');
    const verifyBtn = document.getElementById('verify-btn');
  
    // Função para gerar uma soma aleatória
    function generateSecurityQuestion() {
      const randomNum1 = Math.floor(Math.random() * 10) + 1;
      const randomNum2 = Math.floor(Math.random() * 10) + 1;
  
      num1.textContent = randomNum1;
      num2.textContent = randomNum2;
      return randomNum1 + randomNum2;
    }
  
    let correctAnswer = generateSecurityQuestion();
  
    // Verifica se o valor digitado está correto
    securityAnswer.addEventListener('input', function () {
      if (parseInt(securityAnswer.value) === correctAnswer) {
        verifyBtn.disabled = false;
      } else {
        verifyBtn.disabled = true;
      }
    });
  
    // Ao enviar o formulário
    document.getElementById('myForm').addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Formulário enviado com sucesso!');
    });
  });
  
let btnMenuMob = document.querySelector('#btn-menu-mob')
let line1 = document.querySelector('.line-menumob-1')
let line2 = document.querySelector('.line-menumob-2')

btnMenuMob.addEventListener("click", ()=>{
    line1.classList.toggle('ativo1')
    line2.classList.toogle('ativo2')
})