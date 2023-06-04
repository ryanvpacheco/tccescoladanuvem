// Função para virar o card
function flipCard(element) {
  element.classList.add('flip');
}

// Função para reverter o card
function resetCard(element) {
  element.classList.remove('flip');
}

// Função para redirecionar para o currículo ao clicar no card
function redirectToCurriculo(element) {
  var curriculoURL = element.getAttribute('data-href');
  window.location.href = curriculoURL;
}

// Adicionar eventos de interação aos cards
var curriculos = document.querySelectorAll('.curriculo');
curriculos.forEach(function (curriculo) {
  var cardElement = curriculo.querySelector('.curriculo-card');
  var timeout;

  curriculo.addEventListener('mouseenter', function () {
    flipCard(cardElement);
    clearTimeout(timeout);
  });

  curriculo.addEventListener('mouseleave', function () {
    timeout = setTimeout(function () {
      resetCard(cardElement);
    }, 3000);
  });

  curriculo.addEventListener('touchstart', function () {
    flipCard(cardElement);
    clearTimeout(timeout);
  });

  curriculo.addEventListener('touchend', function () {
    timeout = setTimeout(function () {
      resetCard(cardElement);
    }, 3000);
  });

  curriculo.addEventListener('click', function () {
    redirectToCurriculo(this);
  });
});
