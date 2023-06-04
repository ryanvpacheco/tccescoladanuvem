// Função para exibir o conteúdo da aba correspondente
function showTabContent(tab) {
  // Obter todos os elementos de conteúdo das abas
  const tabContents = document.querySelectorAll('.tab-content');

  // Ocultar todos os conteúdos das abas
  tabContents.forEach(content => {
    content.style.display = 'none';
  });

  // Exibir o conteúdo da aba selecionada
  const selectedContent = document.querySelector(`.tab-content[data-tab="${tab}"]`);
  if (selectedContent) {
    selectedContent.style.display = 'flex';
    scrollToElement(selectedContent.id);
  }
}

// Função para mudar a aparência do botão da aba selecionada
function setActiveTabButton(button) {
  // Remover a classe "active" de todos os botões das abas
  const tabButtons = document.querySelectorAll('.tab-card');
  tabButtons.forEach(btn => {
    btn.classList.remove('active');
  });

  // Adicionar a classe "active" ao botão da aba selecionada, se não estiver presente
  if (button && !button.classList.contains('active')) {
    button.classList.add('active');
  }
}

// Função para fechar a aba após 1 minuto de inatividade
function closeTabAfterTimeout(tab) {
  let timeout;
  const tabContent = document.querySelector(`.tab-content[data-tab="${tab}"]`);

// Reiniciar o temporizador a cada interação
function resetTimeout() {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    showTabContent('');
    setActiveTabButton(null);
  }, 120000); // 2 minutos
}

  // Adicionar eventos de clique e toque aos botões das abas
  tabContent.addEventListener('click', resetTimeout);
  tabContent.addEventListener('touchstart', resetTimeout);
}

// Função para redirecionar para a página inicial
function redirectToHome() {
  window.location.href = "index.html";
}

// Função para copiar o texto para a área de transferência e abrir o Google Maps, se necessário
function copyToClipboard(copiar) {
  var dummy = document.createElement("input");
  document.body.appendChild(dummy);
  dummy.setAttribute('value', copiar);
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);

  Swal.fire({
    icon: 'success',
    title: (copiar.length) > 20 ? 'Endereço copiado com sucesso!' : copiar,
    text: (copiar.length) > 20 ? copiar : 'Já copiamos para a sua área de transferência.',
    showConfirmButton: false,
    timer: 2500
  }).then(() => {
    if ((copiar.length) > 20) {
      Swal.fire({
        text: 'Gostaria de ser redirecionado para este endereço no Google Maps?',
        showCancelButton: true,
        confirmButtonColor: '#337ab7',
        cancelButtonColor: '#C70000',
      }).then((result) => {
        if (result.isConfirmed) {
          window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(copiar)}`, '_blank');
        }
      });
    }
  });
}

// Função para rolar para um elemento na página
function scrollToElement(id) {
  const element = document.getElementById(id);
  element.scrollIntoView({ behavior: "smooth" });
}

// Função para verificar se a página foi rolada até o final
function isPageScrolledToBottom() {
  return window.innerHeight + window.scrollY >= document.body.offsetHeight;
}

// Função para exibir ou ocultar o footer com base no scroll da página
function toggleFooterVisibility() {
  const footer = document.querySelector('.footer');

  if (isPageScrolledToBottom()) {
    footer.style.display = 'block';
  } else {
    footer.style.display = 'none';
  }
}

// Adicionar evento de scroll para verificar o estado do footer
window.addEventListener('scroll', toggleFooterVisibility);

// Obter todos os botões das abas
const tabButtons = document.querySelectorAll('.tab-card');

// Adicionar eventos de clique aos botões das abas
tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Obter o valor do atributo "data-tab" do botão da aba
    const tab = button.getAttribute('data-tab');

    // Exibir o conteúdo da aba correspondente
    showTabContent(tab);

    // Mudar a aparência do botão da aba selecionada
    setActiveTabButton(button);

    // Limpar temporizador após clicar em um botão de aba
    closeTabAfterTimeout(tab);

    // Fechar o footer caso esteja aberto
    const footer = document.querySelector('.footer');
    footer.style.display = 'none';
  });
});
