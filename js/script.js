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
  var touchStart = 0;
  var touchEnd = 0;

  // Verificar se é um dispositivo com tela sensível ao toque
  if ('ontouchstart' in window || navigator.maxTouchPoints) {
    isTouchDevice = true;
  }

  // Adicionar eventos de acordo com o tipo de dispositivo
  if (isTouchDevice) {
    curriculo.addEventListener('touchstart', function (event) {
      touchStart = event.touches[0].clientX;
    });

    curriculo.addEventListener('touchend', function (event) {
      touchEnd = event.changedTouches[0].clientX;
      handleTouchSwipe(this);
    });
  } else {
    curriculo.addEventListener('mouseenter', function () {
      flipCard(this);
    });

    curriculo.addEventListener('mouseleave', function () {
      resetCard(this);
    });
  }

  curriculo.addEventListener('click', function (event) {
    if (isTouchDevice) {
      event.preventDefault(); // Impede o redirecionamento no toque
    }
    flipCard(this);
    redirectToCurriculo(this);
  });

  // Função para lidar com o deslize do toque no celular
  function handleTouchSwipe(element) {
    var swipeThreshold = 10; // Limiar de deslize do toque (ajuste conforme necessário)
    var swipeDistance = touchEnd - touchStart;
    if (Math.abs(swipeDistance) < swipeThreshold) {
      flipCard(element);
    }
  }
});
