import { useEffect, useState } from "react"
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import "./App.css"
import Menu from "./components/Menu/Menu"
import alex from "./assets/alex.jpg"
import Inicio from "./pages/Inicio"

function goToSection(sectionId) {
  const target = document.getElementById(sectionId)
  if (!target) return

  const start = window.scrollY
  const headerOffset = window.innerWidth <= 900 ? 65 : 0
  const end = target.offsetTop - headerOffset
  const duration = 1400

  let startTime = null

  function easeInOutQuart(t) {
    return t < 0.5
      ? 8 * t * t * t * t
      : 1 - Math.pow(-2 * t + 2, 4) / 2
  }

  function animation(currentTime) {
    if (!startTime) startTime = currentTime
    const timeElapsed = currentTime - startTime
    const progress = Math.min(timeElapsed / duration, 1)

    const ease = easeInOutQuart(progress)
    window.scrollTo(0, start + (end - start) * ease)

    if (timeElapsed < duration) {
      requestAnimationFrame(animation)
    }
  }

  requestAnimationFrame(animation)
}

export default function App() {
  const [activeSection, setActiveSection] = useState("inicio")

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")

      let current = ""

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 150
        const sectionHeight = section.clientHeight

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id")
        }
      })

      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="app-layout">

      <aside className="main-aside">
        <div className="profile-container" onClick={() => goToSection("inicio")}>
          <img className="img-profile" src={alex} alt="Profile" />
          <a onClick={() => goToSection("inicio")}>
            <h2 className="name-profile">
              <strong>Alex Messias</strong>
            </h2>
          </a>
        </div>

        <nav className="navbar">
          <ul>
            <a
              className={activeSection === "inicio" ? "active" : ""}
              onClick={() => goToSection("inicio")}
            >
              Início
            </a>

            <a
              className={activeSection === "sobre" ? "active" : ""}
              onClick={() => goToSection("sobre")}
            >
              Sobre mim
            </a>

            <a
              className={activeSection === "servicos" ? "active" : ""}
              onClick={() => goToSection("servicos")}
            >
              O que eu faço
            </a>

            <a
              className={activeSection === "resumo" ? "active" : ""}
              onClick={() => goToSection("resumo")}
            >
              Resumo
            </a>

            <a
              className={activeSection === "depoimentos" ? "active" : ""}
              onClick={() => goToSection("depoimentos")}
            >
              Depoimentos
            </a>

            <a
              className={activeSection === "contato" ? "active" : ""}
              onClick={() => goToSection("contato")}
            >
              Contato
            </a>

            <button onClick={() => goToSection("contato")}>
              Entrar em contato
            </button>
          </ul>
        </nav>
        <div className="social-icons">
          <a href="https://www.facebook.com/alex.messias.859182?locale=pt_BR" target="_blank" rel="noreferrer" title="Facebook">
            <FaFacebookF />
          </a>

          <a href="https://x.com/AlexMes60607703" target="_blank" rel="noreferrer" title="Twitter">
            <FaTwitter />
          </a>

          <a href="https://www.linkedin.com/in/alex-alle/" target="_blank" rel="noreferrer" title="LinkedIn">
            <FaLinkedinIn />
          </a>

          <a href="https://github.com/MessiahDev" target="_blank" rel="noreferrer" title="GitHub">
            <FaGithub />
          </a>

          <a href="https://www.instagram.com/alexmessias18/" target="_blank" rel="noreferrer" title="Instagram">
            <FaInstagram />
          </a>
        </div>
      </aside>

      <Menu goToSection={goToSection} />

      <div className="container">
        <section id="inicio">
          <Inicio goToSection={goToSection} />
        </section>

        <section id="sobre">
          <div className="section-content">Sobre mim</div>
        </section>

        <section id="servicos">
          <div className="section-content">O que eu faço</div>
        </section>

        <section id="resumo">
          <div className="section-content">Resumo</div>
        </section>

        <section id="depoimentos">
          <div className="section-content">Depoimentos</div>
        </section>

        <section id="contato">
          <div className="section-content">Contato</div>
        </section>
      </div>

    </div>
  )
}