document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("shrink");
    } else {
      header.classList.remove("shrink");
    }
  });

  const form = document.getElementById('contatoForm');
  const popup = document.getElementById('popup');
  const popupMessage = document.getElementById('popup-message');

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
  
});

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contatoForm');
  const popup = document.getElementById('popup');
  const popupMessage = document.getElementById('popup-message');

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
});