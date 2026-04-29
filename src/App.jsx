import "./App.css"
import Menu from "./components/Menu/Menu"
import alex from "./assets/alex.jpg"

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
            <a href="#">Início</a>
            <a href="#">Sobre mim</a>
            <a href="#">O que eu faço</a>
            <a href="#">Resumo</a>
            <a href="#">Depoimentos</a>
            <a href="#">Contato</a>
            <button type="button">Entrar em contato</button>
          </ul>
        </nav>
      </aside>

      <Menu />

    </div>
  );
}