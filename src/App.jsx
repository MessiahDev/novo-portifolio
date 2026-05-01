import "./App.css"
import Menu from "./components/Menu/Menu"
import alex from "./assets/alex.jpg"
import Inicio from "./pages/Inicio"

function goToSection(sectionId) {
  const target = document.getElementById(sectionId)
  if (!target) return

  const start = window.scrollY
  const end = target.offsetTop
  const duration = 1400

  let startTime = null

  function easeInOutCubic(t) {
    return t < 0.5
    ? 8 * t * t * t * t
    : 1 - Math.pow(-2 * t + 2, 4) / 2
  }

  function animation(currentTime) {
    if (!startTime) startTime = currentTime
    const timeElapsed = currentTime - startTime
    const progress = Math.min(timeElapsed / duration, 1)

    const ease = easeInOutCubic(progress)
    window.scrollTo(0, start + (end - start) * ease)

    if (timeElapsed < duration) {
      requestAnimationFrame(animation)
    }
  }

  requestAnimationFrame(animation)
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
            <a onClick={() => goToSection("contato")}>Contato</a>
            <button type="button" onClick={() => goToSection("contato")}>Entrar em contato</button>
          </ul>
        </nav>
      </aside>

      <Menu />

      <div className="container">
        <section id="inicio"><Inicio goToSection={goToSection} /></section>
        <section id="sobre">Sobre mim</section>
        <section id="servicos">O que eu faço</section>
        <section id="resumo">Resumo</section>
        <section id="depoimentos">Depoimentos</section>
        <section id="contato">Contato</section>
      </div>

    </div>
  );
}