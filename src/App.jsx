import "./App.css"
import Menu from "./components/Menu/Menu"
import alex from "./assets/alex.jpg"

function goToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

export default function App() {
  return (
    <div>
      <aside className="main-aside">
        <div className="profile-container">
          <img className="img-profile" src={alex} alt="Profile" />
          <h2 className="name-profile"><strong>Alex Messias</strong></h2>
        </div>
        <nav className="navbar">
          <ul>
            <a onClick={() => goToSection("inicio")}>Início</a>
            <a onClick={() => goToSection("sobre")}>Sobre mim</a>
            <a onClick={() => goToSection("servicos")}>O que eu faço</a>
            <a onClick={() => goToSection("resumo")}>Resumo</a>
            <a onClick={() => goToSection("depoimentos")}>Depoimentos</a>
            <button type="button" onClick={() => goToSection("contato")}>Entrar em contato</button>
          </ul>
        </nav>
      </aside>

      <Menu />

      <div className="container">
        <section id="inicio">Início</section>
        <section id="sobre">Sobre mim</section>
        <section id="servicos">O que eu faço</section>
        <section id="resumo">Resumo</section>
        <section id="depoimentos">Depoimentos</section>
        <section id="contato">Contato</section>
      </div>

    </div>
  );
}