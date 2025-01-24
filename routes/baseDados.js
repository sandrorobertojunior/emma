let arrayObjetos = [
  {
    nome: "BDTD - Biblioteca Digital Brasileira de Teses e Dissertações",
    descricao:
      "Foi concebida e é mantida pelo Instituto Brasileiro de Informação em Ciência e Tecnologia (IBICT) no âmbito do Programa da Biblioteca Digital Brasileira (BDB), com apoio da Financiadora de Estudos e Pesquisas (FINEP). Lançada oficialmente no final de 2002, é uma das maiores iniciativas para a disseminação e visibilidade de teses e dissertações no mundo.",
    endereco: "https://bdtd.ibict.br/vufind/about/home",
  },
  {
    nome: "BNDigital - Biblioteca Nacional Digital",
    descricao:
      "Faz parte da Fundação Biblioteca Nacional, sendo a mais antiga instituição cultural brasileira e a maior biblioteca do país. É uma das mais importantes do mundo. O dossiê 'Literatura matriz Afro-Brasileira' apresenta a produção editorial especializada em cultura africana e afro-brasileira, de autores negros e suas obras presentes no catálogo.",
    endereco:
      "https://bndigital.bn.gov.br/dossies/literatura-matriz-afro-brasileira/",
  },
  {
    nome: "Ceará Criolo",
    descricao:
      "O site compartilha títulos gratuitos sobre história da população negra, negritude, raça, diversidade étnica, entre outros assuntos correlatos.",
    endereco: "https://cearacriolo.com.br/quem-somos/",
  },
  {
    nome: "Domínio Público",
    descricao:
      "O site disponibiliza livros gratuitos sobre História Geral da África.",
    endereco:
      "http://www.dominiopublico.gov.br/pesquisa/ResultadoPesquisaObraForm.do?first=50&skip=0&ds_titulo=&co_autor=&no_autor=&co_categoria=132&pagina=1&select_action=Submit&co_midia=2&co_obra=&co_idioma=&colunaOrdenar=DS_TITULO&ordem=null",
  },
  {
    nome: "Google Acadêmico",
    descricao:
      "É uma plataforma de pesquisa online para encontrar literatura de origem acadêmica, como artigos científicos, trabalhos de conclusão de curso, teses de mestrado e doutorado, citações e resumos completos de obras.",
    endereco: "https://scholar.google.com.br/?hl=pt",
  },
  {
    nome: "Portal de Periódicos CAPES",
    descricao:
      "Oferece acesso aos textos completos de artigos selecionados de mais de 15.475 revistas internacionais, nacionais e estrangeiras, além de 126 bases de dados com resumos em todas as áreas do conhecimento. O uso é gratuito para usuários das instituições participantes, por meio do acesso CAFe.",
    endereco: "http://www.periodicos.capes.gov.br/",
  },
  {
    nome: "SCIELO – Scientific Electronic Library Online",
    descricao:
      "É um modelo para a publicação eletrônica cooperativa de periódicos científicos na Internet, proporcionando visibilidade e acesso universal à literatura científica.",
    endereco: "http://www.scielo.org",
  },
];

let section = document.querySelector(".section-base");

let string = "";

arrayObjetos.map((elemento) => {
  string += `<div class="bloco">
          <h2 class="h2">
           ${elemento.nome}
          </h2>
          <div class="texto">
            ${elemento.descricao}
          </div>
          <div class="container-botao">
            <a href="${elemento.endereco}" class="button">Ir para página</a>
          </div>
        </div>`;
});

section.innerHTML = string;
