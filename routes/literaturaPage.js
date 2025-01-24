let section = document.querySelector(".section-literatura");
let botao1 = document.querySelector(".botao1");
let botao1State = true;
let botao2 = document.querySelector(".botao2");
let botao2State = false;
let arrayObjetosAutores = [
  {
    id: 1,
    nomeAutor: "Conceição Evaristo",
    periodoVida: "(1946)",
    imagem:
      "https://s2-oglobo.glbimg.com/E8427S5UcKQa0TpCj8FHhX2AWLQ=/0x0:2000x2999/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/V/V/DAUFfdRpAfeBPWbcdbEw/conceicao-foto.jpg",
    textoSobre:
      "Conceição Evaristo, escritora e professora, usa o conceito de escrevivência para abordar racismo, pobreza e resistência, inspirado em sua vivência como mulher negra. Formada em Letras e doutora em Literatura, também contribuiu para a educação de jovens em áreas marginalizadas.",
    arrayObras: [
      {
        nomeObra: "Ponciá Vicêncio (2003)",
        link: "https://biblion.odilo.us/info/poncia-vicencio-01013413",
        fotoCapa:
          "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQH4-wMeclXveFRW_z70T7CFH6rhIp2A98vlDsYymO6J8LvR4Ou",
      },
      {
        nomeObra: "Becos da memória (2006)",
        link: "https://biblion.odilo.us/info/becos-da-memoria-00704483",
        fotoCapa:
          "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR_zu9GAMfRb7HAQwBuwhyJeQ6ZvZ1ia2FXnNMgt37JDsP3_Vub",
      },
      {
        nomeObra: "Poemas de recordação e outros movimentos (2008)",
        link: "https://pergamum.ufscar.br/acervo/207668",
        fotoCapa:
          "https://static.wixstatic.com/media/0a154a_1f5447b2a4904253a4e10f48d20068bb~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      },
      {
        nomeObra: "Insubmissas lágrimas de mulheres (2011)",
        link: "https://dedalus.usp.br/F/TRNKY2CH51JSDC3PU5ADH9T2L4P7749EJ6Y4V2QPPT4U5QUFQV-05570?func=full-set-set&set_number=001424&set_entry=000001&format=999",
        fotoCapa:
          "https://mulheres.apmppr.org.br/livros/insubmissas-lagrimas-de-mulheres-395#galeria",
      },
      {
        nomeObra: "Olhos d’água (2014)",
        link: "https://sesc.i10bibliotecas.com.br/livro/51985",
        fotoCapa:
          "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRp1R8AVcaI3MyrXGvjnMm1gOkEN6_Bm2NX-7z6k9D7fG-LQMGD",
      },
      {
        nomeObra: "Histórias de leves enganos e parecenças (2016)",
        link: "https://pergamum.ufscar.br/acervo/207667",
        fotoCapa:
          "https://static.wixstatic.com/media/0a154a_6dd47defaaf94b51b38db9fd3c99f3b6~mv2.jpg/v1/fill/w_480,h_718,al_c,lg_1,q_80,enc_auto/0a154a_6dd47defaaf94b51b38db9fd3c99f3b6~mv2.jpg",
      },
      {
        nomeObra: "Canção para ninar menino grande (2018)",
        link: "https://biblion.odilo.us/info/cancao-para-ninar-menino-grande-01013414",
        fotoCapa:
          "https://m.media-amazon.com/images/I/61u-HWzo8nL._AC_UF1000,1000_QL80_.jpg",
      },
      {
        nomeObra: "Macabea flor de mulungu (2023)",
        link: "https://sesc.i10bibliotecas.com.br/busca?formOption=3&searchKeywords=Macabea+flor+de+mulungu+&optionFilter=T",
        fotoCapa:
          "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRU3JnE024wnKgkrGSEO8NRfhI1dY9_xYuvu57qbuOYp_hqNHDC",
      },
    ],
  },
  {
    id: 2,
    nomeAutor: "Stefano Volp",
    periodoVida: "(1990)",
    imagem: "https://i.harperapps.com/hqbr/authors/58532/x500.JPG",
    textoSobre:
      "Stefano Volp, escritor, roteirista e tradutor brasileiro, nasceu em 1990 no Espírito Santo. Fundador da editora Escureceu e do Clube da Caixa Preta, destacou-se com o livro Homens Pretos (Não) Choram , relançado pela HarperCollins em 2022. Outras obras notáveis ​​incluem O Beijo do Rio e a distopia afrofuturista O Segredo das Larvas  , que será publicado em Portugal. Além de traduzir livros, Volp trabalha na adaptação audiovisual de suas obras.",
    arrayObras: [
      {
        nomeObra: "Homens pretos não choram (2022)",
        link: "https://sesc.i10bibliotecas.com.br/obra/507042",
        fotoCapa:
          "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQMKN18DqWIe9Wiv0ihJWftc3MFJT5bp8AbqXnEV65n3t7IeBNG",
      },
      {
        nomeObra: "O beijo do Rio (2022)",
        link: "https://www.amazon.com.br/beijo-do-rio-Stefano-Volp/dp/6555113685/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2SBRSK78LBS9K&dib=eyJ2IjoiMSJ9.nNVyqCwe48Z3ekqvekH2YdtNL9dCUpu1kXVE8wsvXxjj6tFUw6-r1yG6bGRCH9D5XJtxGhHMSFTFaup9_mU_f1PUWjVed8055jPj8tbyWyEPSF4HdMRZIpEdSMiXs3xWYjTcoeDUzCdex5f638hkEZkscsA8S4Lzz7UNh0zxNbXFv4uLVriaQN-EThWzv_H_J_5yhnksoL1aUCphQ_o2QG7JQCF45l7ZQcJB4f_EpTFGkfo7KYJd5x6HiVeOktpE7En5l8GZar06cmcht9KitWTZHMCh418MFqMUJeGZpnOZRHsFtdgbdFsE7w2D1LdMrfyhSLnH2Dp9u4mnUtEsIjQkfBB9ZkIho1U0egOumt76vfmLNn49x2S3lKeSL_Bpfk-A7SnG8mpk-bklYlLvYAW6HxEPzvb9tYO9hNRPc0Dix7b1nw_qtL-xaY2rRARg.Htzl3nT-tC-oxh64KuU7Qz_qKACKAWIK00FIgoj6KCc&dib_tag=se&keywords=O+beijo+do+Rio&qid=1736637291&sprefix=o+beijo+do+rio%2Caps%2C336&sr=8-1&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9",
        fotoCapa:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ__vt462dyqgirxDaUCj04QAscNZlhlmqaG2y0lHy03KrlCFLl",
      },
      {
        nomeObra: "O segredo das larvas vol. 1 (2024)",
        link: "https://www.amazon.com.br/segredo-das-larvas-Vol/dp/6559812553/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2WJDAB8QGLDC1&dib=eyJ2IjoiMSJ9.h1jUW8sGcder6gASUUpt2m4_IHeoERyKBcYh3PpKcQ7GjHj071QN20LucGBJIEps.LPumJXm6oZzvzMDMaTHIu1gQi-6NJgEfHmb9aqEcD8w&dib_tag=se&keywords=O+segredo+das+larvas+vol.+1+%282024%29&qid=1736637542&sprefix=o+segredo+das+larvas+vol.+1+2024+%2Caps%2C388&sr=8-1",
        fotoCapa:
          "https://m.media-amazon.com/images/I/81cz+hUzFfL._AC_UF1000,1000_QL80_.jpg",
      },
    ],
  },
  {
    id: 3,
    nomeAutor: "Jeferson Tenorio",
    periodoVida: "(1977)",
    imagem:
      "https://cdl-static.s3-sa-east-1.amazonaws.com/colaboradores/10157_gg.jpg",
    textoSobre:
      "Jeferson Tenório, escritor nascido no Rio de Janeiro em 1977 e radicado em Porto Alegre, é doutor em Teoria Literária pela PUCRS. Graduado e mestre pela UFRGS, atua como professor e escreve sobre questões sociais, raciais e identitárias, destacando as complexidades da experiência negra no Brasil.",
    arrayObras: [
      {
        nomeObra: "O beijo na parede (2020)",
        link: "https://sesc.i10bibliotecas.com.br/obra/522893",
        fotoCapa:
          "https://s3.amazonaws.com/acervo.i10bibliotecas/sesc/material-livro-similar/e60g/651e129950d9e298cac8d80d235f3192_b.jpg",
      },
      {
        nomeObra: "O Avesso da pele (2020)",
        link: "https://dedalus.usp.br/F/MELD7HRX77M9CV9ABB1376SEKCLVRGXN9KUT7DCLS2U7JK96B4-13929?func=full-set-set&set_number=001807&set_entry=000002&format=999",
        fotoCapa:
          "https://m.media-amazon.com/images/I/81P1+n7l3HL._UF894,1000_QL80_.jpg",
      },
      {
        nomeObra: "Estela sem Deus (2018)",
        link: "https://www.amazon.com.br/Estela-sem-Deus-Jeferson-Ten%C3%B3rio-ebook/dp/B0B44HWYF5/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=72HBVZRZMNC&dib=eyJ2IjoiMSJ9.wna0Keqh4vGKmXXqxXndLFQr4wGqIZufn6qQpWqKgr_aVe5EE1rjPuFKX3U3vfbfgy6tPt6Jz7NuyFjbWlshVnkEYWzloqPaFCECDVNGIT9eWWtVGC8oUMyCtSKw9SP5e9HSvCyib-7T4q8yN9ioww.Wr5-nMOeey0XS1wxGOV-Pc5GTvJ9BeqOvceBv_wLxmU&dib_tag=se&keywords=Estela+sem+Deus+%282018%29&qid=1736638282&sprefix=estela+sem+deus+2018+%2Caps%2C310&sr=8-1",
        fotoCapa: "https://m.media-amazon.com/images/I/913C88qu8ML._SY385_.jpg",
      },
      {
        nomeObra: "De onde eles vem (2024)",
        link: "https://www.amazon.com.br/onde-eles-v%C3%AAm-Jeferson-Ten%C3%B3rio/dp/8535939377/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=STYG7853AXMI&dib=eyJ2IjoiMSJ9.wJy1v7zy-L3MGCPGADCLOQ.f9UAuvzsde4zh2N5Q-IdUpapAd3kda4mKk33Z4n0LOc&dib_tag=se&keywords=De+onde+eles+vem+%282024%29+jeferson+tenorio&qid=1736638368&sprefix=de+onde+eles+vem+2024+jeferson+tenorio%2Caps%2C202&sr=8-1&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9",
        fotoCapa: "https://m.media-amazon.com/images/I/71YWJpIYciL._SY385_.jpg",
      },
    ],
  },
  {
    id: 4,
    nomeAutor: "Lilia Guerra",
    periodoVida: "(1976)",
    imagem:
      "https://favodomellone.com.br/wp-content/uploads/2023/10/O-c%C3%A9u-para-os-bastardos-Lilia-Guerra-Abre-600.jpg",
    textoSobre:
      "Lilia Guerra é uma escritora brasileira nascida em São Paulo em 1976 Ela é autora de obras como Perifobia, finalista do Prêmio Rio de Literatura em 2019, e Rua do Larguinho. Além de sua carreira literária, Lilia atua como auxiliar de enfermagem no Sistema Único de Saúde (SUS) e reside na Cidade Tiradentes, zona leste de São Paulo. Sua escrita destaca-se por retratar a vida na periferia paulistana, dando voz a personagens femininas negras e periféricas.",
    arrayObras: [
      {
        nomeObra: "Perifobia (2018)",
        link: "https://www.amazon.com.br/Perifobia-Lilia-Guerra/dp/6556927708/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=CF9F2OZ2IBF3&dib=eyJ2IjoiMSJ9.DK5PoKaoq_wnjrodO4jnOi6xqfwSU8l7Vdmh3oe4WrZYuiCTgw2GzSR6TJPUKijuHMeo-llUVfKUoS8zsD0jeUOh1ZhF8x37_PD0eXmJD8-Tu_8dG9-lu7LGHDSyoGNz.pydR5jxg2ofE4u2zJIYBLin5aijYeKLq6E6kHo8L_pY&dib_tag=se&keywords=Perifobia+%282018%29+lilia+guerra&qid=1736638822&sprefix=perifobia+2018+lilia+guerra%2Caps%2C233&sr=8-1",
        fotoCapa: "https://m.media-amazon.com/images/I/81Tmimr9efL._SY385_.jpg",
      },
      {
        nomeObra: "O céu para os bastardos (2023)",
        link: "https://sesc.i10bibliotecas.com.br/obra/531728",
        fotoCapa:
          "https://s3.amazonaws.com/acervo.i10bibliotecas/sesc/material-livro-similar/9sle/427d68a487f723c814d7db9ce290ecc1_b.jpg",
      },
    ],
  },
  {
    id: 5,
    nomeAutor: "Eliane Marques",
    periodoVida: "(1970)",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlIRADk2vHzsVsbNiycH17DlH9Y6y2O9YjNg&s",
    textoSobre: `Eliane Marques, nascida em 1970 em Sant'Ana do Livramento, na fronteira entre o Brasil e o Uruguai, é uma poetisa destacada, romancista, ensaísta, tradutora e psicanalista brasileira.
Marques possui graduação em Direito e Pedagogia, com especialização em Constituição, Economia e Política, além de mestrado em Direito Público.
Atualmente reside em Porto Alegre, onde atua como psicanalista e colunista quinzenal sobre cultura e psicanálise no jornal Zero Hora.
Sua produção literária é marcada por uma profunda sensibilidade poética e engajamento com questões sociais e culturais.`,
    arrayObras: [
      {
        nomeObra: "O poço das Marianas (2021)",
        link: "https://www.amazon.com.br/POCO-DAS-MARIANAS-CADERNETA-CRITICAS/dp/0000122319",
        fotoCapa:
          "https://literaturars.com.br/wp-content/uploads/2021/07/elinem.png?w=800",
      },
      {
        nomeObra: "Louças de família (2023)",
        link: "https://sesc.i10bibliotecas.com.br/obra/525183",
        fotoCapa:
          "https://s3.amazonaws.com/acervo.i10bibliotecas/sesc/material-livro-similar/5ajd/0b0dd91ea2092bf08b6f7d1437af9d80_b.jpg",
      },
    ],
  },
  {
    id: 6,
    nomeAutor: "Jose Falero",
    periodoVida: "(1987)",
    imagem:
      "https://www.flip.org.br/wp-content/uploads/2024/09/jose%CC%81-falero-1024x1024.jpg",
    textoSobre:
      "José Falero, escritor nascido em 1987 na periferia de Porto Alegre, retrata a vida urbana e questões sociais com linguagem direta e envolvente. Inspiradas por sua experiência de vida, suas obras refletem as complexidades da periferia brasileira.",
    arrayObras: [
      {
        nomeObra: "Vila Sapo (2019)",
        link: "https://sesc.i10bibliotecas.com.br/livro/825427",
        fotoCapa:
          "https://s3.amazonaws.com/acervo.i10bibliotecas/sesc/material-livro-similar/ie2s/d138f79984e10f4bb86b171fbfbd5336_b.jpg",
      },
      {
        nomeObra: "Os supridores (2020)",
        link: "https://biblion.odilo.us/info/os-supridores-00998043",
        fotoCapa:
          "https://covers.odilo.io/public/OdiloPlace_Bookwire_Brasil_BR/9786556920702_ORIGINAL.jpg",
      },
      {
        nomeObra: "Mas em que mundo tu vive? (2021)",
        link: "https://biblion.odilo.us/info/mas-em-que-mundo-tu-vive-00998308",
        fotoCapa:
          "https://covers.odilo.io/public/OdiloPlace_Bookwire_Brasil_BR/9786556921952_ORIGINAL.jpg",
      },
    ],
  },
  {
    id: 7,
    nomeAutor: "Ana Maria Goncalves",
    periodoVida: "(1970)",
    imagem:
      "https://cdn.record.com.br/wp-content/uploads/2019/06/26041405/ana-maria-goncalves.jpg",
    textoSobre:
      "Ana Maria Gonçalves, escritora e tradutora nascida em 1964, é conhecida por abordar temas raciais e sociais, especialmente a identidade negra no Brasil. Sua obra mais famosa é Um Defeito de Cor (2007), que trata da escravidão e resistência. Ela também escreveu A Costa da Espera (2011) e traduz autores africanos e afrodescendentes. Sua literatura é voltada para a luta contra o racismo e a valorização da cultura negra.",
    arrayObras: [
      {
        nomeObra: "Um defeito de cor (2006)",
        link: "https://dedalus.usp.br/F/DBI9MVS1CCNPAPIFD64R5QU17BRC3QEP8MMA717TT3XSCHTEYG-25634?func=full-set-set&set_number=002116&set_entry=000001&format=999",
        fotoCapa: "https://m.media-amazon.com/images/I/71xdtZUc5cL.jpg",
      },
    ],
  },
  {
    id: 8,
    nomeAutor: "Carolina Maria de Jesus",
    periodoVida: "(1914 - 1977)",
    imagem:
      "https://cdn-images-1.medium.com/max/1200/1*eyY3w_h-hC2Y41nym3YZ3Q.jpeg",
    textoSobre:
      "Carolina Maria de Jesus (1914-1977) foi uma escritora brasileira, famosa pelo livro Quarto de Despejo (1960), que relata sua vida na favela, abordando temas como pobreza e racismo. Catadora de papel, sua obra expôs as dificuldades das classes marginalizadas no Brasil, tornando-se um clássico da literatura brasileira.",
    arrayObras: [
      {
        nomeObra: "Quarto de Despejo (1960)",
        link: "https://sesc.i10bibliotecas.com.br/obra/513770",
        fotoCapa:
          "https://s3.amazonaws.com/acervo.i10bibliotecas/sesc/material-livro-similar/u2ce/c535505c4b93de0a9655c41e1b32e535_b.jpg",
      },
      {
        nomeObra: "Casa de Alvenaria (1961)",
        link: "https://dedalus.usp.br/F/DBI9MVS1CCNPAPIFD64R5QU17BRC3QEP8MMA717TT3XSCHTEYG-04659?func=full-set-set&set_number=002160&set_entry=000006&format=999",
        fotoCapa:
          "https://m.media-amazon.com/images/I/71OH6jq5QJL._AC_UF1000,1000_QL80_.jpg",
      },
      {
        nomeObra: "Diário de Bitita (1982)",
        link: "https://dedalus.usp.br/F/DBI9MVS1CCNPAPIFD64R5QU17BRC3QEP8MMA717TT3XSCHTEYG-05256?func=full-set-set&set_number=002166&set_entry=000005&format=999",
        fotoCapa:
          "https://m.media-amazon.com/images/I/41bB1VyM%2BDL._AC_SY200_QL15_.jpg",
      },
      {
        nomeObra: "Pedaços da Fome (1963)",
        link: "https://pergamum.ufscar.br/acervo/110303",
        fotoCapa:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1464134138i/30286162.jpg",
      },
      {
        nomeObra: "O escravo (2023)",
        link: "https://sesc.i10bibliotecas.com.br/obra/528162",
        fotoCapa:
          "https://s3.amazonaws.com/acervo.i10bibliotecas/sesc/material-livro-similar/8fmj/553d37949569a17dfa13dc3b4f8e03d2_b.jpg",
      },
    ],
  },
  {
    id: 9,
    nomeAutor: "Luciany Aparecida",
    periodoVida: "(1982)",
    imagem:
      "https://expresso.estadao.com.br/wp-content/uploads/2024/03/Luciany-Aparecida-autora-de-Mata-Doce.jpg",
    textoSobre:
      "Luciany Aparecida, escritora e pesquisadora baiana, é autora do premiado romance “Mata Doce” (2023), que aborda memórias e identidades no interior da Bahia. Doutora em Letras, participou de diversas antologias e explora temas de história e literatura em sua obra.",
    arrayObras: [
      {
        nomeObra: "Mata doce (2023)",
        link: "https://www.amazon.com.br/Mata-Doce-Luciany-Aparecida/dp/8556522009/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2ML3THC6GH523&dib=eyJ2IjoiMSJ9.hUK0hvCunDlfKe-rCT82ja8w0RX8b5Ohahu_DpjYFmbDqG72O-XR7AiJ6JMasEUYrtIW9s7g1EiFTbX56wUflH7ghd7_UbxQxn6XswgBOMLZErkb0k1D6MBuGIl0UHwY_TRNmak3yEY8FXbhDg4pF8r7EU5N1mtgW9x6yf4Zp2QJ4Z7NohCCXZAc9eIjLwcYHEmed4VdoLs-wFcVv2TeTg.8wT_ub7rTHWCPo3JcSIaAwT7lSPxontIrd-ToTh4CP8&dib_tag=se&keywords=Mata+doce&qid=1736690539&sprefix=mata+doce%2Caps%2C414&sr=8-1&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9",
        fotoCapa: "https://m.media-amazon.com/images/I/91L-ejDRIEL._SY385_.jpg",
      },
      {
        nomeObra: "Joanna Mina (2022)",
        link: "https://www.amazon.com.br/JOANNA-MINA-LUCIANY-APARECIDA/dp/6589649065/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=G8WTXU5NHKQY&dib=eyJ2IjoiMSJ9.9c5AdW3acUEt1VoHq4h787vamNJQyQJ8WO_UV1Yjx7nMR5xlZ9IR_aqZZSWwfoOctaxvWf0mQKDqht-mYDn8nmTj66NcqXVruSTnIod3Ea1KVKtNG8lBo30xb8pex5N2XZ6O9al243KsUHOC9u88S4BrT96Iw-0gXSQTWbxrEANDLQ8w51WBU0NFtUDCm-gSdU4_RBOVwhDztnNhb4CVHYsoibUJ4Z9x6RI0vuF8uVk.dnHEagckrjZ3xO-KLvx8KnS_kFR6V3YWbA9lBsnvBlY&dib_tag=se&keywords=Joanna+Mina&qid=1736690606&sprefix=joanna+mina+%2Caps%2C552&sr=8-1&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9",
        fotoCapa: "https://m.media-amazon.com/images/I/51-Nr1OBuIL._SY342_.jpg",
      },
    ],
  },
  {
    id: 10,
    nomeAutor: "Solano Trindade",
    periodoVida: "(1908 - 1974)",
    imagem:
      "https://lh4.googleusercontent.com/proxy/ANtwxRLJ5xqtygaUiF-3XCyYPC0Lt5lsL5a0zjn8Z3cVGhfR0upOtN26D6lNG_BDQLj-itsI4e5UQiAc_FjaC1UhM1JA6K5XjyfnwJh0HQvm5rV4Ivx9iu85aq6hjfegBiGwyT8lcUCH4W9mujS4Uw",
    textoSobre:
      "Solano Trindade (1908-1974) foi um poeta, ator e ativista brasileiro, conhecido como o poeta do povo. Fundador do Teatro Popular Brasileiro, sua obra celebra a cultura afro-brasileira e denuncia o racismo e as desigualdades sociais.",
    arrayObras: [
      {
        nomeObra: "Poemas de uma Vida Simples (1944)",
        link: "https://www.amazon.com.br/Poemas-Antol%C3%B3gicos-Solano-Trindade/dp/8574922560/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1K1P94VJM8YIF&dib=eyJ2IjoiMSJ9.1meqTV7bwGalji7f0LclhwcSnfNxa1ulj_6PWYrWK6Y.DZBUA5DPT4L7UN3janQzakJL3mJdCDHWajwOXdXa8bU&dib_tag=se&keywords=Poemas+de+uma+Vida+Simples+solano+trindade&qid=1736690905&sprefix=poemas+de+uma+vida+simples+solano+trindade%2Caps%2C241&sr=8-1&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9",
        fotoCapa:
          " https://m.media-amazon.com/images/I/71aBRrXekLL._SY385_.jpg",
      },
      {
        nomeObra: "Seis Tempos de Poesia (1958)",
        link: "https://pergamum.ufscar.br/acervo/118641",
        fotoCapa:
          "https://d1o6h00a1h5k7q.cloudfront.net/imagens/img_m/15458/7094105_1.jpg",
      },
      {
        nomeObra: "Cantares ao Meu Povo (1961)",
        link: "https://pergamum.ufscar.br/acervo/106074",
        fotoCapa:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYPuPBVNXGcairHlaR39DNjQTcAToxlJT-AQ&s",
      },
    ],
  },
  {
    id: 11,
    nomeAutor: "Abdias do Nascimento",
    periodoVida: "(1914 - 2011)",
    imagem:
      "https://teatrojornal.com.br/wp-content/uploads/2022/01/abdias-nascimento_-foto-marcelo-faustini-2004-01-06-049.jpg",
    textoSobre:
      "Abdias do Nascimento foi um ativista, escritor, político e artista brasileiro. Fundador do Teatro Experimental do Negro, destacou-se na luta contra o racismo e na valorização da cultura afro-brasileira. Sua obra aborda identidade negra, desigualdade e resistência.",
    arrayObras: [
      {
        nomeObra: "Relações de Raça no Brasil (1950)",
        link: "https://pergamum.ufscar.br/acervo/119158",
        fotoCapa:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLc6HjLsh-ByQD84rVtZs3FHZObn-fIfwQUw&s",
      },
      {
        nomeObra: "Sortilégio (Mistério Negro) (1959)",
        link: "https://dedalus.usp.br/F/55KF8P1RQI92LQVN75SYXDFY1IJ85KQM2ANAGLUMVJHNGCK8CE-30276?func=full-set-set&set_number=000387&set_entry=000004&format=999",
        fotoCapa:
          "https://acdn.mitiendanube.com/stores/714/771/products/sortilegio_p040_cp1-0c76f5f30c50e6799416511628147069-1024-1024.jpg",
      },
      {
        nomeObra: "Dramas para Negros e Prólogo para Brancos (1961)",
        link: "https://pergamum.ufscar.br/acervo/106161",
        fotoCapa:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg-L14rbOmVajH9SXJQo-s7d2xfHzIwNfjZA&s",
      },
      {
        nomeObra: "O Negro Revoltado (1968)",
        link: "https://pergamum.ufscar.br/acervo/101957",
        fotoCapa:
          "https://image.isu.pub/121119193352-22ebb0d06bdc40e994abd9039f25381d/jpg/page_1_thumb_large.jpg",
      },
      {
        nomeObra: " Sortilégio II : Mistério Negro de Zumbi Redivivo (1979)",
        link: "https://pergamum.ufscar.br/acervo/101637",
        fotoCapa:
          "https://image.isu.pub/140905201624-0ceb5a0a497bd05a46b462f86bf062df/jpg/page_1_thumb_large.jpg",
      },
      {
        nomeObra: "O Quilombismo (2020)",
        link: "https://biblion.odilo.us/info/o-quilombismo-00908813",
        fotoCapa:
          "https://covers.odilo.io/public/OdiloPlace_Bookwire_Brasil_BR/9788527311762_ORIGINAL.jpg",
      },
    ],
  },
  {
    id: 12,
    nomeAutor: "Oliveira Silveira",
    periodoVida: "(1941 - 2009)",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/4/43/Oliveira_Silveira.jpg",
    textoSobre:
      "Oliveira Silveira foi um poeta, escritor e ativista brasileiro. Idealizador do Dia da Consciência Negra, sua obra destaca a valorização da cultura afro-brasileira e a luta contra o racismo, com poemas que celebram a identidade e a ancestralidade.",
    arrayObras: [
      {
        nomeObra: "Banzo, saudade negra (1970)",
        link: "https://enciclopedia.itaucultural.org.br/obras/120396-banzo-saudade-negra",
        fotoCapa:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6aPZklonTk_jW1ORbNAy76PYgBRByXdT0fw&s",
      },
      {
        nomeObra: "Roteiro dos tantãs (1981)",
        link: "https://sesc.i10bibliotecas.com.br/obra/381622",
        fotoCapa:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnkVW2wq4LdJ4eW5urHFWBH62VxU1V-fz79Q&s",
      },
      {
        nomeObra: "Poema sobre Palmares (1987)",
        link: "https://literaturars.com.br/2019/08/27/poemas-de-oliveira-silveira-na-voz-do-sopapo-poetico/",
        fotoCapa:
          "https://literaturars.com.br/wp-content/uploads/2019/08/poema-sobre-palmares-capa.jpg?w=688",
      },
      {
        nomeObra: "Anotações à margem (1994)",
        link: "https://sesc.i10bibliotecas.com.br/obra/383276",
        fotoCapa:
          "https://cultura.rs.gov.br/upload/arquivos/cargaWp20170943/27104311-capa-oliveira-silveira-738x1024.jpg",
      },
    ],
  },
  {
    id: 13,
    nomeAutor: "Petronilha Gonçalves e Silva",
    periodoVida: "(1942)",
    imagem:
      "https://lh4.googleusercontent.com/proxy/RuhxURJVxxHkrJbSFcsoy_hGU9OM2t0bTgr6P5xfN6cshW4UUj7E-zIwKel66vueSX18GFleTdi4Sk_G9xi-25uVWVAvhk4sJwgeo7W1UYxCdaMgAU9lTqn0tbjAXhK-o7E",
    textoSobre:
      "Petronilha Gonçalves e Silva é uma educadora, pesquisadora e ativista brasileira. Professora emérita da UFSCar, destacou-se por sua atuação em estudos sobre educação e relações étnico-raciais, contribuindo para a implementação da Lei 10.639/03, que tornou obrigatório o ensino de história e cultura afro-brasileira.",
    arrayObras: [
      {
        nomeObra:
          "O jogo das diferenças: o multiculturalismo e seus contextos (1998)",
        link: "https://pergamum.ufscar.br/acervo/131343",
        fotoCapa:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoRMK7y1M0lWl15i2SCWmuLXHYlvvESvh2cQ&s",
      },
      {
        nomeObra:
          "Educação e Ações Afirmativas: entre a justiça simbólica e a injustiça econômica (2003)",
        link: "https://www.gov.br/inep/pt-br/centrais-de-conteudo/acervo-linha-editorial/publicacoes-diversas/temas-interdisciplinares/educacao-e-acoes-afirmativas-entre-a-injustica-simbolica-e-a-injustica-economica",
        fotoCapa:
          "https://www.gov.br/inep/pt-br/imagens/acervo-linha-editorial/educacao_acoes_afirmativas_injustica_simbolica_injustica_economica.jpg",
      },
    ],
  },
  {
    id: 14,
    nomeAutor: "Geni Guimarães",
    periodoVida: "(1947)",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXlG5-5ThPl5HIvH1N6sk_1Mj5JqCi9I9dZg&s",
    textoSobre:
      "Geni Guimarães, escritora e poetisa brasileira nascida em 1947, é uma importante voz da literatura afro-brasileira. Sua obra aborda racismo, memória e identidade, com destaque para A Cor da Ternura (1989), que ganhou o Prêmio Jabuti.",
    arrayObras: [
      {
        nomeObra: "A cor da Ternura (1989)",
        link: "https://pergamum.ufscar.br/acervo/95036",
        fotoCapa:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhWfN2vjr_SQBrMcng9FC1-W3NxftgUuIt_Q&s",
      },
      {
        nomeObra: "O pênalti - infantil (2019)",
        link: "https://www.amazon.com.br/P%C3%AAnalti-Geni-Guimaraes/dp/8592736625",
        fotoCapa:
          " https://m.media-amazon.com/images/I/61CxPTQHzmL._SY342_.jpg",
      },
      {
        nomeObra: "Poemas do regresso (2020)",
        link: "https://sesc.i10bibliotecas.com.br/obra/502555",
        fotoCapa:
          "https://s3.amazonaws.com/acervo.i10bibliotecas/sesc/material-livro-similar/i383/3ba7ba080b2c206b2137d3f176323c2b_b.images",
      },
    ],
  },
  {
    id: 15,
    nomeAutor: "Jaime Sodré",
    periodoVida: "(1947 - 2020)",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQe6fvPRlDhROrnsJKr7Pz7T3lFp5gB_m4sw&s",
    textoSobre:
      "Jaime Sodré foi um historiador, escritor e ativista brasileiro. Especialista em cultura afro-brasileira e religiosidade, destacou-se por sua atuação na valorização das tradições afrodescendentes e pela defesa do patrimônio cultural negro no Brasil.",
    arrayObras: [
      {
        nomeObra:
          "Da diabolização à divinização: a criação do senso comum (2010)",
        link: "https://www.amazon.com.br/Diaboliza%C3%A7%C3%A3o-Diviniza%C3%A7%C3%A3o-Cria%C3%A7%C3%A3o-Senso-Comum/dp/8523207201/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=VI3E4ZQ7L6XI&dib=eyJ2IjoiMSJ9.bScug_IhIc73ktXOwprhdg.D-hzDtz9IPozszPm7lWNq2jFl-gk6N3SWWvKIsyeb94&dib_tag=se&keywords=Da+diaboliza%C3%A7%C3%A3o+%C3%A0+diviniza%C3%A7%C3%A3o%3A+a+cria%C3%A7%C3%A3o+do+senso+comum&qid=1736696224&sprefix=da+diaboliza%C3%A7%C3%A3o+%C3%A0+diviniza%C3%A7%C3%A3o+a+cria%C3%A7%C3%A3o+do+senso+comum%2Caps%2C332&sr=8-1",
        fotoCapa: "https://m.media-amazon.com/images/I/91OPFGlfVYL._SY342_.jpg",
      },
    ],
  },
  {
    id: 16,
    nomeAutor: "Aline França",
    periodoVida: "(1948)",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkV12IRYYLG-eerUAWcwu6ZQBHt15yzFrDsQ&s",
    textoSobre:
      "Aline França é uma escritora e pesquisadora brasileira, reconhecida por suas obras que abordam questões raciais, identidade e cultura afro-brasileira. Sua escrita é marcada pela valorização da experiência das mulheres negras e pelo enfrentamento do racismo estrutural na sociedade.",
    arrayObras: [
      {
        nomeObra: "A noite dos Cristais (1996); De Luís Fulano de tal;",
        link: "https://www.amazon.com.br/noite-dos-cristais-Lu%C3%ADs-Fulano/dp/8573261455/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3V17CJA1ZEU8O&dib=eyJ2IjoiMSJ9.WSZ-PLNk1K0Appid75m1vA.AHpEeUFCPZcWgyrKZGExANJzsElvBbcfj2Ql8TIKpKo&dib_tag=se&keywords=A+noite+dos+Cristais+%281996%29%3B+De+Lu%C3%ADs+Fulano+de+tal%3B&qid=1736696532&sprefix=a+noite+dos+cristais+1996+de+lu%C3%ADs+fulano+de+tal+%2Caps%2C302&sr=8-1&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9",
        fotoCapa: "https://m.media-amazon.com/images/I/A1xZdoQ4NVL._SY385_.jpg",
      },
    ],
  },
  {
    id: 17,
    nomeAutor: "Luiz Silva, Cuti",
    periodoVida: "(1951)",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa_T_mFjqdRVCedDLcw_947dI2YAErRRXWIg&s",
    textoSobre:
      "Luiz Silva, conhecido como Cuti , é um escritor, poeta e ativista brasileiro. Focada na literatura afro-brasileira, sua obra aborda temas como identidade, resistência e racismo, com destaque para sua atuação na preservação e valorização da cultura negra. Cuti também é um nome importante no movimento literário e cultural negro no Brasil.",
    arrayObras: [
      {
        nomeObra: "Contos Escolhidos (2016)",
        link: "https://dedalus.usp.br/F/55KF8P1RQI92LQVN75SYXDFY1IJ85KQM2ANAGLUMVJHNGCK8CE-15752?func=full-set-set&set_number=000544&set_entry=000009&format=999",
        fotoCapa:
          "https://cdn.dlojavirtual.com/static1/105196/sku/632_1181.jpg",
      },
      {
        nomeObra: "Negrhúmus líricos (2017)",
        link: "https://pergamum.ufscar.br/acervo/200839",
        fotoCapa:
          "https://pergamum.ufscar.br/pergamumweb/vinculos/000019/0000192e.jpeg",
      },
      {
        nomeObra: "A Pupila é Preta (2020)",
        link: "https://sesc.i10bibliotecas.com.br/livro/765564",
        fotoCapa:
          "https://s3.amazonaws.com/acervo.i10bibliotecas/sesc/material-livro-similar/uwv2/c7e120224a5c87db4873bb0eaa1ca5a3_b.jpg",
      },
    ],
  },
  {
    id: 18,
    nomeAutor: "Miriam Alves",
    periodoVida: "(1952)",
    imagem:
      "https://circulodepoemas.com.br/wp-content/uploads/2021/12/miriam_cp.jpg",
    textoSobre:
      "Miriam Alves é uma escritora e poetisa brasileira, reconhecida por sua obra que aborda questões raciais, sociais e de gênero. Seus textos exploram a identidade negra e a luta contra o racismo, destacando a vivência da mulher negra na sociedade brasileira.",
    arrayObras: [
      {
        nomeObra: "Criação crioula, nu elefante branco (1987)",
        link: "https://pergamum.ufscar.br/acervo/157208",
        fotoCapa:
          "https://assets.isu.pub/document-structure/230731151720-f4e6eda23cfd73b91537d3b75dc4611a/v1/7fce7836868cd5f91d3f5ce6d8d2075a.jpeg",
      },
    ],
  },
  {
    id: 19,
    nomeAutor: "Esmeralda Ribeiro",
    periodoVida: "(1958)",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmN7EG_Mcmc-VPaFHdF5nsh5MN83uMxMbj5w&s",
    textoSobre:
      "Esmeralda Ribeiro é uma escritora, poetisa e professora brasileira, conhecida por sua obra que aborda temas como identidade, memória e a luta contra o racismo. Sua escrita reflete as experiências de mulheres negras e a valorização da cultura afro-brasileira, destacando-se no cenário literário brasileiro.",
    arrayObras: [
      {
        nomeObra: "Malungos e Milongas: Conto (1988)",
        link: "https://dedalus.usp.br/F/55KF8P1RQI92LQVN75SYXDFY1IJ85KQM2ANAGLUMVJHNGCK8CE-21104?func=full-set-set&set_number=000581&set_entry=000001&format=999",
        fotoCapa:
          "https://alawit.org/assets/img/malungos-e-milongas-conto-ribeiro-1988.jpg",
      },
    ],
  },
  {
    id: 20,
    nomeAutor: "Mel Adún",
    periodoVida: "(1978)",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzLfDD-9uSndUjRxypU_qOg5sP3VprzhKdjg&s",
    textoSobre:
      "Mel Adún é uma escritora e poeta brasileira, conhecida por sua obra que explora temas como, resistência e a experiência da mulher negra. Sua escrita é marcada pela busca por voz e representação para as comunidades marginalizadas, refletindo questões sociais e culturais no Brasil.",
    arrayObras: [
      {
        nomeObra: "A lua cheia de vento (2015)",
        link: "https://editoraogums.com/product/a-lua-cheia-de-vento/",
        fotoCapa:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqXcHFovIwYsNzFSK8l8MZoK6IwDjub4XVxg&s",
      },
    ],
  },
  {
    id: 21,
    nomeAutor: "Lívia Natália",
    periodoVida: "(1979)",
    imagem:
      "https://static.wixstatic.com/media/0a154a_640a5bd71b704cc4acc3879825290be1~mv2_d_2244_2376_s_2.png/v1/fill/w_568,h_602,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0a154a_640a5bd71b704cc4acc3879825290be1~mv2_d_2244_2376_s_2.png",
    textoSobre:
      "Lívia Natália é uma escritora, poetisa e pesquisadora brasileira, destacada por sua atuação na literatura afro-brasileira. Sua obra aborda temas como identidade, ancestralidade e a luta contra o racismo, com foco na experiência da mulher negra e nas questões de gênero e classe social.",
    arrayObras: [
      {
        nomeObra: "Água Negra (2010)",
        link: "https://www.amazon.com.br/%C3%81gua-negra-L%C3%ADvia-Nat%C3%A1lia/dp/8598866288/ref=sr_1_2?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=P271DMHS8QF4&dib=eyJ2IjoiMSJ9.3Z_jS7x0AQZpPsSjWnYljnc6EReeHYuea69lWx1KWVIW-qaYQOo0_KCL_lR6r6qdwIo9RTQnu7jhalKJJdqO1PhnXs9NEhiAEpTIYRYlc0Wq9FKyLmgausT2JJPLFs_UlhVq-_OdZ1e-pVTZZNAesQ.vEuPNdB_Tnc-veAG0LdpKIf9-_yrkjqpHOL23ArmyCc&dib_tag=se&keywords=%C3%81gua+Negra+livia+natalia&qid=1736699856&sprefix=%C3%A1gua+negra+livia+natalia%2Caps%2C207&sr=8-2",
        fotoCapa: "https://m.media-amazon.com/images/I/419N0RGPfvL._SY385_.jpg",
      },
      {
        nomeObra: "Correntezas e Outros Estudos Marinhos (2015)",
        link: "https://www.amazon.com.br/Correntezas-outros-estudos-marinhos-Nat%C3%A1lia-ebook/dp/B087CXSKQ2/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=17NJP25858NF3&dib=eyJ2IjoiMSJ9.4iT8f53DPho6d_rGDjzRxw.kOK8B6kOQUNpycnEK6H-i_4rIU_LxPul-ry6iVVICoo&dib_tag=se&keywords=Correntezas+e+Outros+Estudos+Marinhos+livia+natalia&qid=1736700229&sprefix=correntezas+e+outros+estudos+marinhos+livia+natalia%2Caps%2C591&sr=8-1",
        fotoCapa: "https://m.media-amazon.com/images/I/91sYNpq2bZL._SY342_.jpg",
      },
      {
        nomeObra: "Água Negra e Outras Águas (2016)",
        link: "https://sesc.i10bibliotecas.com.br/livro/865862",
        fotoCapa:
          "https://img.skoob.com.br/Zkmkt3_dZscj29CRz6GOonf8bkU=/600x0/center/top/filters:format(jpeg)/https://skoob.s3.amazonaws.com/livros/638436/GUA_NEGRA_E_OUTRAS_AGUAS_1510178192638436SK1510178192B.jpg",
      },
    ],
  },
  {
    id: 22,
    nomeAutor: "Elizandra Souza",
    periodoVida: "(1983)",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMqskYTQGfroouNY5FtseWppbPaFVpgCzkMA&s",
    textoSobre:
      "Elizandra Souza é uma escritora, poetisa e ativista brasileira, conhecida por suas obras que abordam questões de identidade, resistência e vivência de mulheres negras. Sua escrita é marcada pela valorização da cultura afro-brasileira e pela denúncia do racismo estrutural presente na sociedade.",
    arrayObras: [
      {
        nomeObra: "Filha do fogo: doze contos de amor e cura (2020)",
        link: "https://www.amazon.com.br/Filha-do-Fogo-Elizandra-Souza/dp/6556125245",
        fotoCapa: "https://m.media-amazon.com/images/I/91gVbQnXOmL._SY385_.jpg",
      },
      {
        nomeObra:
          "Quem pode acalmar esse redemoinho de ser mulher preta? (2021)",
        link: "https://sesc.i10bibliotecas.com.br/busca?formOption=3&searchKeywords=Quem+pode+acalmar+esse+redemoinho+de+ser+mulher+preta%3F+&optionFilter=T",
        fotoCapa:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlNhCEbxHYnvj_mM0915csmkAjEXP27I9Qrw&s",
      },
    ],
  },
  {
    id: 23,
    nomeAutor: "Anajá Caetano",
    periodoVida: "(Data não encontrada)",
    imagem:
      "https://i.ytimg.com/vi/ASjRya2P1AQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC4bEXZGEqkeNGoERllWocdE-AXuQ",
    textoSobre:
      "Anajá Caetano é uma escritora e poeta brasileira, conhecida por sua identidade que aborda temas como, resistência e a luta contra o racismo. Seu trabalho reflete a vivência da mulher negra na sociedade e destaca a importância da cultura afro-brasileira.",
    arrayObras: [
      {
        nomeObra: "Negra Efigênia, paixão do senhor branco (1966).",
        link: "https://pergamum.ufscar.br/acervo/114349",
        fotoCapa:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReDnPixHaKD5cB6kONdtY0FKZjFscvKXKE2A&s",
      },
    ],
  },
  {
    id: 24,
    nomeAutor: "Itamar Vieira Junior",
    periodoVida: "(1979)",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGJGLuFVtXJ2-y3joGqBj1bXUXzCKQlWDPhg&s",
    textoSobre:
      "Itamar Vieira Junior é um escritor e geógrafo brasileiro, conhecido por sua obra que aborda temas como identidade, cultura e as questões sociais do Brasil, com destaque para as questões negras no país. Seu romance mais famoso, Torto Arado (2018), explora a vida no sertão nordestino e traz à tona a luta contra a desigualdade, a resistência e a vivência de personagens rurais, muitas vezes negros, que enfrentam a herança da escravidão e o racismo estrutural ainda presente na sociedade brasileira. A obra também reflete sobre a ancestralidade e a resistência das populações negras no contexto rural brasileiro.",
    arrayObras: [
      {
        nomeObra: "Torto arado (2019)",
        link: "https://pergamum.ufscar.br/acervo/203449",
        fotoCapa: "https://m.media-amazon.com/images/I/61Sor5r12SL.jpg",
      },
      {
        nomeObra: "Salvar o fogo (2023)",
        link: "https://sesc.i10bibliotecas.com.br/livro/848462",
        fotoCapa:
          "https://s3.amazonaws.com/acervo.i10bibliotecas/sesc/material-livro-similar/1c43/e19caaf758bd95c4e6436790a78e6bd1_b.jpg",
      },
      {
        nomeObra: "Chupim (2024)",
        link: "https://sesc.i10bibliotecas.com.br/busca?formOption=3&searchKeywords=Chupim+&optionFilter=T",
        fotoCapa:
          "https://s3.amazonaws.com/acervo.i10bibliotecas/sesc/material-livro-similar/787e/3edc69e4c0719d4b164b9c9b36680366_b.jpg",
      },
    ],
  },
  {
    id: 25,
    nomeAutor: "Jarid Arraes",
    periodoVida: "(1991)",
    imagem:
      "https://img.skoob.com.br/xbiTKSU2dz5BEGKF97ar51scyIM=/200x/center/top/smart/filters:format(jpeg)/https://skoob.s3.amazonaws.com/autores/16956/16956SK1569752684G.jpg",
    textoSobre:
      "Jarid Arraes é um escritor e poeta brasileiro, conhecido por sua obra que explora questões de identidade, cultura e resistência, com ênfase na experiência da mulher negra e nordestina. Seu livro As Lendas de Dandara (2018) mistura ficção e história, trazendo à tona a figura de Dandara, ícone da luta contra a escravidão no Brasil.",
    arrayObras: [
      {
        nomeObra: "As Lendas de Dandara (2018)",
        link: "https://sesc.i10bibliotecas.com.br/livro/228611",
        fotoCapa:
          "https://m.media-amazon.com/images/I/61dMs64kxpL._AC_UF1000,1000_QL80_.jpg",
      },
      {
        nomeObra: "Redemoinho em dia quente (2019)",
        link: "https://sesc.i10bibliotecas.com.br/livro/151510",
        fotoCapa:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx0fjyNng6z5HEa2LZ3bhAvZGw_WYfPFTKrg&s",
      },
      {
        nomeObra: "Corpo desfeito (2022)",
        link: "https://sesc.i10bibliotecas.com.br/livro/853808",
        fotoCapa:
          "https://s3.amazonaws.com/acervo.i10bibliotecas/sesc/material-livro-similar/htn1/e6ee3f7eda72f1b4f04f021091524760_b.jpg",
      },
    ],
  },
  {
    id: 26,
    nomeAutor: "Mário de Andrade",
    periodoVida: "(1893 - 1945)",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJrH5IszGYJPbM1XmlDdEmST6Zhr9Y2MrRMA&s",
    textoSobre:
      "Mário de Andrade (1893-1945) foi um escritor, musicólogo e um dos principais nomes do modernismo brasileiro. Autor de obras como Macunaíma , sua literatura integra a cultura popular e a modernidade, explorando temas como a identidade nacional, o folclore e as manifestações culturais brasileiras. Ele também teve grande influência no movimento antropofágico, que visava a valorização da cultura indígena e negra no Brasil.",
    arrayObras: [
      {
        nomeObra: "Amar, verbo intransitivo (1927)",
        link: "https://pergamum.ufscar.br/acervo/113163",
        fotoCapa:
          "https://images-americanas.b2w.io/produtos/245059/imagens/livro-amar-verbo-intransitivo/245059_1_large.jpg",
      },
      {
        nomeObra: "Macunaíma (1928)",
        link: "https://pergamum.ufscar.br/acervo/113349",
        fotoCapa:
          "https://m.media-amazon.com/images/I/71oKejQDiNL._AC_UF1000,1000_QL80_.jpg",
      },
      {
        nomeObra: "O banquete (2000)",
        link: "https://pergamum.ufscar.br/acervo/109008",
        fotoCapa:
          "https://m.media-amazon.com/images/I/61HcpW4GjSL._AC_UF1000,1000_QL80_.jpg",
      },
    ],
  },
  {
    id: 27,
    nomeAutor: "Marcelo D’Salete",
    periodoVida: "(1979)",
    imagem:
      "https://revistaogrito.com/wp-content/uploads/2020/06/MarceloDSalete_DSC6606_Rafael-Roncato.jpg",
    textoSobre:
      "Marcelo D'Salete é um ilustrador, quadrinista e escritor brasileiro, conhecido por suas obras que abordam a história e a cultura afro-brasileira.",
    arrayObras: [
      {
        nomeObra: "Angola Janga (2017)",
        link: "https://sesc.i10bibliotecas.com.br/livro/36259",
        fotoCapa:
          "https://s3.amazonaws.com/acervo.i10bibliotecas/sesc/material-livro-similar/ar4q/f64540e8129c8ac7b63d2d5c734cc2c1_b.jpg",
      },
    ],
  },
  {
    id: 28,
    nomeAutor: "Ruth Guimarães",
    periodoVida: "(1920 - 2014)",
    imagem:
      "https://s2.glbimg.com/Q9DPiE7gOv9M2MMHHv0GV4A_0LA=/e.glbimg.com/og/ed/f/original/2020/10/16/2570273594_963cf57444_o.jpg",
    textoSobre:
      "Ruth Guimarães foi uma escritora e poetisa brasileira, destacando-se por suas obras que abordam a realidade social e cultural do Brasil, especialmente a vivência de mulheres e negras. Sua literatura é marcada pela sensibilidade e pela representação de questões raciais, sociais e de gênero.",
    arrayObras: [
      {
        nomeObra: "Água Funda (1949)",
        link: "https://biblion.odilo.us/info/agua-funda-01147124",
        fotoCapa:
          "https://covers.odilo.io/public/OdiloPlace_Bookwire_Brasil_BR/9786555251661_3629_640x908.jpg",
      },
      {
        nomeObra: "Contos negros (1980)",
        link: "https://sesc.i10bibliotecas.com.br/livro/726788",
        fotoCapa:
          "https://s3.amazonaws.com/acervo.i10bibliotecas/sesc/material-livro-similar/nkit/01a40231068be5b5fd0fd521278315eb_b.jpg",
      },
    ],
  },
  {
    id: 29,
    nomeAutor: "Paulo Lins",
    periodoVida: "(1958)",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfQSfCYZVxXiFq4ei1x-ws0Z0pmzZ5Dlv0scHabvGOe_XR_yUKKUcreovrdGHi9xVppmk&usqp=CAU",
    textoSobre:
      "Paulo Lins é um escritor e roteirista brasileiro, conhecido principalmente por seu romance Cidade de Deus (1997), que retrata a realidade das favelas cariocas e a violência urbana. Sua obra explora as questões sociais, raciais e de classe, destacando as complexas relações de poder e a luta pela sobrevivência nas comunidades marginalizadas.",
    arrayObras: [
      {
        nomeObra: "Cidade de Deus (1997)",
        link: "https://biblion.odilo.us/info/cidade-de-deus-00273913",
        fotoCapa:
          "https://covers.odilo.io/public/OdiloPlace_Bookwire_Brasil_BR/9788542214215.jpg",
      },
      {
        nomeObra: "Desde que o samba é samba (2012)",
        link: "https://biblion.odilo.us/info/desde-que-o-samba-e-samba-00896578",
        fotoCapa:
          "https://covers.odilo.io/public/OdiloPlace_Bookwire_Brasil_BR/9788576658986.jpg",
      },
      {
        nomeObra: "Dois amores (2019)",
        link: "https://biblion.odilo.us/info/dois-amores-00932899",
        fotoCapa:
          "https://covers.odilo.io/public/OdiloPlace_Bookwire_Brasil_BR/9786586135756_ORIGINAL.jpg",
      },
    ],
  },
  {
    id: 30,
    nomeAutor: "Maria Firmina dos Reis",
    periodoVida: "(1822 - 1917)",
    imagem:
      "https://multirio.rio.rj.gov.br/images/img_2020_10/Mulheres_Ilustres_do_Brasil_Maria_Benedicta_de_Borghman.png",
    textoSobre:
      "Maria Firmina dos Reis foi uma escritora e professora brasileira, considerada a primeira romancista negra do Brasil. Sua obra mais conhecida, Úrsula (1859), aborda questões de racismo, liberdade e a situação dos negros no Brasil, destacando-se como uma das primeiras a trazer à tona a temática da escravidão e da opressão racial na literatura brasileira.",
    arrayObras: [
      {
        nomeObra: "Úrsula (1859)",
        link: "https://dedalus.usp.br/F/SDCP2JGXRPMEFI6YVR8BBNE6J3VVD29FGUG9DU5NKG7HUBNAQL-13790?func=full-set-set&set_number=000750&set_entry=000003&format=999",
        fotoCapa:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFnCJbWUti_6viSGOFbCH3OFMojFxzjap-rw&s",
      },
      {
        nomeObra: "A escrava (1887)",
        link: "https://biblion.odilo.us/info/a-escrava-conto-original-00906406",
        fotoCapa:
          "https://covers.odilo.io/public/OdiloPlace_Bookwire_Brasil_BR/9786586655278_ORIGINAL.jpg",
      },
      {
        nomeObra: "Cantos à beira-mar (1871)",
        link: "https://biblion.odilo.us/info/cantos-a-beira-mar-00906883",
        fotoCapa:
          "https://covers.odilo.io/public/OdiloPlace_Bookwire_Brasil_BR/9788583864295_ORIGINAL.jpg",
      },
    ],
  },
  {
    id: 31,
    nomeAutor: "Lima Barreto",
    periodoVida: "(1881 - 1922)",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmNFb9M_cRxXlBjRDeONmT_HN6w7KgIOKgpA&s",
    textoSobre:
      "Lima Barreto (1881-1922) foi um escritor e jornalista brasileiro, reconhecido por sua crítica social e abordagem das questões raciais e sociais do Brasil. Autor de obras como Triste Fim de Policarpo Quaresma , sua literatura retrata as desigualdades, o racismo e as contradições da sociedade brasileira do início do século XX.",
    arrayObras: [
      {
        nomeObra: "O homem que sabia javanes (1911)",
        link: "https://pergamum.ufscar.br/acervo/94693",
        fotoCapa:
          "https://m.media-amazon.com/images/I/81-FwJ0xYxL._UF894,1000_QL80_.jpg",
      },
      {
        nomeObra: "Triste fim de policarpo quaresma (1915)",
        link: "https://pergamum.ufscar.br/acervo/37066",
        fotoCapa:
          "https://m.media-amazon.com/images/I/71e5C8gV19L._AC_UF1000,1000_QL80_.jpg",
      },
      {
        nomeObra: "Numa e a Ninfa (1915)",
        link: "https://biblion.odilo.us/info/numa-e-a-ninfa-00935323",
        fotoCapa:
          "https://covers.odilo.io/public/OdiloPlace_Bookwire_Brasil_BR/9788569002932_ORIGINAL.jpg",
      },
      {
        nomeObra: "Clara dos Anjos (1948)",
        link: "https://pergamum.ufscar.br/acervo/37068",
        fotoCapa:
          "https://s5.static.brasilescola.uol.com.br/be/2022/11/capa-do-livro-clara-dos-anjos-de-lima-barreto-publicado-pela-editora-ftd1.jpg",
      },
    ],
  },
  {
    id: 32,
    nomeAutor: "Machado de Assis",
    periodoVida: "(1839 - 1908)",
    imagem:
      "https://portal-assets.icnetworks.org/uploads/picture/file/108467/resized_Machado_de_Assis_-_Reprodu%C3%A7%C3%A3o_fotogr%C3%A1fica_Correio_da_Manh%C3%A3_-_Acervo_Arquivo_Nacional.jpg",
    textoSobre:
      "Machado de Assis (1839-1908) foi um escritor, poeta e cronista brasileiro, considerado um dos maiores nomes da literatura mundial. Fundador da Academia Brasileira de Letras, destacou-se por sua obra inovadora e profunda, com clássicos como Memórias Póstumas de Brás Cubas e Dom Casmurro , que abordam temas como a condição humana, a hipocrisia social e as desigualdades no Brasil.",
    arrayObras: [
      {
        nomeObra: "Helena (1876)",
        link: "https://pergamum.ufscar.br/acervo/37039",
        fotoCapa:
          "https://a-static.mlcdn.com.br/1500x1500/helena-serie-bom-livro-editora-atica-atica/oliststore/mgl207ovlpmzigmu/f2e9c4a2977bdb398be90b642af9d99b.jpeg",
      },
      {
        nomeObra: "Memórias Póstumas de Brás Cubas (1881)",
        link: "https://pergamum.ufscar.br/acervo/113661",
        fotoCapa:
          "https://m.media-amazon.com/images/I/91GAAzBixYL._UF894,1000_QL80_.jpg",
      },
      {
        nomeObra: "O Alienista (1882)",
        link: "https://pergamum.ufscar.br/acervo/25403",
        fotoCapa:
          "https://upload.wikimedia.org/wikipedia/pt/c/c1/Resumo-do-livro-o-alienista-de-machado-de-assis.jpg",
      },
      {
        nomeObra: "Quincas Borba (1891)",
        link: "https://pergamum.ufscar.br/acervo/37044",
        fotoCapa:
          "https://network.grupoabril.com.br/wp-content/uploads/sites/4/2016/12/quincas-borba.jpg?quality=70&strip=all",
      },
      {
        nomeObra: "Dom Casmurro (1899)",
        link: "https://pergamum.ufscar.br/acervo/151056",
        fotoCapa:
          "https://down-br.img.susercontent.com/file/36ab761f2ec82a329e469d8d69c17932",
      },
      {
        nomeObra: "Esaú e Jacó (1904)",
        link: "https://pergamum.ufscar.br/acervo/37047",
        fotoCapa:
          "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m1po6qjs05jc2d",
      },
    ],
  },
  {
    id: 33,
    nomeAutor: "Cruz e Souza",
    periodoVida: "(1861 - 1898)",
    imagem:
      "https://s3.static.brasilescola.uol.com.br/be/2020/09/cruz-souza.jpg",
    textoSobre:
      "Cruz e Souza (1861-1898) foi um poeta brasileiro, considerado o principal representante do simbolismo no Brasil. Sua obra, marcada por uma linguagem sofisticada e introspectiva, aborda temas como espiritualidade, sofrimento e a luta contra o racismo, refletindo sua vivência como homem negro em uma sociedade desigual.",
    arrayObras: [
      {
        nomeObra: "Tropos e Fantasias (1885)",
        link: "https://dedalus.usp.br/F/MJAXYFX4I7F3N6T63T3A9694NC12K1FFMG3LL4QX7SMNQL3L11-19728?func=full-set-set&set_number=001052&set_entry=000002&format=999",
        fotoCapa:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVpd7N_hL9Ir9Nkd0elQp5tDXjt4TWm2qnTQ&s",
      },
      {
        nomeObra: "Broqueis (1893)",
        link: "https://pergamum.ufscar.br/acervo/152351",
        fotoCapa:
          "https://m.media-amazon.com/images/I/61CoEyR1iOL._AC_UF1000,1000_QL80_.jpg",
      },
      {
        nomeObra: "Missal (1893)",
        link: "https://pergamum.ufscar.br/acervo/109713",
        fotoCapa:
          "https://m.media-amazon.com/images/I/91fOU-fcUsS._AC_UF1000,1000_QL80_.jpg",
      },
      {
        nomeObra: "Evocações (1898)",
        link: "https://dedalus.usp.br/F/MJAXYFX4I7F3N6T63T3A9694NC12K1FFMG3LL4QX7SMNQL3L11-21238?func=full-set-set&set_number=001062&set_entry=000003&format=999",
        fotoCapa:
          "https://m.media-amazon.com/images/I/61rPM7+OnaL._AC_UF1000,1000_QL80_.jpg",
      },
      {
        nomeObra: "Farois (1900)",
        link: "https://pergamum.ufscar.br/acervo/152351",
        fotoCapa:
          "https://m.media-amazon.com/images/I/71-YFVzuY9L._UF894,1000_QL80_.jpg",
      },
    ],
  },
  {
    id: 34,
    nomeAutor: "Luiz Gama",
    periodoVida: "(1830 - 1882)",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2sUD78GyjwXWbE58pBnhXRWjGIeFF9UrGzw&s",
    textoSobre:
      "Luiz Gama foi um advogado, jornalista e poeta brasileiro, conhecido por sua luta abolicionista e pela defesa dos escravizados no Brasil. Nascido livre e vendido como escravo, conquistou a liberdade e dedicou sua vida a combater a escravidão e o racismo.",
    arrayObras: [
      {
        nomeObra: "Primeiras trovas burlescas de Getulino (1859)",
        link: "https://biblion.odilo.us/info/primeiras-trovas-burlescas-de-getulino-00914755",
        fotoCapa:
          "https://covers.odilo.io/public/OdiloPlace_Bookwire_Brasil_BR/9786555526721_ORIGINAL.jpg",
      },
      {
        nomeObra: "Profecia ( 1862-1865)",
        link: "https://projetoluizgama.hedra.com.br/OBRAS#:~:text=Profecia,al%C3%A9m%20da%20den%C3%BAncia%20da%20escravid%C3%A3o",
        fotoCapa:
          "https://freight.cargo.site/w/750/i/cc5546e397b427c7dcbcf997227918e8046d1f2cab245434f029c08a8975d566/profecia.jpg",
      },
      {
        nomeObra: "Comédia (1866-1867)",
        link: "https://projetoluizgama.hedra.com.br/OBRAS#:~:text=Profecia,al%C3%A9m%20da%20den%C3%BAncia%20da%20escravid%C3%A3o",
        fotoCapa:
          "https://freight.cargo.site/w/750/i/6439f010c5f1a04f0fbf8c8268b6f8d09552eb17557ceeb1dbea277ded8fe9e7/GAMA-3.png",
      },
    ],
  },

  {
    id: 35,
    nomeAutor: "Lelia Gonzalez",
    periodoVida: "(1935 - 1994)",
    imagem:
      "https://images02.brasildefato.com.br/9de9cfdccfeb0917728602204b60ec77.jpeg",
    textoSobre:
      "Lélia Gonzalez foi uma intelectual, antropóloga e ativista brasileira, pioneira no movimento negro e feminista. Suas obras e ações destacaram a importância de combater o racismo, o sexismo e a desigualdade, promovendo a valorização da cultura afro-brasileira e das mulheres negras.",
    arrayObras: [
      {
        nomeObra: "Lugar de negro (1982)",
        link: "https://sesc.i10bibliotecas.com.br/livro/805091",
        fotoCapa:
          "https://s3.amazonaws.com/acervo.i10bibliotecas/sesc/material-livro-similar/basm/6c62198186e20e5e9debd540b40167c9_b.jpg",
      },
      {
        nomeObra: "Festas Populares no Brasil (1987)",
        link: "https://sesc.i10bibliotecas.com.br/obra/543559",
        fotoCapa:
          "https://s3.amazonaws.com/acervo.i10bibliotecas/sesc/material-livro-similar/c75t/2e239586bec6e0e0ef83342777b2c206_b.images",
      },
    ],
  },

  {
    id: 36,
    nomeAutor: "Cida Bento",
    periodoVida: "(1952)",
    imagem:
      "https://cdl-static.s3-sa-east-1.amazonaws.com/colaboradores/11433_gg.jpg",
    textoSobre:
      "Cida Bento é psicóloga, escritora e ativista brasileira, reconhecida por sua atuação na luta contra o racismo e na promoção da igualdade racial no mercado de trabalho. Diretora do Centro de Estudos das Relações de Trabalho e Desigualdades (CEERT), foi eleita uma das 50 pessoas mais influentes do mundo pela igualdade racial pela revista The Economist .",
    arrayObras: [
      {
        nomeObra: "Estudos sobre branquitude e branqueamento no Brasil (2012)",
        link: "https://www.amazon.com.br/Psicologia-social-racismo-branquitude-branqueamento-ebook/dp/B06XJ9SDM6",
        fotoCapa: "https://m.media-amazon.com/images/I/71nXRQrh8ML._SY385_.jpg",
      },
      {
        nomeObra: "Pacto da Branquitude (2022)",
        link: "https://sesc.i10bibliotecas.com.br/livro/505224",
        fotoCapa:
          "https://s3.amazonaws.com/acervo.i10bibliotecas/sesc/material-livro-similar/y7hf/268624c20396d02ae85ded8d4c7b653f_b.jpg",
      },
    ],
  },
];

let arrayObjetosAutoreEstrangeiros = [
  {
    id: 1,
    nomeAutor: "Toni Morrison",
    periodoVida: "(1931–2019)",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Toni_Morrison.jpg/1200px-Toni_Morrison.jpg",
    textoSobre:
      "Toni Morrison foi uma escritora e editora norte-americana, reconhecida por seu impacto na literatura afro-americana. Sua obra abordou temas de identidade e racismo, e ela foi a primeira mulher afro-americana a receber o Nobel de Literatura.",
    arrayObras: [
      {
        nomeObra: "Amada (1987)",
        link: "https://pergamum.ufscar.br/acervo/126584",
        fotoCapa: "https://m.media-amazon.com/images/I/716HwTDceaL.jpg",
      },
      {
        nomeObra: "O olho mais azul (1970)",
        link: "https://pergamum.ufscar.br/acervo/132398",
        fotoCapa:
          "https://m.media-amazon.com/images/I/51g-mwa+v-L._AC_UF1000,1000_QL80_.jpg",
      },
      {
        nomeObra: "Sula (1973)",
        link: "https://dedalus.usp.br/F/GLKGBLC1EU6T44MHDNPKD1N9V9R6VTBBDT4C16NGHRQE3ATP3J-33985?func=full-set-set&set_number=001038&set_entry=000001&format=999",
        fotoCapa:
          "https://m.media-amazon.com/images/I/61IaYjf0EgL._AC_UF1000,1000_QL80_.jpg",
      },
      {
        nomeObra: "A Canção de Solomon (1977)",
        link: "https://pergamum.ufscar.br/acervo/122513",
        fotoCapa:
          "https://img.skoob.com.br/f4Ah_JC6YER8D8t3ZxocY9U6a6Y=/200x/center/top/smart/filters:format(jpeg)/https://skoob.s3.amazonaws.com/livros/90408/A_CANO_DE_SOLOMON_1347297422B.jpg",
      },
      {
        nomeObra: "Jazz (1992)",
        link: "https://pergamum.ufscar.br/acervo/126584",
        fotoCapa:
          "https://m.media-amazon.com/images/I/71jX-qNeDkL._AC_UF1000,1000_QL80_.jpg",
      },
    ],
  },
  {
    id: 2,
    nomeAutor: "Alexandre Dumas",
    periodoVida: "(1802-1870)",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/0/06/Alexander_Dumas_p%C3%A8re_par_Nadar_-_Google_Art_Project.jpg",
    textoSobre:
      "Alexandre Dumas foi um escritor francês, famoso por seus romances históricos e suas obras de aventuras. Sua habilidade em criar personagens memoráveis e enredos emocionantes o consolidou como um dos maiores escritores franceses do século XIX.",
    arrayObras: [
      {
        nomeObra: "O conde de monte cristo (1846)",
        link: "https://biblion.odilo.us/info/o-conde-de-monte-cristo-edicao-comentada-e-ilustrada-00910257",
        fotoCapa:
          "https://cdl-static.s3-sa-east-1.amazonaws.com/blog/artigo/6739/images/o-conde-de-monte-cristo-edicao-bolso-de-luxo.jpg",
      },
      {
        nomeObra: "Os três mosqueteiros (1844)",
        link: "https://biblion.odilo.us/info/os-tres-mosqueteiros-00910481",
        fotoCapa:
          "https://m.media-amazon.com/images/I/71E6onsCl+L._AC_UF1000,1000_QL80_.jpg",
      },
      {
        nomeObra: "Vinte anos depois (1845)",
        link: "https://biblion.odilo.us/info/vinte-anos-depois-edicao-comentada-e-ilustrada-00910726",
        fotoCapa:
          "https://cdl-static.s3-sa-east-1.amazonaws.com/covers/gg/9788537816875/vinte-anos-depois-edicao-comentada-e-ilustrada.jpg",
      },
      {
        nomeObra: "A rainha Margot (1845)",
        link: "https://biblion.odilo.us/info/a-rainha-margot-00912378",
        fotoCapa:
          "https://m.media-amazon.com/images/I/71MVKYpvEPL._AC_UF1000,1000_QL80_.jpg",
      },
      {
        nomeObra: "A tulipa negra (1850)",
        link: "https://biblion.odilo.us/info/a-tulipa-negra-01143564",
        fotoCapa:
          "https://m.media-amazon.com/images/I/71nV+H8rw7L._AC_UF1000,1000_QL80_.jpg",
      },
    ],
  },
  {
    id: 3,
    nomeAutor: "Octavia Butler",
    periodoVida: "(1947-2006)",
    imagem:
      "https://images.squarespace-cdn.com/content/v1/5af9a86fc3c16a3922fe3d13/1633709567752-YTANLX708KW0LXMZGU0Q/OEBHR-21070462_0084B_RBJ.jpeg",
    textoSobre:
      "Octavia Butler foi uma escritora de ficção científica americana, pioneira no gênero, sendo a primeira mulher afro-americana a ganhar o Prêmio Hugo. Ela explorou temas como identidade, poder e a condição humana, abordando questões de raça e gênero.",
    arrayObras: [
      {
        nomeObra: "Kindred (1979)",
        link: "https://dedalus.usp.br/F/JAX2HSG3M2E68PYYTN4XXB19JIEK4GKBYEFRVMA56AM2QSY8BC-47836?func=full-set-set&set_number=001120&set_entry=000002&format=999",
        fotoCapa:
          "https://m.media-amazon.com/images/I/81r9nZkZJJL._UF894,1000_QL80_.jpg",
      },
      {
        nomeObra: "A parábola do semeador (1993)",
        link: "https://dedalus.usp.br/F/JAX2HSG3M2E68PYYTN4XXB19JIEK4GKBYEFRVMA56AM2QSY8BC-48200?func=full-set-set&set_number=001122&set_entry=000001&format=999",
        fotoCapa: "https://m.media-amazon.com/images/I/71ty3BwyShL.jpg",
      },
      {
        nomeObra: "A parábola dos talentos (1998)",
        link: "https://dedalus.usp.br/F/JAX2HSG3M2E68PYYTN4XXB19JIEK4GKBYEFRVMA56AM2QSY8BC-48200?func=full-set-set&set_number=001122&set_entry=000001&format=999",
        fotoCapa:
          "https://m.media-amazon.com/images/I/81YL9TD+QsL._UF894,1000_QL80_.jpg",
      },
      {
        nomeObra: "Semente originária (1980)",
        link: "https://sesc.i10bibliotecas.com.br/obra/519612",
        fotoCapa:
          "https://m.media-amazon.com/images/I/71dqaHTn79L._AC_UF1000,1000_QL80_.jpg",
      },
      {
        nomeObra: "Filhos de Sangue (1984)",
        link: "https://sesc.i10bibliotecas.com.br/obra/501507",
        fotoCapa:
          "https://m.media-amazon.com/images/I/81ZKrW+Un5L._AC_UF1000,1000_QL80_.jpg",
      },
      {
        nomeObra: "O Despertar (1989)",
        link: "https://sesc.i10bibliotecas.com.br/obra/525985",
        fotoCapa:
          "https://m.media-amazon.com/images/I/71LV+gNDhzL._AC_UF1000,1000_QL80_.jpg",
      },
    ],
  },
  {
    id: 4,
    nomeAutor: "James Baldwin",
    periodoVida: "(1924-1987)",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/James_Baldwin_37_Allan_Warren_%28cropped%29.jpg/1200px-James_Baldwin_37_Allan_Warren_%28cropped%29.jpg",
    textoSobre:
      "James Baldwin foi um romancista, ensaísta e dramaturgo americano. Sua obra aborda a luta pela igualdade racial, o racismo e a complexidade das relações sociais nos Estados Unidos, tornando-o uma voz essencial no movimento pelos direitos civis.",
    arrayObras: [
      {
        nomeObra: "O quarto de Giovanni (1956)",
        link: "https://bibliotecas.sp.senai.br/acervo/273001",
        fotoCapa:
          "https://m.media-amazon.com/images/I/713ToSd+rcL._AC_UF1000,1000_QL80_.jpg",
      },
      {
        nomeObra: "Da próxima vez, o fogo (1963)",
        link: "https://pergamum.ufscar.br/acervo/101032",
        fotoCapa:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdCoYSf_3G7e8O8FGM64wRn5o9xmHRdcf22A&s",
      },
      {
        nomeObra: "Notas de um filho nativo (1955)",
        link: "https://sesc.i10bibliotecas.com.br/obra/495561",
        fotoCapa:
          "https://cdl-static.s3-sa-east-1.amazonaws.com/covers/gg/9788535933765/notas-de-um-filho-nativo.jpg",
      },
      {
        nomeObra: "Terra estranha (1962)",
        link: "https://pergamum.ufscar.br/acervo/139121",
        fotoCapa:
          "https://m.media-amazon.com/images/I/71KRXA3RAhL._AC_UF1000,1000_QL80_.jpg",
      },
      {
        nomeObra: "Se a rua Beale falasse (1974)",
        link: "https://bibliotecas.sp.senai.br/acervo/264890",
        fotoCapa:
          "https://cdn.awsli.com.br/600x450/1639/1639761/produto/79483023/09cc839589.jpg",
      },
    ],
  },
  {
    id: 5,
    nomeAutor: "Ralph Ellison",
    periodoVida: "(1914-1994)",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe7SZrZmwAXAiHBtWQbS1v0Ol1mwBVU5Oc2w&s",
    textoSobre:
      "Ralph Ellison foi um escritor e ensaísta americano, mais conhecido por seu trabalho sobre o impacto do racismo na sociedade americana. Sua escrita se destaca pela profundidade psicológica e pela crítica social.",
    arrayObras: [
      {
        nomeObra: "Homem invisível (1952)",
        link: "https://biblion.odilo.us/info/homem-invisivel-00934717",
        fotoCapa:
          "https://m.media-amazon.com/images/I/71c25jnv3fL._AC_UF1000,1000_QL80_.jpg",
      },
    ],
  },
  {
    id: 6,
    nomeAutor: "Richard Wright",
    periodoVida: "(1908-1960)",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Richard_Wright.jpg/800px-Richard_Wright.jpg",
    textoSobre:
      "Richard Wright foi um escritor e ativista americano que ficou famoso por suas obras que exploram o racismo e a pobreza nos Estados Unidos. Suas narrativas abordam o impacto do racismo na vida dos afro-americanos de uma maneira crua e honesta.",
    arrayObras: [
      {
        nomeObra: "Filho Nativo (1940)",
        link: "https://pergamum.ufscar.br/acervo/106772",
        fotoCapa:
          "https://cdl-static.s3-sa-east-1.amazonaws.com/covers/gg/9788535936735/filho-nativo.jpg",
      },
      {
        nomeObra: "Black Boy (1945)",
        link: "https://sesc.i10bibliotecas.com.br/obra/384066",
        fotoCapa: "https://m.media-amazon.com/images/I/71Vq638lmaL.jpg",
      },
    ],
  },
  {
    id: 7,
    nomeAutor: "Nella Larsen",
    periodoVida: "(1891-1964)",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/NellaLarsen1928.jpg/800px-NellaLarsen1928.jpg",
    textoSobre:
      "Nella Larsen foi uma escritora e enfermeira americana, conhecida por suas obras que exploram as complexidades das identidades raciais e de classe no contexto da diáspora africana e do Harlem Renaissance.",
    arrayObras: [
      {
        nomeObra: "De passagem (1929)",
        link: "https://biblion.odilo.us/info/areia-movedica-01147536",
        fotoCapa:
          "https://m.media-amazon.com/images/I/71iRyBVbNiL._AC_UF1000,1000_QL80_.jpg",
      },
      {
        nomeObra: "Areia movediça (1928)",
        link: "https://biblion.odilo.us/info/identidade-00928417",
        fotoCapa:
          "https://m.media-amazon.com/images/I/81QbUeiUt9L._AC_UF1000,1000_QL80_.jpg",
      },
    ],
  },
  {
    id: 8,
    nomeAutor: "Alain LeRoy Locke",
    periodoVida: "(1886-1954)",
    imagem:
      "https://s2.glbimg.com/D1xKUHbSzVDKEytoPOyJnqwR4e8=/620x620/smart/e.glbimg.com/og/ed/f/original/2021/08/09/dsadsadasdassa.jpg",
    textoSobre:
      "Alain Locke foi um filósofo, educador e crítico cultural americano, frequentemente considerado o principal teórico da Renascença do Harlem. Ele era um defensor da arte e da cultura negras e acreditava na importância do pensamento intelectual afro-americano.",
    arrayObras: [
      {
        nomeObra: "The New Negro: An Interpretation (1925)",
        link: "https://www.amazon.com.br/New-Negro-Alain-Locke/dp/1513208659/ref=sr_1_2?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1ENMRZLTK08PM&dib=eyJ2IjoiMSJ9.L47_VHoWWcpfMgRKhDCtlYUtAMlgd4ruUNr_WVu0EVHGjHj071QN20LucGBJIEps.qp-mxoZCwPTZ1NczfRCNNo8M2SxWmCP5gQImoY7VhWQ&dib_tag=se&keywords=the+new+negro%3A+and+interpretation&qid=1736625070&sprefix=the+new+negro+an+interpretation%2Caps%2C248&sr=8-2&ufe=app_do%3Aamzn1.fos.6121c6c4-c969-43ae-92f7-cc248fc6181d",
        fotoCapa:
          "https://m.media-amazon.com/images/I/81kdshHD97L._AC_UF1000,1000_QL80_.jpg",
      },
    ],
  },

  {
    id: 9,
    nomeAutor: "Zora Neale Hurston",
    periodoVida: "(1891-1960)",
    imagem:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSkoIPFEHi6AW3F7GuhUC8OKehW1_3kU9nTJDtaaPcckDSrCBaT",
    textoSobre:
      "Zora Neale Hurston foi uma escritora, antropóloga e ativista americana, considerada uma das mais importantes vozes da literatura negra. Sua obra explora temas de identidade racial e a vida no sul dos Estados Unidos, com um olhar único sobre as comunidades afro-americanas.",
    arrayObras: [
      {
        nomeObra: "Mules and Men (1935)",
        link: "https://www.amazon.com.br/Mules-Men-Henry-Louis-Gates/dp/0061350176/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2W1SDSVD0VVLC&dib=eyJ2IjoiMSJ9._an_ioOYOLdcFpS7FGNgaO9LIn107A81e-HOWsW8fxuEc_aMDIEtWlKFDE142NoHGdBUX6oAs5z_sWbesKgVWxCMcehG9AhIf9Yk_HOtBtMhocCVy8BXOhbxuRCGpF5Ngh3lRIfCGPof8yu7e_22YzrHYNajT8vfruYN5cbQIAIyNmcx2ePICNJNLMCaDb-GlNbSV2AJLvm1VOA1RRVAmTyZUrYpbdjXUX-019QMRrA3ZQ9qePsx8G9P8rrA_k9KNbYVQjSlsFFd-KuFA8qJLplrLPfNJHh9Ak7nlX-OmTEmJmMudJPQroUabLp2M3hA9wIE0bXDKx7VLMd3M-hPANk08KrP5515mGUxH-Cj35G7EsWyxXb_nCzom8-Kpx1O1S84FSJ13Wu_QIeKewF51MXiSdb64ukn-UcWLSkvwlTs2tMzIaRihQ3KxX8cPbh_.YBGBayWd9LHL5ElnVVAYKmW2BfEBlh6I9Aw2e8VbX7c&dib_tag=se&keywords=Mules+and+Men&qid=1736625391&sprefix=mules+and+men%2Caps%2C234&sr=8-1&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9",
        fotoCapa:
          "https://m.media-amazon.com/images/I/81SbtuSakiL._AC_UF1000,1000_QL80_.jpg",
      },
      {
        nomeObra: "Seus olhos viam Deus (1937)",
        link: "https://sesc.i10bibliotecas.com.br/obra/237575",
        fotoCapa:
          "https://m.media-amazon.com/images/I/91sFvKm0MCS._AC_UF1000,1000_QL80_.jpg",
      },
      {
        nomeObra: "Tell My Horse: Voodoo and Life in Haiti and Jamaica (1938)",
        link: "https://www.amazon.com.br/Tell-Horse-Zora-Neale-Hurston/dp/0061695130/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=AUTHOR&dib=eyJ2IjoiMSJ9.vqAkAJcjtDmSJkT4W6524b6nI8-2jM8KukXaBVHE-izd4mFnEASEJIKcafuaFR8z3J0WzgsJy8UXvmV9v0IG-fdRFXqiPUbx5LfoKkxFflj5_VT_5qBvqA2ZcwaglYPh9rSsHsPabG-R-A4VZFqkFzr3lz3fsVYtc2g5DimXQqFITESIEZGCLjV1ev71WeJlYxN7lX8kK477Is9QSr_nbuA954PxI5j_tPLipK-Oq6Q.CdIzeWugyYj7ftOsGF1abSJ-z1870NZZ_Ro5e6Dzaks&sr=",
        fotoCapa:
          "https://m.media-amazon.com/images/I/81OBqnvWgvL._AC_UF350,350_QL50_.jpg",
      },
    ],
  },
  {
    id: 10,
    nomeAutor: "Langston Hughes",
    periodoVida: "(1902-1967)",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Langston_Hughes_by_Carl_Van_Vechten_%28cropped%29.jpg/800px-Langston_Hughes_by_Carl_Van_Vechten_%28cropped%29.jpg",
    textoSobre:
      "Langston Hughes foi um poeta, novelista e dramaturgo americano, figura central no movimento do Harlem Renaissance. Suas obras expressam a experiência afro-americana com um estilo simples e direto, abordando questões de identidade, liberdade e igualdade.",
    arrayObras: [
      {
        nomeObra: "Poesia Negra (1921)",
        link: "https://sesc.i10bibliotecas.com.br/livro/737759",
        fotoCapa:
          "https://m.media-amazon.com/images/I/513XgPgF4TL._AC_UF1000,1000_QL80_.jpg",
      },
    ],
  },
  {
    id: 11,
    nomeAutor: "Frantz Fanon",
    periodoVida: "(1925-1961)",
    imagem:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRYDXq5BnpejGgQfieYeTXnQd8xWTaA8Xs6opONrdxrei6agNdNTY9NDU-TJDyXmbUh8GN7SHfAqxX7rGtSN2s0XA",
    textoSobre:
      "Frantz Fanon foi um psiquiatra, filósofo e escritor nascido na Martinica. Suas obras abordam o impacto psicológico do colonialismo e a luta pela liberdade em contextos pós-coloniais, sendo um pensador importante para os movimentos de descolonização e de resistência.",
    arrayObras: [
      {
        nomeObra: "Pele negra, máscaras brancas (1952)",
        link: "https://biblion.odilo.us/info/pele-negra-mascaras-brancas-00704498",
        fotoCapa:
          "https://m.media-amazon.com/images/I/510ZP6ECsBL._AC_UF1000,1000_QL80_.jpg",
      },
      {
        nomeObra: "Os condenados da Terra (1968)",
        link: "https://pergamum.ufscar.br/acervo/11149",
        fotoCapa:
          "https://m.media-amazon.com/images/I/71-d2-+IebL._AC_UF1000,1000_QL80_.jpg",
      },
    ],
  },
  {
    id: 12,
    nomeAutor: "Maya Angelou",
    periodoVida: "(1928-2014)",
    imagem: "https://m.media-amazon.com/images/I/71pPixa1nXL.jpg",
    textoSobre:
      "Maya Angelou foi uma escritora, atriz e ativista americana, famosa por suas obras que exploram temas como identidade, sexualidade, racismo e o empoderamento feminino. Ela também foi uma figura chave na luta pelos direitos civis nos Estados Unidos.",
    arrayObras: [
      {
        nomeObra: "Eu sei por que o pássaro canta na gaiola (1969)",
        link: "https://biblion.odilo.us/info/eu-sei-por-que-o-passaro-canta-na-gaiola-autobiografia-de-maya-angelou-00907124",
        fotoCapa: "https://m.media-amazon.com/images/I/61mxieZGdDL.jpg",
      },
      {
        nomeObra: "Poesia Completa (1978)",
        link: "https://biblion.odilo.us/info/maya-angelou-poesia-completa-00795731",
        fotoCapa:
          "https://m.media-amazon.com/images/I/81RPeJkFs4L._AC_UF1000,1000_QL80_.jpg",
      },
      {
        nomeObra: "O coração de uma mulher (1981)",
        link: "https://biblion.odilo.us/info/o-coracao-de-uma-mulher-01120787",
        fotoCapa:
          "https://m.media-amazon.com/images/I/81g5AtfBMDL._AC_UF1000,1000_QL80_.jpg",
      },
      {
        nomeObra: "Até as Estrelas Parecem Solitárias (1993)",
        link: "https://biblion.odilo.us/info/ate-as-estrelas-parecem-solitarias-01120806",
        fotoCapa:
          "https://m.media-amazon.com/images/I/71guiIA1sQL._AC_UF1000,1000_QL80_.jpg",
      },
    ],
  },
  {
    id: 13,
    nomeAutor: "Chinua Achebe",
    periodoVida: "(1930-2013)",
    imagem:
      "https://cdl-static.s3-sa-east-1.amazonaws.com/colaboradores/02725_gg.jpg",
    textoSobre:
      "Chinua Achebe foi um escritor nigeriano, amplamente considerado o pai da literatura africana moderna. Suas obras exploram a história e as questões sociais da Nigéria e da África, oferecendo uma visão crítica sobre o colonialismo e suas consequências.",
    arrayObras: [
      {
        nomeObra: "Things Fall Apart (1958)",
        link: "https://dedalus.usp.br/F/URC3TGYMKBASEYTAAHBT7MA3TA1B7JQ3H3E5FCSCLBUU627P5P-28131?func=full-set-set&set_number=001286&set_entry=000010&format=999",
        fotoCapa: "https://m.media-amazon.com/images/I/91NtvTU0xEL.jpg",
      },
      {
        nomeObra: "O Mundo Se Despedaça (1958)",
        link: "https://dedalus.usp.br/F/URC3TGYMKBASEYTAAHBT7MA3TA1B7JQ3H3E5FCSCLBUU627P5P-27909?func=full-set-set&set_number=001285&set_entry=000008&format=999",
        fotoCapa:
          "https://m.media-amazon.com/images/I/91bs-Jk35vS._AC_UF1000,1000_QL80_.jpg",
      },
      {
        nomeObra: "No Longer at Ease (1960)",
        link: "https://dedalus.usp.br/F/URC3TGYMKBASEYTAAHBT7MA3TA1B7JQ3H3E5FCSCLBUU627P5P-27534?func=full-set-set&set_number=001283&set_entry=000004&format=999",
        fotoCapa:
          "https://m.media-amazon.com/images/I/91WzS7lg4JL._AC_UF1000,1000_QL80_.jpg",
      },
      {
        nomeObra: "A flecha de Deus (1964)",
        link: "https://sesc.i10bibliotecas.com.br/obra/199209",
      },
      {
        nomeObra: "The Trouble With Nigeria (1984)",
        link: "https://dedalus.usp.br/F/URC3TGYMKBASEYTAAHBT7MA3TA1B7JQ3H3E5FCSCLBUU627P5P-27724?func=full-set-set&set_number=001284&set_entry=000007&format=999",
        fotoCapa:
          "https://m.media-amazon.com/images/I/61NpSbAqEZL._AC_UF1000,1000_QL80_.jpg",
      },
    ],
  },
  {
    id: 14,
    nomeAutor: "Alice Walker",
    periodoVida: "(1944-Presente)",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRykC860OqCcZnilczCGFzG41zHEpOuxP1fYA&s",
    textoSobre:
      "Alice Walker é uma escritora e ativista americana, conhecida por sua exploração das lutas das mulheres afro-americanas. Ela foi uma defensora das causas feministas e dos direitos civis, sendo uma das vozes mais importantes da literatura contemporânea.",
    arrayObras: [
      {
        nomeObra: "A Cor Púrpura (1982)",
        link: "https://pergamum.ufscar.br/acervo/70572",
        fotoCapa: "https://m.media-amazon.com/images/I/719J3+g-GuL.jpg",
      },
      {
        nomeObra: "A Terceira Vida de Grange Copeland (1970)",
        link: "https://biblion.odilo.us/info/a-terceira-vida-de-grange-copeland-00929502",
        fotoCapa:
          "https://site.taglivros.com/static/f01ea1a0fa75f590dcf6e5e96f0326b9/fad2e/cur_2020_05_cover_af3fe5600d.jpg",
      },
      {
        nomeObra: "O Segredo da Alegria (1992)",
        link: "https://biblion.odilo.us/info/o-segredo-da-alegria-00996959",
        fotoCapa:
          "https://m.media-amazon.com/images/I/81qoN-5rq6L._UF894,1000_QL80_.jpg",
      },
      {
        nomeObra: "O Templo dos Meus Familiares (1996)",
        link: "https://biblion.odilo.us/info/o-templo-dos-meus-familiares-01117765",
        fotoCapa:
          "https://images.dlivros.org/Alice-Walker/templo-meus-familiares-alice-walker_medium.webp",
      },
    ],
  },
  {
    id: 15,
    nomeAutor: "Angela Davis",
    periodoVida: "(1944-Presente)",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Angela_Davis_in_a_half-length_portrait_by_Bernard_Gotfryd_-_crop.jpg/1200px-Angela_Davis_in_a_half-length_portrait_by_Bernard_Gotfryd_-_crop.jpg",
    textoSobre:
      "Angela Davis é uma filósofa, escritora e ativista americana, famosa por seu envolvimento com o movimento dos direitos civis e sua luta pela justiça racial e de gênero. Ela também foi uma figura central nas discussões sobre o sistema prisional e o feminismo negro.",
    arrayObras: [
      {
        nomeObra: "Angela Davis: Uma Autobiografia (1974)",
        link: "https://biblion.odilo.us/info/uma-autobiografia-00932907",
        fotoCapa: "https://m.media-amazon.com/images/I/91g6dVVP95L.jpg",
      },
      {
        nomeObra: "Mulheres, raça e classe (1981)",
        link: "https://dedalus.usp.br/F/9TP81V9P4KFDYM5SH9ASMSAV1NGFJ4PRK9DUHJLH6Q26Y3PI5E-08710?func=full-set-set&set_number=001460&set_entry=000010&format=999",
        fotoCapa: "https://m.media-amazon.com/images/I/81PP53v0mML.jpg",
      },
      {
        nomeObra: "Estarão as prisões obsoletas? (2003)",
        link: "https://biblion.odilo.us/info/estarao-as-prises-obsoletas-00906081",
        fotoCapa:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKwrSpJ-gF2J3rDGlkVGuNSpftjrLp32JHBA&s",
      },
      {
        nomeObra:
          "A Democracia da Abolição: Para Além do Império, das Prisões e da Tortura (2005)",
        link: "https://biblion.odilo.us/info/a-democracia-da-abolicao-para-alem-do-imperio-das-prises-e-da-tortura-00906273",
        fotoCapa:
          "https://m.media-amazon.com/images/I/81qx2Da7rVL._AC_UF1000,1000_QL80_.jpg",
      },
      {
        nomeObra:
          "The Meaning of Freedom: And Other Difficult Dialogues (2012)",
        link: "https://www.amazon.com.br/Meaning-Freedom-Robin-D-Kelley/dp/0872865800/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=GLLL3ZRG9VDM&dib=eyJ2IjoiMSJ9.WEW4zmxjEFoaMCQQJ8GU3Kw9EM9S4JI6qaZDEFQKsjo.Nc-xuh-6HvPmqixWedqUNcuIi8q3Vi-Bu25cz-HdWo8&dib_tag=se&keywords=The+Meaning+of+Freedom%3A+And+Other+Difficult+Dialogues&qid=1736631233&sprefix=the+meaning+of+freedom+and+other+difficult+dialogues%2Caps%2C229&sr=8-1&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9",
        fotoCapa:
          "https://m.media-amazon.com/images/I/51XAGqrGd1L._AC_UF1000,1000_QL80_.jpg",
      },
      {
        nomeObra: "Mulheres, cultura e política (2017)",
        link: "https://dedalus.usp.br/F/9TP81V9P4KFDYM5SH9ASMSAV1NGFJ4PRK9DUHJLH6Q26Y3PI5E-08303?func=full-set-set&set_number=001458&set_entry=000009&format=999",
        fotoCapa:
          "https://boitempoeditorial.fbitsstatic.net/img/p/mulheres-cultura-e-politica-152720/338371.jpg?w=290&h=420&v=no-value",
      },
      {
        nomeObra: "A liberdade é uma luta constante (2018)",
        link: "https://dedalus.usp.br/F/9TP81V9P4KFDYM5SH9ASMSAV1NGFJ4PRK9DUHJLH6Q26Y3PI5E-08939?func=full-set-set&set_number=001461&set_entry=000015&format=999",
        fotoCapa:
          "https://boitempoeditorial.fbitsstatic.net/img/p/a-liberdade-e-uma-luta-constante-152410/338061.jpg?w=290&h=420&v=no-value",
      },
    ],
  },
  {
    id: 16,
    nomeAutor: "Bell Hooks",
    periodoVida: "(1952-2021)",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/3/37/Bell_hooks%2C_October_2014.jpg",
    textoSobre:
      "Bell Hooks foi uma teórica feminista, escritora e ativista americana. Suas obras exploraram as interseções entre raça, classe e gênero, com ênfase em como as mulheres negras podem se libertar das opressões sociais.",
    arrayObras: [
      {
        nomeObra:
          "E eu não sou uma mulher? Mulheres negras e o feminismo (1981)",
        link: "https://biblion.odilo.us/info/e-eu-nao-sou-uma-mulher-00610220",
        fotoCapa: "https://m.media-amazon.com/images/I/91EmOEDkGiL.jpg",
      },
      {
        nomeObra: "Anseios: raça, gênero e políticas culturais (1990)",
        link: "https://biblion.odilo.us/info/anseios-raca-genero-e-politicas-culturais-00906568",
        fotoCapa:
          "https://m.media-amazon.com/images/I/7173p-rv7mL._AC_UF1000,1000_QL80_.jpg",
      },
      {
        nomeObra: "Olhares negros: raça e representação (1992)",
        link: "https://biblion.odilo.us/info/olhares-negros-raca-e-representacao-00908897",
        fotoCapa: "",
      },
      {
        nomeObra: "Irmãs do inhame: mulheres negras e autorrecuperação (1993)",
        link: "https://biblion.odilo.us/info/irmas-do-inhame-mulheres-negras-e-autorrecuperacao-01005284",
        fotoCapa: "",
      },
    ],
  },
  {
    id: 17,
    nomeAutor: "Paul Gilroy",
    periodoVida: "(1956-Presente)",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/PaulGilroy2.jpg",
    textoSobre:
      "Paul Gilroy é um sociólogo e teórico cultural britânico, conhecido por seu trabalho sobre o Atlântico Negro, explorando as relações entre cultura, identidade e história na diáspora africana.",
    arrayObras: [
      {
        nomeObra: "Atlântico Negro: modernidade e dupla consciência (1993)",
        link: "https://pergamum.ufscar.br/acervo/135165",
        fotoCapa:
          "https://m.media-amazon.com/images/I/41hND%2BkslFL._AC_SY200_QL15_.jpg",
      },
    ],
  },
  {
    id: 18,
    nomeAutor: "Neil deGrasse Tyson",
    periodoVida: "(1958-Presente)",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpcsuvYyXbXuSY5DjgiZVO9ybFgAK_8300qw&s",
    textoSobre:
      "Neil deGrasse Tyson é um astrofísico e comunicador científico americano. Ele é conhecido por seu trabalho de popularização da ciência e por suas contribuições à educação científica e ao entendimento do universo.",
    arrayObras: [
      {
        nomeObra: "Morte no buraco negro (2016)",
        link: "https://dedalus.usp.br/F/9TP81V9P4KFDYM5SH9ASMSAV1NGFJ4PRK9DUHJLH6Q26Y3PI5E-10423?func=full-set-set&set_number=001478&set_entry=000003&format=999",
        fotoCapa: "https://m.media-amazon.com/images/I/81HSB1HTEVL.jpg",
      },
    ],
  },
  {
    id: 19,
    nomeAutor: "Michelle Obama",
    periodoVida: "(1964-Presente)",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/4/4b/Michelle_Obama_2013_official_portrait.jpg",
    textoSobre:
      "Michelle Obama é uma advogada, escritora e ex-primeira-dama dos Estados Unidos. Ela é uma defensora da educação, saúde e direitos das mulheres, além de ser uma influente figura pública que se dedicou à causa do empoderamento das mulheres e das meninas.",
    arrayObras: [
      {
        nomeObra: "Minha História (2018)",
        link: "https://dedalus.usp.br/F/9TP81V9P4KFDYM5SH9ASMSAV1NGFJ4PRK9DUHJLH6Q26Y3PI5E-11351?func=full-set-set&set_number=001483&set_entry=000001&format=999",
        fotoCapa:
          "https://m.media-amazon.com/images/I/81Ed9yMQWIL._AC_UF1000,1000_QL80_.jpg",
      },
    ],
  },
  {
    id: 20,
    nomeAutor: "Sousa Jamba",
    periodoVida: "(1966-Presente)",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm7OESnomR9shTBEi0Vtru1cVrMG5uGT16dw&s",
    textoSobre:
      "Sousa Jamba é um escritor e poeta angolano. Sua obra aborda as questões sociais e políticas de Angola, com ênfase na história do país e nas consequências da guerra civil.",
    arrayObras: [
      {
        nomeObra: "Patriotas (1990)",
        link: "https://www.amazon.com.br/Patriots-Souza-Jamba/dp/0140129014/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=D7V5HC3OIYWF&dib=eyJ2IjoiMSJ9.SicDVC2sHcW6NvFKOFPLznBhhP3cfqRYAGYFNfArJ_JntFnqxSL_iOW7FOcGqL6-VVDknRLJxDnzpC7gnp0WuJBI2z2fHnMVU6AY4zC8SJqIx5tgCeqDbrZL9wIqdn6Ff6ZW1u8cByHaxtOcy_VmLCvhtteHezU9_YXb9EKOQT5RqYJpVCJ-zquS6zDLeaMS.pX05RhjTbMk-3RzwMOLsiutdJAB0pn3pz2-24N5u5GY&dib_tag=se&keywords=Sousa+Jamba&qid=1736631980&sprefix=sousa+jamba%2Caps%2C366&sr=8-1",
        fotoCapa:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1478478512i/32879072.jpg",
      },
    ],
  },
  {
    id: 21,
    nomeAutor: "Marlon James",
    periodoVida: "(1970-Presente)",
    imagem:
      "https://img.apmcdn.org/30c07201a2ae328d777a7d7f4aa65fdb94855d51/portrait/6e4871-20150915-marlon-james.jpg",
    textoSobre:
      "Marlon James é um escritor jamaicano, conhecido por suas narrativas complexas que exploram a história e a cultura caribenha. Seu estilo inovador mistura mitologia, história e política em uma escrita vibrante.",
    arrayObras: [
      {
        nomeObra: "Breve História de Sete Assassinatos (2014)",
        link: "https://sesc.i10bibliotecas.com.br/obra/455352",
        fotoCapa:
          "https://m.media-amazon.com/images/I/6154WMKD6pL._AC_UF1000,1000_QL80_.jpg",
      },
      {
        nomeObra: "Leopardo Negro, Lobo Vermelho (2021)",
        link: "https://biblion.odilo.us/info/leopardo-negro-lobo-rojo-00928300",
        fotoCapa:
          "https://m.media-amazon.com/images/I/91wp3SxDM3L._AC_UF1000,1000_QL80_.jpg",
      },
    ],
  },
  {
    id: 22,
    nomeAutor: "Chimamanda Ngozi Adichie",
    periodoVida: "(1977-Presente)",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzB25FIUFgDTabrnGO3RyEEbONUZLEutekpg&s",
    textoSobre:
      "Chimamanda Ngozi Adichie é uma escritora nigeriana, famosa por suas obras que exploram temas como identidade, feminismo e a experiência nigeriana. Ela se tornou uma das vozes mais importantes da literatura contemporânea.",
    arrayObras: [
      {
        nomeObra: "Hibisco Roxo (2003)",
        link: "https://pergamum.ufscar.br/acervo/170691",
        fotoCapa: "https://m.media-amazon.com/images/I/81hobIPsJAL.jpg",
      },
      {
        nomeObra: "No seu pescoço (2009)",
        link: "https://pergamum.ufscar.br/acervo/199484",
        fotoCapa:
          "https://m.media-amazon.com/images/I/91T4HkpBxkL._AC_UF1000,1000_QL80_.jpg",
      },
      {
        nomeObra: "Americanah (2013)",
        link: "https://dedalus.usp.br/F/9TP81V9P4KFDYM5SH9ASMSAV1NGFJ4PRK9DUHJLH6Q26Y3PI5E-20629?func=full-set-set&set_number=001531&set_entry=000008&format=999",
        fotoCapa:
          "https://m.media-amazon.com/images/I/8118F5EgmZL._AC_UF1000,1000_QL80_.jpg",
      },
      {
        nomeObra: "Para educar crianças feministas (2017)",
        link: "https://dedalus.usp.br/F/9TP81V9P4KFDYM5SH9ASMSAV1NGFJ4PRK9DUHJLH6Q26Y3PI5E-21001?func=full-set-set&set_number=001532&set_entry=000006&format=999",
        fotoCapa:
          "https://cdl-static.s3-sa-east-1.amazonaws.com/covers/gg/9788535928518/para-educar-criancas-feministas.jpg",
      },
      {
        nomeObra: "O perigo de uma história única (2019)",
        link: "https://dedalus.usp.br/F/9TP81V9P4KFDYM5SH9ASMSAV1NGFJ4PRK9DUHJLH6Q26Y3PI5E-19003?func=full-set-set&set_number=001529&set_entry=000004&format=999",
        fotoCapa:
          "https://m.media-amazon.com/images/I/71AGPh3u4HL._AC_UF1000,1000_QL80_.jpg",
      },
    ],
  },
  {
    id: 23,
    nomeAutor: "Trevor Noah",
    periodoVida: "(1984-Presente)",
    imagem: " https://facetoface.wfu.edu/files/2023/04/Noah.png",
    textoSobre:
      "Trevor Noah é um comediante e apresentador de televisão sul-africano. Ele é conhecido por seu humor crítico e observações sobre as questões sociais, raciais e políticas, abordando as complexidades da sociedade sul-africana e global.",
    arrayObras: [
      {
        nomeObra: "Nascido do Crime (2020)",
        link: "https://biblion.odilo.us/info/nascido-do-crime-historias-da-minha-infancia-na-africa-do-sul-00909455",
        fotoCapa:
          "https://m.media-amazon.com/images/I/91gs--x09UL._UF894,1000_QL80_.jpg",
      },
    ],
  },
  {
    id: 24,
    nomeAutor: "Kiley Reid",
    periodoVida: "(1987-Presente)",
    imagem:
      "https://images.squarespace-cdn.com/content/v1/5cdf25fee9603c000169c036/9464449b-a4c8-4d00-9203-d2e61da69cdc/kiley2DavidGoddard.jpg",
    textoSobre:
      "Kiley Reid é uma escritora americana, conhecida por suas obras de ficção contemporânea. Seu trabalho explora temas como identidade, poder e os dilemas das relações sociais na América moderna.",
    arrayObras: [
      {
        nomeObra: "Na Corda Bamba (1978)",
        link: "https://sesc.i10bibliotecas.com.br/obra/507735",
        fotoCapa:
          "https://m.media-amazon.com/images/I/91UQDKwQP1L._AC_UF1000,1000_QL80_.jpg",
      },
    ],
  },
  {
    id: 25,
    nomeAutor: "Angie Thomas",
    periodoVida: "(1988-Presente)",
    imagem:
      "https://m.media-amazon.com/images/S/amzn-author-media-prod/spiqhfvpj69u2omjplh9i2s49h.jpg",
    textoSobre:
      "Angie Thomas é uma escritora americana, cujo trabalho lida com as questões raciais e sociais nos Estados Unidos, explorando as experiências dos jovens afro-americanos em um contexto de luta contra a injustiça e violência.",
    arrayObras: [
      {
        nomeObra: "O ódio que você semeia (2017)",
        link: "https://biblion.odilo.us/info/o-odio-que-voce-semeia-00610219",
        fotoCapa: "https://m.media-amazon.com/images/I/71xtPiSvNBL.jpg",
      },
    ],
  },
  {
    id: 26,
    nomeAutor: "Dany Wambire",
    periodoVida: "(1989-Presente)",
    imagem:
      "https://catalogus.co.mz/wp-content/uploads/2022/11/2168d07d-db64-479f-9e03-b59acbe987be-768x721.jpg",
    textoSobre:
      "Dany Wambire é um escritor moçambicano. Sua obra explora a vida em Moçambique e os desafios enfrentados pelas mulheres e pela sociedade em um país pós-colonial.",
    arrayObras: [
      {
        nomeObra: "A adubada fecundidade e outros contos (2017)",
        link: "https://www.amazon.com.br/adubada-fecundidade-outros-contos/dp/8592736102/ref=sr_1_2?crid=3LXJD9W9DWAY8&dib=eyJ2IjoiMSJ9.vdmcYpfr1iMEA0_11NRZIm735u9yVwzQ2CB15O9GuQkHkuN_HBD-13ZIG6a8Q_cdM0nzkxa3OAdTVSWr9vh4VsMXUoh36pG_oscbl10Sntc.74TrxsS8je9pB8Iy7hC21Kr1Da1bmM0dTE05BMcPlp0&dib_tag=se&keywords=dany+wambire&qid=1736632967&sprefix=Dany+Wambire%2Caps%2C248&sr=8-2",
        fotoCapa:
          "https://http2.mlstatic.com/D_NQ_NP_742718-MLB76458255256_052024-O.webp",
      },
      {
        nomeObra: "A Mulher Sobressalente (2018)",
        link: "https://www.amazon.com.br/Mulher-Sobressalente-Dany-Wambire/dp/8592736269/ref=sr_1_1?crid=3LXJD9W9DWAY8&dib=eyJ2IjoiMSJ9.vdmcYpfr1iMEA0_11NRZIm735u9yVwzQ2CB15O9GuQkHkuN_HBD-13ZIG6a8Q_cdM0nzkxa3OAdTVSWr9vh4VsMXUoh36pG_oscbl10Sntc.74TrxsS8je9pB8Iy7hC21Kr1Da1bmM0dTE05BMcPlp0&dib_tag=se&keywords=dany+wambire&qid=1736632967&sprefix=Dany+Wambire%2Caps%2C248&sr=8-1",
        fotoCapa:
          "https://m.media-amazon.com/images/I/81B6n1yd9+L._AC_UF1000,1000_QL80_.jpg",
      },
    ],
  },
  {
    id: 27,
    nomeAutor: "Yaa Gyasi",
    periodoVida: "(1989-Presente)",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/0/0f/Yaa_Gyasi%2C_9_27_%2836709389003%29_%28cropped%29.jpg",
    textoSobre:
      "Yaa Gyasi é uma escritora ganesa-americana. Suas obras abordam a diáspora africana, a migração e as questões de identidade e pertencimento, além de explorar o impacto histórico da escravidão.",
    arrayObras: [
      {
        nomeObra: "O Caminho de Casa (2017)",
        link: "https://biblion.odilo.us/info/o-caminho-de-casa-00274714",
        fotoCapa: "https://m.media-amazon.com/images/I/91vTISojF8L.jpg",
      },
      {
        nomeObra: "Reino Transcedente (2020)",
        link: "https://sesc.i10bibliotecas.com.br/obra/510099",
        fotoCapa:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmE306VqyBenmLE89Ch97s893P8vmm5w8faQ&s",
      },
    ],
  },
  {
    id: 28,
    nomeAutor: "N.K. Jemisin",
    periodoVida: "(1972-Presente)",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhuc3YbYW1cZYY2wZHQGS28Wi6yV3iJxfQtg&s",
    textoSobre:
      "N.K. Jemisin é uma escritora americana de ficção científica e fantasia. Ela é reconhecida por suas obras inovadoras que abordam temas de identidade, poder e justiça, além de seu trabalho inovador dentro da ficção especulativa.",
    arrayObras: [
      {
        nomeObra: "A Quinta Estação (2015)",
        link: "https://dedalus.usp.br/F/9TP81V9P4KFDYM5SH9ASMSAV1NGFJ4PRK9DUHJLH6Q26Y3PI5E-28834?func=full-set-set&set_number=001585&set_entry=000003&format=999",
        fotoCapa:
          "https://m.media-amazon.com/images/I/81Qnzqi3XlL._AC_UF1000,1000_QL80_.jpg",
      },
      {
        nomeObra: "O Portão do Obelisco (2016)",
        link: "https://dedalus.usp.br/F/9TP81V9P4KFDYM5SH9ASMSAV1NGFJ4PRK9DUHJLH6Q26Y3PI5E-29337?func=full-set-set&set_number=001606&set_entry=000001&format=999",
        fotoCapa:
          "https://m.media-amazon.com/images/I/81OlSOMgX3L._AC_UF1000,1000_QL80_.jpg",
      },
      {
        nomeObra: "O Céu de Pedra (2017)",
        link: "https://dedalus.usp.br/F/9TP81V9P4KFDYM5SH9ASMSAV1NGFJ4PRK9DUHJLH6Q26Y3PI5E-03656?func=full-set-set&set_number=001587&set_entry=000002&format=999",
        fotoCapa:
          "https://m.media-amazon.com/images/I/81n1O+UsaeL._AC_UF1000,1000_QL80_.jpg",
      },
    ],
  },
  {
    id: 29,
    nomeAutor: "Neal Shusterman",
    periodoVida: "(1962-Presente)",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/5/5f/Neal_shusterman_2013.jpg",
    textoSobre:
      "Neal Shusterman é um escritor americano, conhecido por suas obras de ficção científica e distopia. Seus livros exploram questões éticas e morais, muitas vezes focando em temas de controle, destino e humanidade.",
    arrayObras: [
      {
        nomeObra: "O Ceifador (2016)",
        link: "https://sesc.i10bibliotecas.com.br/obra/520812",
        fotoCapa:
          "https://m.media-amazon.com/images/I/91LldWCllgS._AC_UF1000,1000_QL80_.jpg",
      },
      {
        nomeObra: "A Nuvem (2018)",
        link: "https://sesc.i10bibliotecas.com.br/obra/521288",
        fotoCapa:
          "https://cdl-static.s3-sa-east-1.amazonaws.com/covers/gg/9788555340543/a-nuvem.jpg",
      },
      {
        nomeObra: "O Timbre (2019)",
        link: "https://sesc.i10bibliotecas.com.br/obra/521290",
        fotoCapa:
          "https://cdl-static.s3-sa-east-1.amazonaws.com/covers/gg/9788555341052/o-timbre.jpg",
      },
      {
        nomeObra: "Fragmentados (2007)",
        link: "https://biblion.odilo.us/info/fragmentados-00999328",
        fotoCapa:
          "https://m.media-amazon.com/images/I/71oUFoGDhnL._AC_UF1000,1000_QL80_.jpg",
      },
    ],
  },
  {
    id: 30,
    nomeAutor: "Tomi Adeyemi",
    periodoVida: "(1993-Presente)",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Tomi_Adeyemi_2018.jpg/1200px-Tomi_Adeyemi_2018.jpg",
    textoSobre:
      "Tomi Adeyemi é uma escritora nigeriana-americana, conhecida por suas obras de fantasia, nas quais combina mitologia africana e magia para criar histórias épicas que exploram questões de opressão e resistência.",
    arrayObras: [
      {
        nomeObra: "Filhos de Sangue e Osso (2018)",
        link: "https://biblion.odilo.us/info/filhos-de-sangue-e-osso-00610180",
        fotoCapa:
          "https://m.media-amazon.com/images/I/A1WYa8JvI3L._UF894,1000_QL80_.jpg",
      },
      {
        nomeObra: "Filhos de Virtude e Vingança (2019)",
        link: "https://biblion.odilo.us/info/filhos-de-virtude-e-vinganca-00910831",
        fotoCapa:
          "https://m.media-amazon.com/images/I/91ifSf2i7fL._AC_UF1000,1000_QL80_.jpg",
      },
    ],
  },
  {
    id: 31,
    nomeAutor: "Maryse Condé",
    periodoVida: "(1937-Presente)",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/7/7a/MaryseConde2006.jpg",
    textoSobre:
      "Maryse Condé é uma escritora francesa nascida na Guadalupe. Sua obra explora as questões sociais e históricas dos territórios franceses ultramarinos, especialmente em relação à escravidão, identidade e colonialismo.",
    arrayObras: [
      {
        nomeObra: "Eu, Tituba: Bruxa Negra de Salem (1986)",
        link: "https://sesc.i10bibliotecas.com.br/obra/400973",
        fotoCapa:
          "https://m.media-amazon.com/images/I/813NdQ+NI4L._AC_UF1000,1000_QL80_.jpg",
      },
      {
        nomeObra: "Segu (1984)",
        link: "https://www.amazon.com.br/Segu-Maryse-Conde/dp/014025949X/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1GVJVQZ1VPLXD&dib=eyJ2IjoiMSJ9.qQvhXH9E4QxJTm4ekA8HOfQ2GeV0vFXBbDN31rTJ0sRW-Fyj6opelSfqqaYJaNyxTtGFGWqz9L-B6W7CceTl_Sv_mq4ceiB4g2dWkY5N0rnhkEB6Z0OIRIofjYwILcslRi4MeSI_bWVnvB_vnXLuedBaDsGtD5buXlIKgQc9ChVzpWPS-BGyNiKE89AiHaIoR4SfpMGTF29316BnG0j3tUCQulgT6_oUZ2mxwYtCvd6cobcdKiP3mhMzB3o-_AmPUZSKzxgQx_GSUwJqnsHJgw.NMY0hrtrLsXMdUval1eph84Rmq-1fHBdcdfPnIzhiSE&dib_tag=se&keywords=segu+maryse+de+cond%C3%A9&qid=1736633594&sprefix=segu+maryse+de+cond%2Caps%2C204&sr=8-1&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9",
        fotoCapa:
          "https://m.media-amazon.com/images/I/91z1GrdV5XL._AC_UF1000,1000_QL80_.jpg",
      },
    ],
  },
  {
    id: 32,
    nomeAutor: "Nnedi Okorafor",
    periodoVida: "(1974-Presente)",
    imagem:
      "https://cdn.record.com.br/wp-content/uploads/2019/06/25171706/images-1-180x250.jpg",
    textoSobre:
      "Nnedi Okorafor é uma escritora nigeriana-americana, conhecida por suas obras de ficção científica e fantasia, que misturam a rica cultura africana com elementos de ficção especulativa.",
    arrayObras: [
      {
        nomeObra: "Quem Teme a Morte (2010)",
        link: "https://biblion.odilo.us/info/quem-teme-a-morte-onye-e-a-profecia-01112729",
        fotoCapa:
          "https://m.media-amazon.com/images/I/91IRM5fumdL._AC_UF1000,1000_QL80_.jpg",
      },
      {
        nomeObra: "Binti (2015)",
        link: "https://biblion.odilo.us/info/binti-trilogia-completa-00905945",
        fotoCapa:
          "https://m.media-amazon.com/images/I/91pTSNCjJhS._AC_UF1000,1000_QL80_.jpg",
      },
      {
        nomeObra: "Bruxa Akata (2011)",
        link: "https://biblion.odilo.us/info/bruxa-akata-00906035",
        fotoCapa:
          "https://m.media-amazon.com/images/I/91NCl3SV24L._UF894,1000_QL80_.jpg",
      },
    ],
  },
  {
    id: 33,
    nomeAutor: "Tiffany D. Jackson",
    periodoVida: "(1980-Presente)",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/1/13/Tiffany_D_Jackson_2019_Texas_Book_Festival.jpg",
    textoSobre:
      "Tiffany D. Jackson é uma escritora americana, conhecida por seus romances que abordam questões sociais, como abuso, justiça e racismo, frequentemente com um toque de mistério e suspense.",
    arrayObras: [
      {
        nomeObra: "Adulta (2023)",
        link: "https://biblion.odilo.us/info/adulta-00998149",
        fotoCapa:
          "https://m.media-amazon.com/images/I/71GJaXtQjjL._UF894,1000_QL80_.jpg",
      },
      {
        nomeObra: "O fardo de sangue (2020)",
        link: "https://biblion.odilo.us/info/o-fardo-do-sangue-01011724",
        fotoCapa:
          "https://m.media-amazon.com/images/I/71GJaXtQjjL._UF894,1000_QL80_.jpg",
      },
    ],
  },
  {
    id: 34,
    nomeAutor: "JJ Bola",
    periodoVida: "(1990-Presente)",
    imagem: "https://www.dublinense.com.br/wp-content/uploads/2020/09/jj.jpg",
    textoSobre:
      "JJ Bola é um escritor e poeta britânico-congolês. Sua obra aborda questões de identidade, cultura e imigração, oferecendo uma reflexão sobre as experiências de pessoas de origem africana na sociedade contemporânea.",
    arrayObras: [
      {
        nomeObra: "Seja Homem: A Masculinidade Desmascarada (2020)",
        link: "https://biblion.odilo.us/info/seja-homem-a-masculinidade-desmascarada-00909155",
        fotoCapa:
          "https://m.media-amazon.com/images/I/6124iXZY0lL._AC_UF1000,1000_QL80_.jpg",
      },
      {
        nomeObra: "O involuntário ato de respirar (2021)",
        link: "https://biblion.odilo.us/info/o-involuntario-ato-de-respirar-01009627",
        fotoCapa:
          "https://m.media-amazon.com/images/I/91r8p6Zq67L._UF894,1000_QL80_.jpg",
      },
    ],
  },
  {
    id: 35,
    nomeAutor: "Françoise Ega",
    periodoVida: "(1920–1976)",
    imagem:
      "https://www.plural.jor.br/wp-content/uploads/2021/05/Francoise-Ega2.jpg",
    textoSobre:
      "Françoise Ega foi uma autora e ativista social martinicana, cujas obras exploram temas de identidade e luta das mulheres negras.",
    arrayObras: [
      {
        nomeObra: "Cartas para uma Negra (1978)",
        link: "https://biblion.odilo.us/info/cartas-a-uma-negra-01005904",
        fotoCapa:
          "https://covers.odilo.io/public/OdiloPlace_Bookwire_Brasil_BR/9786556920955_ORIGINAL.jpg",
      },
    ],
  },
  {
    id: 36,
    nomeAutor: "Jayne Allen",
    periodoVida: "(1982–, Estados Unidos)",
    imagem:
      "https://img.skoob.com.br/vn9GGPyd-zkO-s-CoMKkJX2rtUQ=/200x/center/top/smart/filters:format(jpeg)/https://skoob.s3.amazonaws.com/autores/32944/32944SK-V11646075779G.jpg",
    textoSobre:
      "Jayne Allen é uma escritora contemporânea que explora questões de identidade, saúde mental e as complexidades da vida moderna das mulheres negras.",
    arrayObras: [
      {
        nomeObra: "Mulheres negras não deveriam morrer exaustas (2018)",
        link: "https://bibliotecas.sp.senai.br/acervo/284586",
        fotoCapa:
          "https://m.media-amazon.com/images/I/813lKRgrnrL._SL1500_.jpg",
      },
      {
        nomeObra: "Garotas Negras Precisam de Magia (2022)",
        link: "https://www.amazon.com.br/Black-Girls-Must-Be-Magic/dp/0063137925/ref=sr_1_2?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2J8EPFC3ZSMW&dib=eyJ2IjoiMSJ9.OtTFfsdEhEpgPnNKqkOfiHnP_h5C6gfDPOeEmLCM_bBQ91pN__9F3lqlE-KvK8i2GdqhXCkWpHJSBRW9rOQGCmsG2Mmki2-VLNtCfN66W4f9emGcOUst4XSb_eeqip085I-8OwsdT24hMPu5SltFd_Lv-AQnBBYKquL_5RqJGyB7TQ_uZ9qEaC8w8Y-veY9paRqky60LExcgualpYiz4zMrjn8qfwNipTHB6q7R8CNlNUUZhX20WKyfUnWXuxtAebRk4tfK0lrgUCaVStV-KrRxwXgtus2c3xurA7gQyHHcZAgjYSjaUNJiXw7ugYbtth0IIwAqbmGOLV7LpW6wqtpwIPDtZlPyJ_CG7yCiuXyMD-lSiACGFJDEQYy8ITNGy-P7AIjAGxELSPYfJyXXUzdM9XS3ED-mPh14jR6-kksL8KuSsZp21Jfgh58ML1ocN.PsSm0nb_0dKtZSjahum5mGCQg1KP5UBZ62ILzqqeRbw&dib_tag=se&keywords=jayne+allen&qid=1736707379&sprefix=jayne+all%2Caps%2C385&sr=8-2&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9",
        fotoCapa:
          "https://m.media-amazon.com/images/I/81-EmcRCirL._SL1500_.jpg",
      },
    ],
  },
  {
    id: 37,
    nomeAutor: "Camara Laye",
    periodoVida: "(1928–1980)",
    imagem:
      "https://www.blackpast.org/wp-content/uploads/prodimages/files/blackpast_images/Camara_Laye.jpg",
    textoSobre:
      "Camara Laye foi um dos mais importantes escritores africanos francófonos, cujas obras exploram as tradições culturais e desafios do colonialismo.",
    arrayObras: [
      {
        nomeObra: "O Menino negro (1979)",
        link: "https://dedalus.usp.br/F/LE9CG624JPNRL43BT5TLR8E4H1XLP6BHI5CGUAF49Q5TEKB32Y-01667?func=full-set-set&set_number=000865&set_entry=000005&format=999",
        fotoCapa:
          "https://m.media-amazon.com/images/I/81gcEYttvkL._SL1500_.jpg",
      },
      {
        nomeObra: "O Olhar do Rei (1954)",
        link: "https://www.amazon.com.br/Radiance-King-Camara-Laye/dp/1590174550/ref=sr_1_2?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=95ZCAXF2UF5F&dib=eyJ2IjoiMSJ9.yuovI52jKxB-B8pMfgO297G2xHyGL-zlP0k8VZrsu-JLhoVmP8c1MtwkPC9Qyf4sJV9ppus0CPWQBgQfgUbTCsAy3tpoySbWo9GRVyQnhL_gF62Op-Px2H7ZP_TxeUN6K4uEhH_ImV1Nn-CGImRqSKMfqWeE49jxXGFi85DgiGKjd2D0fqhiRrK777RQcZdppN72hQr4MzoOBu0XljnvOkf_nVbjOiclHGDImjxeeQRYx16ae4gLXYfDauC1_sshSdtZ2vRHIMiDJdVMTK9usZJwD0v2BOGAXruglff0gJgqLcXW0BuSs2EbyTuZ_MjDUlvZ8qHLtV3pJjU7dK5qltyQFlxVITGRQ8mXgj3vT4fWX39tIWprMb4eLzg8CI8GkN5l1qXvyl1q4fXvHhoZ8dpWo-vN9cQlU_ZkTiK26KZYshu-I8vcISsb1IUpu-lk.bW0vYdtQDV4S1yukLBdokWE9QAnxKjcbWP7XDtnuaIY&dib_tag=se&keywords=Camara+Laye&qid=1736707438&sprefix=jayne+allen%2Caps%2C225&sr=8-2&ufe=app_do%3Aamzn1.fos.6a09f7ec-d911-4889-ad70-de8dd83c8a74",
        fotoCapa:
          "https://m.media-amazon.com/images/I/81xkAh4ALsL._SL1500_.jpg",
      },
    ],
  },
  {
    id: 38,
    nomeAutor: "Zakiya Dalila Harris",
    periodoVida: "(1992-Presente)",
    imagem:
      "https://m.media-amazon.com/images/S/amzn-author-media-prod/d0m3kpjqmq4r3tfrteve5iad9c.jpg",
    textoSobre:
      "Zakiya Dalila Harris é uma escritora contemporânea que aborda racismo estrutural e microagressões no ambiente de trabalho.",
    arrayObras: [
      {
        nomeObra: "A Outra Garota Negra (2021)",
        link: "https://sesc.i10bibliotecas.com.br/obra/499774",
        fotoCapa:
          "https://m.media-amazon.com/images/I/91x5YZiQFjL._UF894,1000_QL80_.jpg",
      },
    ],
  },
  {
    id: 39,
    nomeAutor: "Percival Everett",
    periodoVida: "(1956–, Estados Unidos)",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/8/85/Percival_Everett%2C_author%2C_at_the_2024_National_Book_Awards_finalist_reading_2_%28cropped%29.jpg",
    textoSobre:
      "Percival Everett é um prolífico escritor americano conhecido por seu estilo inventivo e sua abordagem de questões raciais, políticas e existenciais.",
    arrayObras: [
      {
        nomeObra: "As Árvores (2021)",
        link: "https://biblion.odilo.us/info/as-arvores-01125367",
        fotoCapa:
          "https://covers.odilo.io/public/OdiloPlace_Bookwire_Brasil_BR/9786556926087_ORIGINAL.jpg",
      },
    ],
  },
  {
    id: 40,
    nomeAutor: "Jamaica Kincaid",
    periodoVida: "(1949–Presente)",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/f/fb/Jamaica_Kincaid_2019.jpg",
    textoSobre:
      "Jamaica Kincaid é uma autora reconhecida por suas histórias intensamente pessoais que exploram colonialismo, identidade e relacionamentos familiares.",
    arrayObras: [
      {
        nomeObra: "Annie John (1985)",
        link: "https://sesc.i10bibliotecas.com.br/obra/539461",
        fotoCapa:
          "https://m.media-amazon.com/images/I/81g6poZo4hL._SL1500_.jpg",
      },
      {
        nomeObra: "Lucy (1990)",
        link: "https://www.amazon.com.br/Lucy-Jamaica-Kincaid/dp/0374527350/ref=sr_1_1?crid=24NR429LOFHSE&dib=eyJ2IjoiMSJ9.rmPTUXEGSeU1-8PKaSb1Tlk-NJbwMyYsw7UushzERe7weU4yIXr3OBLTZmG2G_yuW_VNdpG5rYyetDseC1IskbpOi9M3OcxHtMvjpCLPeYw_tdFbP88M_5g-PCWhAQomftdnGwzqNqohEiRBb_JNnmuUWOe_X_n1yP2DEBs-Q-DTUDmHhzW1gDbkckt49mxYVXXqzfMaMuLB8f7PxuSbyFW-x53ilecfLk3miJzFfMfBSEu5OM0COgzXE-ke-9EL_vfTWMXaWRTR5cKLGVN_dlDyO35iy-G0GLWm-r1DNaI1lsfmEulJMr3uOfGa13qklgDr1RasEgxf031MSkRIiQ._wtxQdc17-pACBkBzJpeqEzYlbH1s8vJwTbfkWvwRE4&dib_tag=se&keywords=lucy+jamaica+kincaid&qid=1736707961&sprefix=Lucy+jamai%2Caps%2C302&sr=8-1&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9",
        fotoCapa:
          "https://m.media-amazon.com/images/I/71U2EehcZKL._SL1500_.jpg",
      },
      {
        nomeObra: "A Autobiografia de Minha Mãe (1996)",
        link: "https://sesc.i10bibliotecas.com.br/obra/496371",
        fotoCapa:
          "https://m.media-amazon.com/images/I/71fbcgEr6fL._SL1500_.jpg",
      },
    ],
  },
  {
    id: 41,
    nomeAutor: "Buchi Emecheta",
    periodoVida: "(1944–2017)",
    imagem:
      "https://www.ufrgs.br/africanas/wp-content/uploads/2021/01/Buchi-Emecheta-2.jpg",
    textoSobre:
      "Buchi Emecheta foi uma autora nigeriana cujas obras exploram questões de gênero, imigração e as complexidades da vida das mulheres africanas.",
    arrayObras: [
      {
        nomeObra: "As Alegrias da Maternidade (1979)",
        link: "https://biblion.odilo.us/info/as-alegrias-da-maternidade-00906648",
        fotoCapa:
          "https://covers.odilo.io/public/OdiloPlace_Bookwire_Brasil_BR/9788583181125_ORIGINAL.jpg",
      },
      {
        nomeObra: "Cidadã de Segunda Classe (1974)",
        link: "https://biblion.odilo.us/info/cidada-de-segunda-classe-00906024",
        fotoCapa:
          "https://covers.odilo.io/public/OdiloPlace_Bookwire_Brasil_BR/9788583181132_ORIGINAL.jpg",
      },
      {
        nomeObra: "O Preço da Noiva (1976)",
        link: "https://biblion.odilo.us/info/preco-de-noiva-00908803",
        fotoCapa:
          "https://covers.odilo.io/public/OdiloPlace_Bookwire_Brasil_BR/9786555530148_ORIGINAL.jpg",
      },
    ],
  },
  {
    id: 42,
    nomeAutor: "Saidiya Hartman",
    periodoVida: "(1961–Presente)",
    imagem:
      "https://gama-uploads.nyc3.cdn.digitaloceanspaces.com/2021/10/l-saidiya-hartman-teaserm2.jpg",
    textoSobre:
      "Saidiya Hartman é uma teórica e escritora americana cujo trabalho explora a história da escravidão e seus efeitos duradouros na modernidade.",
    arrayObras: [
      {
        nomeObra: "Perder a mãe (2021)",
        link: "https://biblion.odilo.us/info/perder-a-mae-uma-jornada-pela-rota-atlantica-da-escravidao-00949990",
        fotoCapa:
          "https://covers.odilo.io/public/OdiloPlace_Bookwire_Brasil_BR/9786586719710_ORIGINAL.jpg",
      },
      {
        nomeObra: "Vidas Rebeldes, Belos Experimentos (2019)",
        link: "https://dedalus.usp.br/F/LE9CG624JPNRL43BT5TLR8E4H1XLP6BHI5CGUAF49Q5TEKB32Y-05702?func=full-set-set&set_number=000895&set_entry=000001&format=999",
        fotoCapa:
          "https://m.media-amazon.com/images/I/9109jhWexfL._SL1500_.jpg",
      },
    ],
  },
  {
    id: 43,
    nomeAutor: "S.A. Cosby",
    periodoVida: "(1974–Presente)",
    imagem:
      "https://static01.nyt.com/images/2021/08/29/books/review/29cosby3/merlin_193476042_36c489a1-d404-4a92-a152-eca038e9ae98-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
    textoSobre:
      "S.A. Cosby é um autor americano conhecido por seus romances policiais e thrillers que exploram identidade, violência e moralidade.",
    arrayObras: [
      {
        nomeObra: "Asfalto Maldito (2020)",
        link: "https://www.amazon.com.br/Asfalto-maldito-jurou-%C3%BAltima-errado-ebook/dp/B0BX1XDR59/ref=sr_1_3?crid=26182JWQ20Z4H&dib=eyJ2IjoiMSJ9.gPgXeTeQuCMxcagEpVZT8X4ur7MmXiKp25SybNtGR1gpUQ-hb5aCurM9Z3IdMAAfy5IFqrj2_N78UmZGBz_F1Lsuk3PzJrKYXLDziiZJF_FH9YV22lZ8dGCy0_Hk7G_y-UFFrjzHWVaVi927_MkuAvBJmmv5oRnVh1CM-_BlMsuP2j0erteqXNFIa5bFgjMikH_vj0w7xTP5B9c7EzwleiZIdGtE0ITcwPdszcFe_tgTbUYkeM24uSx0h6Uh7fbBDTg3tAeQxT72CCm0KKd_xZyr2GBTf3DPhawyR5ziqzw9vmFKDmmSVH_PNqPWTk8LVpmspjb5g6N2XQYOVHXmucNgDwUwqKRUYXeA8B6DO0axwma3QruCeqqZKvUNJ2IibYqgB-IgSGjt3h_8r_w7Rc4XqzpMhqZDhPCK86ecotzfseIjiBY0vrrw5QVRtJpF.zr06RT3Vko2HNuxHQH9vkD7B2UkOow1V79ANoASr5iA&dib_tag=se&keywords=s.a.+cosby&qid=1736708413&sprefix=s.a.+c%2Caps%2C295&sr=8-3",
        fotoCapa:
          "https://m.media-amazon.com/images/I/91Lo5EvCaDL._SL1500_.jpg",
      },
      {
        nomeObra: "Lágrimas de Aço (2021)",
        link: "https://biblion.odilo.us/info/lagrimas-de-aco-01129542",
        fotoCapa:
          "https://covers.odilo.io/public/OdiloPlace_Bookwire_Brasil_BR/9786589132615_ORIGINAL.jpg",
      },
    ],
  },
  {
    id: 44,
    nomeAutor: "Fran Ross",
    periodoVida: "(1935–1985)",
    imagem:
      "https://cloudfront-us-east-1.images.arcpublishing.com/pmn/ELXEWTVVVRHQPPDL4CCVEYVRNA.jpg",
    textoSobre:
      "Fran Ross foi uma escritora e humorista americana cuja obra única combina sátira, mitologia e questões raciais.",
    arrayObras: [
      {
        nomeObra: "Oreo (1974)",
        link: "https://biblion.odilo.us/info/oreo-01128821",
        fotoCapa:
          "https://covers.odilo.io/public/OdiloPlace_Bookwire_Brasil_BR/9786556926315_3629_640x908.jpg",
      },
    ],
  },
  {
    id: 45,
    nomeAutor: "Phillis Wheatley",
    periodoVida: "(1753–1784)",
    imagem:
      "https://ebbg7broonn.exactdn.com/wp-content/uploads/2019/01/Phillis-Wheatley-Portrait.jpg?strip=all&lossy=1&ssl=1",
    textoSobre:
      "Phillis Wheatley foi a primeira escritora negra publicada nos Estados Unidos, conhecida por sua poesia que abordava temas religiosos e sociais.",
    arrayObras: [
      {
        nomeObra: "Complete Writings (1773)",
        link: "https://www.amazon.com.br/Complete-Writings-Phillis-Wheatley/dp/014042430X/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3JBXT15J5FLU0&dib=eyJ2IjoiMSJ9.jMzdgbBzcO6DFob6Q4YPJGdO1LXpr7GpS8WNtC_om0oODlAvY3s5dJXHS8-IIXRoHoRP-JzlALwHOFravtBY1kBRlvGJWYk981bCXEtXRIvOy86lS1eVMrZuzvWzzWvyRKUvp_G5vFjLrXtKxp83xv1jg_s0vX0QfWclgnMtPfLAAQ1pysdDHSm5rpGuxPIMid1td-i3NcUloPTqUmvZMskxF3qOycoc-NfNw_VVdSY7NOlTqrssD52a3ieZwNLD2YYHGqC5derMIsRGjskD_MSncZb0nmk3YzP23XpPpwCVA0HB36j7DLyt67ucRn9AoOmJacHW9dilkLdlOeoxSpwAd4GjsUqL15Pxe2OfKIz9HXmUtPZOr3e-2Dg18Q8-q_qTs53mE1KOTAPHDc1T4d9xCryuxjMUaxYS6h8J1TyP3q9lXpQ7OQ7nATMAb_Vk.9KnoPr0gyP_4aumiJaxPJjBQzV4GqEl-j3wy3Ei2B4U&dib_tag=se&keywords=Phillis+Wheatley&qid=1736708557&sprefix=phillis+wheatley%2Caps%2C390&sr=8-1&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9",
        fotoCapa:
          "https://www.amazon.com.br/Complete-Writings-Phillis-Wheatley/dp/014042430X/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3JBXT15J5FLU0&dib=eyJ2IjoiMSJ9.jMzdgbBzcO6DFob6Q4YPJGdO1LXpr7GpS8WNtC_om0oODlAvY3s5dJXHS8-IIXRoHoRP-JzlALwHOFravtBY1kBRlvGJWYk981bCXEtXRIvOy86lS1eVMrZuzvWzzWvyRKUvp_G5vFjLrXtKxp83xv1jg_s0vX0QfWclgnMtPfLAAQ1pysdDHSm5rpGuxPIMid1td-i3NcUloPTqUmvZMskxF3qOycoc-NfNw_VVdSY7NOlTqrssD52a3ieZwNLD2YYHGqC5derMIsRGjskD_MSncZb0nmk3YzP23XpPpwCVA0HB36j7DLyt67ucRn9AoOmJacHW9dilkLdlOeoxSpwAd4GjsUqL15Pxe2OfKIz9HXmUtPZOr3e-2Dg18Q8-q_qTs53mE1KOTAPHDc1T4d9xCryuxjMUaxYS6h8J1TyP3q9lXpQ7OQ7nATMAb_Vk.9KnoPr0gyP_4aumiJaxPJjBQzV4GqEl-j3wy3Ei2B4U&dib_tag=se&keywords=Phillis+Wheatley&qid=1736708557&sprefix=phillis+wheatley%2Caps%2C390&sr=8-1&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9",
      },
    ],
  },
  {
    id: 46,
    nomeAutor: "Claude McKay",
    periodoVida: "(1889–1948)",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Mackey.jpg",
    textoSobre:
      "Claude McKay foi um poeta e romancista da Renascença do Harlem que explorou questões de identidade negra, raça e política.",
    arrayObras: [
      {
        nomeObra: "Home to Harlem (1928)",
        link: "https://www.amazon.com.br/Home-Harlem-Claude-McKay/dp/048685258X/ref=sr_1_9?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1OI9TDOPQ4Y52&dib=eyJ2IjoiMSJ9.0kttunF6PtNXQHwzKWOQrLmx4Ad2N5j5PSn7_CQh1dbzvI8FD9vwyqgs8dIC8YkPqqytyExekmfuSRSGe4qTvVZXWNtlsSqZpV-esTmE6c6XiXzFVcELfzMiRqm0s0-0lfg1lt1yYAqdej93GZelsFDef30NLW6Cxo6TDpPiOyN4w0QEvKGsw-YqlOQ2Qv00T7jpnPYWpdPg956Ynhx4aj3AFlZ0Vskn4O-8PVD4oI_j0cJsv35ee07XW1wd0x2Hz9qpQmxSfXR6eW0U18f1s7o_9y6YPlxywPa2fEZg-z0XzFXmZylJEAJeopIBgPNbgDDQaqbkbCeE3Gu3GikZeih0weUFfX5uddCNza38UeRCQjUSVXsJvPncNJISedlOon9Re7crA6A9L5eo8YWXR92brDKLJx3jkmvromlnxBOvCCuqi-HHPu5_Hs8gk6CF.Dq0foW0HgDRrn6qa2JTVzpFQWuZmO6UPwnqT1r_T5XY&dib_tag=se&keywords=Claude+McKay&qid=1736708608&sprefix=claude+mckay%2Caps%2C218&sr=8-9&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9",
        fotoCapa:
          "https://m.media-amazon.com/images/I/81fcbFCepyL._SL1500_.jpg",
      },
      {
        nomeObra: "Harlem Shadows: Poems (1922)",
        link: "https://www.amazon.com.br/Harlem-Shadows-Poems-Claude-McKay/dp/0593242688/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1OI9TDOPQ4Y52&dib=eyJ2IjoiMSJ9.0kttunF6PtNXQHwzKWOQrLmx4Ad2N5j5PSn7_CQh1dbzvI8FD9vwyqgs8dIC8YkPqqytyExekmfuSRSGe4qTvVZXWNtlsSqZpV-esTmE6c6XiXzFVcELfzMiRqm0s0-0lfg1lt1yYAqdej93GZelsFDef30NLW6Cxo6TDpPiOyN4w0QEvKGsw-YqlOQ2Qv00T7jpnPYWpdPg956Ynhx4aj3AFlZ0Vskn4O-8PVD4oI_j0cJsv35ee07XW1wd0x2Hz9qpQmxSfXR6eW0U18f1s7o_9y6YPlxywPa2fEZg-z0XzFXmZylJEAJeopIBgPNbgDDQaqbkbCeE3Gu3GikZeih0weUFfX5uddCNza38UeRCQjUSVXsJvPncNJISedlOon9Re7crA6A9L5eo8YWXR92brDKLJx3jkmvromlnxBOvCCuqi-HHPu5_Hs8gk6CF.Dq0foW0HgDRrn6qa2JTVzpFQWuZmO6UPwnqT1r_T5XY&dib_tag=se&keywords=Claude+McKay&qid=1736708608&sprefix=claude+mckay%2Caps%2C218&sr=8-1&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9",
        fotoCapa:
          "https://m.media-amazon.com/images/I/714rRFte03L._SL1500_.jpg",
      },
    ],
  },
  {
    id: 47,
    nomeAutor: "Wole Soyinka",
    periodoVida: "(1934–Presente)",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq_wbOr6h0RDwwMqdFDVgt7qLv50PNe8xI7w&s",
    textoSobre:
      "Wole Soyinka, vencedor do Prêmio Nobel de Literatura de 1986, é um dramaturgo e escritor africano que aborda temas de colonialismo e identidade cultural.",
    arrayObras: [
      {
        nomeObra: "O Leão e a Jóia (1963)",
        link: "https://dedalus.usp.br/F/LE9CG624JPNRL43BT5TLR8E4H1XLP6BHI5CGUAF49Q5TEKB32Y-08447?func=full-set-set&set_number=000914&set_entry=000004&format=999",
        fotoCapa:
          "https://m.media-amazon.com/images/I/81tbvH+YO0L._SL1500_.jpg",
      },
      {
        nomeObra: "Aké: Os Anos de Infância (1981)",
        link: "https://sesc.i10bibliotecas.com.br/obra/527414",
        fotoCapa:
          "https://m.media-amazon.com/images/I/81tptve13tL._SL1500_.jpg",
      },
      {
        nomeObra: "Os Intérpretes (1965)",
        link: "https://www.amazon.com.br/Os-Int%C3%A9rpretes-Wole-Soyinka/dp/9898866314/ref=sr_1_3?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2V1MDWEFS2KYA&dib=eyJ2IjoiMSJ9.dufz7ELP9rY_kWBKJ9-35b56NdybPEnp1jHMHh-71kpelFNN-UNLRprwQkYdDvaOc4_mz-mRlV9hqZpSCGAEOf6TF2ejfuVWwDCY562GTB7lDDnTZa1icaK31wJI1fAX1HjSwuDP-7Co51gsGJIPB1FsOiVbZykwAQCNcuNJsZP8Rpg8skjjQnf6rBTFzKoafWX0YTMG2d7xDNFC6zJo5A5n6aJ87PcM9csPpT02mAXozYTf8AJwlZewiOGALvLPN42t-FekbWLIS1V4F9GYPV3ZVGRzjHVchHxN4sLAPVbfSNJeCZqKbOx9hr4CijMfmuZnLfxNLuW_fN4Ce3la0Yw-V6Adi4hIHaHWEH4ki0ZoaYvD4VzE2SXC75prxSvqns5NHlT3sX1fiE85NGnCKjDc9Wj21GJEtVSFC1xX-jiWHDje9L_JcKiwqX7oLb9n.B1vwNsRFTsqY0xiiSQUfSuoB94yjIMZ6Z9tqnXxbZBE&dib_tag=se&keywords=Wole+Soyinka&qid=1736708846&sprefix=wole+soyinka%2Caps%2C440&sr=8-3&ufe=app_do%3Aamzn1.fos.6121c6c4-c969-43ae-92f7-cc248fc6181d",
        fotoCapa:
          "https://m.media-amazon.com/images/I/61RWhj3uO8L._SL1000_.jpg",
      },
    ],
  },
  {
    id: 48,
    nomeAutor: "Ngũgĩ wa Thiong'o",
    periodoVida: "(1938–Presente)",
    imagem:
      "https://cdn.britannica.com/58/174158-050-3DC2A906/Ngugi-wa-Thiongo-2012.jpg",
    textoSobre:
      "Ngũgĩ wa Thiong'o é um escritor queniano de grande impacto, conhecido por seu ativismo pela descolonização cultural e pelo uso de línguas africanas em suas obras.",
    arrayObras: [
      {
        nomeObra: "Um Grão de Trigo (1967)",
        link: "https://dedalus.usp.br/F/LE9CG624JPNRL43BT5TLR8E4H1XLP6BHI5CGUAF49Q5TEKB32Y-09284?func=full-set-set&set_number=000937&set_entry=000001&format=999",
        fotoCapa:
          "https://www.amazon.com.br/Um-gr%C3%A3o-trigo-Ngugi-Thiongo-ebook/dp/B01432QSUQ/ref=sr_1_2?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2D5NT210Z7FWK&dib=eyJ2IjoiMSJ9.0UpYvcL0fxaauN36yhOPGtUrU15cKpH2QzX7Bf4Ew2jfXqRHcrg1orL_j1M18Ddz9_5bDCVB4N_gGgWMJkokOapXUh86jA4Os7_q8nQQ1dYZB3W84wd3piTs4SOtcCMlBKsmJarBjmxuD0yYbRu4JRvIbvP2vDfB8GGZRBzO6x6BIuXm0IzLz1SGdcRVQJ3YHpY8R66dtMwGDTEwW4wizgMIGxfTaC0j8ApoPJ07FXNVKktIdHx88lLmKk6LV7H7bX65Gio6nSygiV6jNd4Lw1KAJ8ZO7E3nejVz3hzS54axWU7bEQ7N08CMyQSYhyFWH8t3PzCPpiBGsaEhAVGZcERKzT-Mjzv9Jll33O86qWaF6_Ibe_LIzH4ZIETkCOyZba9msUcKwA_HOHqE0xsfcyZsxSjUFY2rAGPqsK3DzjEcUUfSYFxxTH-qH4_mbHKB.RUXQZkjP3EMLc3mWQY-t9GFDSlxVlcwM9grgq3qxk7A&dib_tag=se&keywords=Ng%C5%A9g%C4%A9+wa+Thiong%27o&qid=1736709018&sprefix=ng%C5%A9g%C4%A9+wa+thiong%27o%2Caps%2C222&sr=8-2",
      },
    ],
  },
  {
    id: 49,
    nomeAutor: "Bernardine Evaristo",
    periodoVida: "(1959–, Reino Unido)",
    imagem:
      "https://cdl-static.s3-sa-east-1.amazonaws.com/colaboradores/10872_gg.jpg",
    textoSobre:
      "Bernardine Evaristo é uma escritora britânica conhecida por suas narrativas inovadoras que destacam a diversidade das experiências negras.",
    arrayObras: [
      {
        nomeObra: "Garota, Mulher, Outras (2019)",
        link: "https://dedalus.usp.br/F/LE9CG624JPNRL43BT5TLR8E4H1XLP6BHI5CGUAF49Q5TEKB32Y-10380?func=full-set-set&set_number=000949&set_entry=000001&format=999",
        fotoCapa:
          "https://m.media-amazon.com/images/I/5116gXf34KL._SY445_SX342_DpWeblab_.jpg",
      },
    ],
  },
  {
    id: 50,
    nomeAutor: "Bryan Washington",
    periodoVida: "(1993–Presente)",
    imagem:
      "https://i.guim.co.uk/img/media/d8ba28603d7e9a02d85e59844e6586b9ccfff587/0_578_3589_2153/master/3589.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=66999a5314de41e41eabeb777c702c95",
    textoSobre:
      "Bryan Washington é um autor contemporâneo cuja escrita aborda questões de identidade, pertencimento e vida LGBTQIA+ em comunidades negras.",
    arrayObras: [
      {
        nomeObra: "Lote (2019)",
        link: "https://www.amazon.com.br/Lot-Stories-Bryan-Washington/dp/0525533680/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1NJJ56O0UCJKM&dib=eyJ2IjoiMSJ9.AGZQzwmWb1C59IxTnb6YACJmabvp_DugiMXYvhWn-AtcqsxOUasQXDAv9tnpF4U6U_JEjRrwa7E1AIRgZcdE4CSsV_IRrY0EMHGYlp4NlemqMVQnbDbKxC3PQoz87n0BOcm9yFq7VcMGDqY5KsRciLEFO8hz7gjLnqzNw4y1rezQzcAO-BugE8MOmi_t2OJrHCF_z73BeqpZBYWJWR7YfWMCS0Z07JiWe0Mepwn4FdG6-4y9Q7XvdBM4rXPuQZvjGiQyAQGKowmk0aj3hh9Ec--zfmhkSrgjMDJi284Ke5omYTe5JSc5Gmq7h4IydwzPA9KVdWDyvTCJSzEo1oI8j66R2zfWQNGxpX4Vfw-OUi6CUUiWLmBPtGtrNdmdjA1U4fhoN6sO4I3m11M9mTPaQrVWwsXMMG9cbzPHZYz7f4zy4R6ZFsMBLpqDsRTwB_Ao.mJH7HY6PHim-oQfQeExedvcu_JXwzQrQRyV8XFHDkVs&dib_tag=se&keywords=Bryan+Washington&qid=1736709412&sprefix=bryan+washington%2Caps%2C204&sr=8-1&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9",
        fotoCapa:
          "https://m.media-amazon.com/images/I/81YpO61Of+L._SL1500_.jpg",
      },
      {
        nomeObra: "Memorial (2020)",
        link: "https://www.amazon.com.br/Memorial-Novel-English-Bryan-Washington-ebook/dp/B084HG7DJX/ref=sr_1_2?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1NJJ56O0UCJKM&dib=eyJ2IjoiMSJ9.AGZQzwmWb1C59IxTnb6YACJmabvp_DugiMXYvhWn-AtcqsxOUasQXDAv9tnpF4U6U_JEjRrwa7E1AIRgZcdE4CSsV_IRrY0EMHGYlp4NlemqMVQnbDbKxC3PQoz87n0BOcm9yFq7VcMGDqY5KsRciLEFO8hz7gjLnqzNw4y1rezQzcAO-BugE8MOmi_t2OJrHCF_z73BeqpZBYWJWR7YfWMCS0Z07JiWe0Mepwn4FdG6-4y9Q7XvdBM4rXPuQZvjGiQyAQGKowmk0aj3hh9Ec--zfmhkSrgjMDJi284Ke5omYTe5JSc5Gmq7h4IydwzPA9KVdWDyvTCJSzEo1oI8j66R2zfWQNGxpX4Vfw-OUi6CUUiWLmBPtGtrNdmdjA1U4fhoN6sO4I3m11M9mTPaQrVWwsXMMG9cbzPHZYz7f4zy4R6ZFsMBLpqDsRTwB_Ao.mJH7HY6PHim-oQfQeExedvcu_JXwzQrQRyV8XFHDkVs&dib_tag=se&keywords=Bryan+Washington&qid=1736709412&sprefix=bryan+washington%2Caps%2C204&sr=8-2",
        fotoCapa:
          "https://m.media-amazon.com/images/I/8146v5GddIL._SL1500_.jpg",
      },
    ],
  },
];

botao1.addEventListener("click", () => {
  if (botao1State) {
    return;
  }
  botao1.classList.add("clicado");
  botao2.classList.remove("clicado");
  botao2State = false;
  section.innerHTML = "";
  preencherPagina(arrayObjetosAutores);
});

botao2.addEventListener("click", () => {
  if (botao2State) {
    return;
  }
  botao1.classList.remove("clicado");
  botao2.classList.add("clicado");
  botao1State = false;
  section.innerHTML = "";
  preencherPagina(arrayObjetosAutoreEstrangeiros);
});

function preencherPagina(arrayObjetos) {
  arrayObjetos.map((elemento) => {
    section.innerHTML += `<a href="/routes/autorPage.html" class="autor id${elemento.id}" onclick="acharAutor(${elemento.id})">
              <div class="imagem-autor id${elemento.id}">
                <img src="${elemento.imagem}" alt="não possui imagem" />
              </div>
              <div class="nome-autor id${elemento.id}">${elemento.nomeAutor}</div>
              <div class="periodo-autor id${elemento.id}">${elemento.periodoVida}</div>
            </a>`;
  });
}

function acharAutor(id) {
  if (botao1State) {
    arrayObjetos = arrayObjetosAutores;
  } else {
    arrayObjetos = arrayObjetosAutoreEstrangeiros;
  }

  let index = arrayObjetos.findIndex((elemento) => {
    return elemento.id === id;
  });
  localStorage.setItem("ObjetoAutor", JSON.stringify(arrayObjetos[index]));
}

arrayObjetosAutores.map((elemento) => {
  section.innerHTML += `<a href="/routes/autorPage.html" class="autor id${elemento.id}" onclick="acharAutor(${elemento.id})">
            <div class="imagem-autor id${elemento.id}">
              <img src="${elemento.imagem}" alt="não possui imagem" />
            </div>
            <div class="nome-autor id${elemento.id}">${elemento.nomeAutor}</div>
            <div class="periodo-autor id${elemento.id}">${elemento.periodoVida}</div>
          </a>`;
});
