let botaoAbrirModal = document.querySelector(".botao-abrirModal ");
let botaoFecharModal = document.querySelector(".botao-fechar");
let modal = document.querySelector(".nav2");
let fundoModal = document.querySelector(".fundo-preto");
let body = document.querySelector("body");

botaoAbrirModal.addEventListener("click", () => {
  modal.classList.remove("fechado");
  fundoModal.classList.remove("fechado");
  body.classList.add("body-modal-aberto");
});
botaoFecharModal.addEventListener("click", () => {
  modal.classList.add("fechado");
  fundoModal.classList.add("fechado");
  body.classList.remove("body-modal-aberto");
});

if (window.innerWidth < 1400) {
  let nav = document.querySelector(".ancoras");
  let nav2 = document.querySelector(".bloco-nav2");
  nav.style.display = "none";

  nav2.innerHTML += `<a href="/home.html" class="pressionado">INÍCIO</a>
  <a href="/routes/literaturaPage.html">LITERATURA</a>
  <a href="/routes/criadoresPage.html">CRIADORES DE CONTEÚDO</a>
  <a href="/routes/baseDados.html">BASE DE DADOS</a>
  <a href="/routes/legislacaoPage.html">LEGISLAÇÃO</a>`;
}
