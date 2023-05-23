// Função para virar o card ao passar o mouse
function flipCard(element) {
    element.classList.toggle('flip');
}

// Função para redirecionar para o currículo ao clicar no card
function redirectToCurriculo(element) {
    var curriculoURL = element.getAttribute('data-href');
    window.location.href = curriculoURL;
}

// Adicionar classe ao footer quando chegar ao final da página
window.addEventListener('scroll', function() {
    var footer = document.querySelector('.footer');
    var scrollPosition = window.innerHeight + window.pageYOffset;
    var footerPosition = document.body.offsetHeight - footer.offsetHeight;

    if (scrollPosition >= footerPosition) {
        footer.classList.add('show');
    } else {
        footer.classList.remove('show');
    }
});
