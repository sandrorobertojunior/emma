import "./style.css";

import logo from "../../assets/logo.png";
import imagemMenu from "../../assets/barra.png";

export default function Header() {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <img className="logo" src={logo} alt="LOGO" />
          <div className="ancoras">
            <a href="/home.html" className="pressionado">
              INÍCIO
            </a>
            <a href="/routes/literaturaPage.html">LITERATURA</a>
            <a href="#">CRIADORES DE CONTEÚDO</a>
            <a href="#">PERIÓDICOS E ARTIGOS</a>
            <a href="/routes/legislacaoPage.html">LEGISLAÇÃO</a>
          </div>
          <button className="botao-abrirModal">
            <img src={imagemMenu} className="imagem" />
          </button>
        </nav>
        <div className="fundo-preto fechado"></div>
        <nav className="nav2 fechado">
          <div className="bloco-nav2">
            <button className="botao-fechar" name="botao-fechar">
              X
            </button>
            <a href="#">nome autor</a>
            <a href="#">nome autor</a>
            <a href="#">nome autor</a>
            <a href="#">nome autor</a>
            <a href="#">nome autor</a>
            <a href="#">nome autor</a>
          </div>
        </nav>
      </header>
    </>
  );
}
