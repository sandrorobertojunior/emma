import Header from "../../components/header";
import "./style.css";

export default function Home() {
  return (
    <>
      <Header></Header>
      <main className="main-inicio">
        <section className="section-inicio-video">
          <div className="video">
            <video src=""></video>
          </div>
          <div className="bloco-video"></div>
        </section>
        <section className="section-inicio-sobrenos">
          <div className="bloco-verde">
            <div className="bloco-imagem">
              <img className="imagem" src="./icons/image.png" alt="" />
            </div>
            <div className="textos">
              <h1 className="titulo">SOBRE</h1>
              <p className="paragrafo">
                A escolha do tema foi motivada por uma importante conquista de
                2024, quando o dia 20 de novembro foi instituído como feriado
                nacional, em celebração ao Dia Nacional de Zumbi e da
                Consciência Negra. Unindo essa conquista aos conhecimentos
                adquiridos no curso, definindo-se o título: Literatura e Vozes
                Negras. O objetivo principal é criar uma fonte clara e objetiva
                que auxilie novos pesquisadores a localizar, de forma rápida e
                eficaz, obras e temas relevantes relacionados à literatura
                negra. Para isso, será apresentada uma trajetória do negro na
                literatura, analisando-o enquanto personagem, autor e tema
                central das obras. Alguns autores têm destaque especial,
                permitindo uma análise aprofundada da complexidade e riqueza da
                produção literária negra.
              </p>
            </div>
            <div className="bloco-cinza"></div>
          </div>
        </section>
      </main>
    </>
  );
}
