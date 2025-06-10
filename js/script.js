document.addEventListener("DOMContentLoaded", function () {
  // Menu hamburguer toggle
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");

  if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }

  // Efeito de shrink no header ao rolar
  const header = document.querySelector(".header");

  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("shrink");
      } else {
        header.classList.remove("shrink");
      }
    });
  }

  // Validação e envio do formulário com popup
  const form = document.getElementById('contatoForm');
  const popup = document.getElementById('popup');
  const popupMessage = document.getElementById('popup-message');

  if (form && popup && popupMessage) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const nome = form.nome.value.trim();
      const email = form.email.value.trim();
      const mensagem = form.mensagem.value.trim();

      if (!nome || !email || !mensagem) {
        mostrarPopup("Por favor, preencha todos os campos.");
        return;
      }

      mostrarPopup("Mensagem enviada com sucesso!");
      form.reset();
    });

    window.fecharPopup = function () {
      popup.classList.add('hidden');
    };

    function mostrarPopup(mensagem) {
      popupMessage.textContent = mensagem;
      popup.classList.remove('hidden');
    }
  }
});