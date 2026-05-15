import "./styles/App.css"

import { useActiveSection } from "./hooks/useActiveSection"

import Aside from "./components/Aside/Aside"
import Menu from "./components/Menu/Menu"
import Footer from "./components/Footer/Footer"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"

import Inicio from "./pages/Inicio/Inicio"
import Sobre from "./pages/Sobre/Sobre"
import Servicos from "./pages/Servicos/Servicos"
import Resumo from "./pages/Resumo/Resumo"
import Depoimentos from "./pages/Depoimentos/Depoimentos"
import Contato from "./pages/Contato/Contato"
import { goToSection } from "./utils/Scroll"

export default function App() {
    const activeSection = useActiveSection()

    return (
        <div className="app-layout">

            <Aside activeSection={activeSection} />

            <Menu goToSection={goToSection} />

            <div className="container-inicio">
                <section id="inicio">      <Inicio goToSection={goToSection} /> </section>
                <section id="sobre">       <Sobre />                            </section>
                <section id="servicos">    <Servicos />                         </section>
                <section id="resumo">      <Resumo />                           </section>
                <section id="depoimentos"> <Depoimentos />                      </section>
                <section id="contato">     <Contato />                          </section>

                <Footer />
            </div>

            <ScrollToTop />

        </div>
    )
}