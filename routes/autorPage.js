let sectionAutorPage = document.querySelector(".secao-autor");
let objeto = JSON.parse(localStorage.getItem("ObjetoAutor"));
let stringObras = "";
objeto.arrayObras.map((elemento) => {
  stringObras += `<a href="${elemento.link}"
                ><li>
                  <img
                  src="${elemento.fotoCapa}"
                  alt="" / >
                  <h1 class="nome-Obra">${elemento.nomeObra}</h1>
                </li></a
              >`;
});

sectionAutorPage.innerHTML = `
<div class="container">
          <div class="bloco-autor">
            <div class="bloco1">
              <div class="bloco-imagem">
                <img src="${objeto.imagem}" alt="" />
              </div>
              <h1 class="nome-autor">${objeto.nomeAutor}</h1>
              <p class="periodo-autor">${objeto.periodoVida}</p>
              <p class="texto-autor">
              ${objeto.textoSobre}
              </p>
            </div>
            <ul class="bloco-lista">
            ${stringObras}
            </ul>
          </div>
          <a class="botao-voltar" href="/routes/literaturaPage.html">Voltar</a>
        </div>`;
