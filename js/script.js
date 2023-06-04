// Função para virar o card
function flipCard(element) {
  element.classList.toggle('flip');
}

// Função para reverter o card após 3 segundos de inatividade do mouse ou do toque
function resetCard(element) {
  if (!element.classList.contains('flip')) {
    element.classList.add('flip');
  }
}

// Função para redirecionar para o currículo ao clicar no card
function redirectToCurriculo(element) {
  var curriculoURL = element.getAttribute('data-href');
  window.location.href = curriculoURL;
}

// Verificar se é um dispositivo com tela sensível ao toque
var isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints;

// Adicionar eventos de interação aos cards
var curriculos = document.querySelectorAll('.curriculo');
curriculos.forEach(function (curriculo) {
  var cardElement = curriculo.querySelector('.curriculo-card');
  var timeout;

  if (isTouchDevice) {
    curriculo.addEventListener('touchstart', function () {
      clearTimeout(timeout);
      flipCard(cardElement);
    });

    curriculo.addEventListener('touchend', function () {
      timeout = setTimeout(function () {
        resetCard(cardElement);
      }, 3000);
    });

    curriculo.addEventListener('touchmove', function () {
      clearTimeout(timeout);
      resetCard(cardElement);
    });
  } else {
    curriculo.addEventListener('mouseenter', function () {
      clearTimeout(timeout);
      flipCard(cardElement);
    });

    curriculo.addEventListener('mouseleave', function () {
      timeout = setTimeout(function () {
        resetCard(cardElement);
      }, 3000);
    });
  }

  curriculo.addEventListener('click', function () {
    redirectToCurriculo(this);
  });
});
