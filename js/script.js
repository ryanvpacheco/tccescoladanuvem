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
  var isTouchDevice = false;

  // Verificar se é um dispositivo com tela sensível ao toque
  if ('ontouchstart' in window || navigator.maxTouchPoints) {
    isTouchDevice = true;
  }

  // Adicionar eventos de acordo com o tipo de dispositivo
  if (isTouchDevice) {
    curriculo.addEventListener('touchstart', function () {
      flipCard(this);
    });

    curriculo.addEventListener('touchend', function () {
      var cardElement = this;
      setTimeout(function () {
        resetCard(cardElement);
      }, 3000);
    });
  } else {
    curriculo.addEventListener('click', function () {
      flipCard(this);
      redirectToCurriculo(this);
    });

    curriculo.addEventListener('mouseleave', function () {
      resetCard(this);
    });
  }
});
