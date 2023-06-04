// Função para girar o card ao ser clicado
function flipCard(card) {
  card.classList.toggle("flip");

  // Verifica se o card está girado
  var isFlipped = card.classList.contains("flip");
  if (isFlipped) {
    // Define o tempo de espera em milissegundos
    var tempoEspera = 3000; // 3 segundos

    // Aplica o timer para reverter o card
    setTimeout(function() {
      flipCard(card);
    }, tempoEspera);
  }
}

// Função para redirecionar para a página do participante ao clicar na foto
function redirectToCurriculo(element) {
  var card = element.closest(".curriculo");
  var url = card.getAttribute("data-href");
  window.location.href = url;
}

// Adiciona os eventos de clique aos elementos com a classe "curriculo" e "curriculo-image"
var curriculos = document.querySelectorAll(".curriculo");
var images = document.querySelectorAll(".curriculo-image");

curriculos.forEach(function(curriculo) {
  var card = curriculo.querySelector(".curriculo-card");
  curriculo.addEventListener("click", function(event) {
    if (event.target.classList.contains("curriculo-image")) {
      event.stopPropagation();
      redirectToCurriculo(event.target);
    } else if (event.target.classList.contains("curriculo") || event.target.classList.contains("curriculo-inner")) {
      flipCard(card);
    }
  });
});
