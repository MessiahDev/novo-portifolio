import "./styles/app.css"

import { useActiveSection } from "./hooks/useActiveSection"
import { goToSection } from "./utils/Scroll"

import Menu from "./components/Menu/Menu"
import ProfileCard from "./components/ProfileCard/ProfileCard"
import NavBar from "./components/NavBar/NavBar"
import SocialIcons from "./components/SocialIcons/SocialIcons"
import Inicio from "./pages/Inicio/Inicio"
import Sobre from "./pages/Sobre/Sobre"

export default function App() {
    const activeSection = useActiveSection()

    return (
        <div className="app-layout">

            <aside className="main-aside">
                <ProfileCard onClick={() => goToSection("inicio")} />
                <NavBar activeSection={activeSection} goToSection={goToSection} />
                <SocialIcons />
            </aside>

            <Menu goToSection={goToSection} />

            <div className="container-inicio">
                <section id="inicio">      <Inicio goToSection={goToSection} />                   </section>
                <section id="sobre">       <Sobre />                                               </section>
                <section id="servicos">    <div className="section-content">O que eu faço</div>   </section>
                <section id="resumo">      <div className="section-content">Resumo</div>           </section>
                <section id="depoimentos"> <div className="section-content">Depoimentos</div>      </section>
                <section id="contato">     <div className="section-content">Contato</div>          </section>
            </div>

        </div>
    )
}