import { useState } from "react"
import "./styles/App.css"

import { useAnalytics } from "./hooks/useAnalytics"

import { useActiveSection } from "./hooks/useActiveSection"
import { goToSection } from "./utils/Scroll"

import LoadingScreen from "./components/LoadingScreen/LoadingScreen"
import Aside from "./components/Aside/Aside"
import Menu from "./components/Menu/Menu"
import Footer from "./components/Footer/Footer"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"

import Inicio from "./pages/Inicio/Inicio"
import Sobre from "./pages/Sobre/Sobre"
import Servicos from "./pages/Servicos/Servicos"
import Experiencia from "./pages/Experiencia/Experiencia"
import Depoimentos from "./pages/Depoimentos/Depoimentos"
import Contato from "./pages/Contato/Contato"

export default function App() {
    const [carregando, setCarregando] = useState(true)
    const activeSection = useActiveSection()
    const { trackEvent } = useAnalytics()

    const handleMenuNavigation = (sectionId) => {
        goToSection(sectionId, (id) => {
            trackEvent("Navegacao_Clique_Seccao", { secao_destino: id })
        })
    }

    return (
        <>
            {carregando && <LoadingScreen onComplete={() => setCarregando(false)} />}

            <div className="app-layout">
                <Aside activeSection={activeSection} goToSection={handleMenuNavigation} />
                <Menu goToSection={handleMenuNavigation} activeSection={activeSection} />

                <main className="main-content">
                    <section id="inicio">
                        <Inicio goToSection={handleMenuNavigation} />
                    </section>
                    <section id="sobre"><Sobre /></section>
                    <section id="servicos"><Servicos /></section>
                    <section id="experiencia"><Experiencia /></section>
                    <section id="depoimentos"><Depoimentos /></section>
                    <section id="contato"><Contato /></section>

                    <Footer />
                </main>

                <ScrollToTop />
            </div>
        </>
    )
}
