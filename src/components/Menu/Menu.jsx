import { useState, useEffect } from "react"
import { useAnalytics } from "../../hooks/useAnalytics"
import "./Menu.css"

export default function Menu({ goToSection, activeSection }) {
    const [isOpen, setIsOpen] = useState(false)
    const { trackEvent } = useAnalytics()

    const openMenu = () => setIsOpen(true)
    const closeMenu = () => setIsOpen(false)

    const handleNavClick = (section) => {
        goToSection(section)
        closeMenu()
    }

    useEffect(() => {
        const media = window.matchMedia("(min-width: 901px)")
        const handleResize = () => {
            if (media.matches) closeMenu()
        }
        media.addEventListener("change", handleResize)
        return () => media.removeEventListener("change", handleResize)
    }, [])

    return (
        <>
            <button
                className={`nav-toggle${isOpen ? " nav-toggle--open" : ""}`}
                onClick={isOpen ? closeMenu : openMenu}
                aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={isOpen}
            >
                <span className="nav-toggle__bar" />
            </button>

            {isOpen && (
                <div className="nav-overlay" onClick={closeMenu} aria-hidden="true" />
            )}

            <nav className={`nav-drawer${isOpen ? " nav-drawer--open" : ""}`}>
                <ul className="nav-drawer__list">
                    <li className="nav-drawer__item">
                        <a 
                            className={`nav-drawer__link ${activeSection === "inicio" ? "nav-drawer__link--active" : ""}`}
                            onClick={() => handleNavClick("inicio")}
                        >
                            Início
                        </a>
                    </li>
                    <li className="nav-drawer__item">
                        <a 
                            className={`nav-drawer__link ${activeSection === "sobre" ? "nav-drawer__link--active" : ""}`}
                            onClick={() => handleNavClick("sobre")}
                        >
                            Sobre mim
                        </a>
                    </li>
                    <li className="nav-drawer__item">
                        <a 
                            className={`nav-drawer__link ${activeSection === "servicos" ? "nav-drawer__link--active" : ""}`}
                            onClick={() => handleNavClick("servicos")}
                        >
                            O que eu faço
                        </a>
                    </li>
                    <li className="nav-drawer__item">
                        <a 
                            className={`nav-drawer__link ${activeSection === "experiencia" ? "nav-drawer__link--active" : ""}`}
                            onClick={() => handleNavClick("experiencia")}
                        >
                            Experiência
                        </a>
                    </li>
                    <li className="nav-drawer__item">
                        <a 
                            className={`nav-drawer__link ${activeSection === "depoimentos" ? "nav-drawer__link--active" : ""}`}
                            onClick={() => handleNavClick("depoimentos")}
                        >
                            Depoimentos
                        </a>
                    </li>
                    <li className="nav-drawer__item">
                        <a 
                            className={`nav-drawer__link ${activeSection === "contato" ? "nav-drawer__link--active" : ""}`}
                            onClick={() => handleNavClick("contato")}
                        >
                            Contato
                        </a>
                    </li>
                </ul>

                <a
                    className="nav-drawer__cta"
                    href="https://telegram.me/messiasalex"
                    title="Telegram"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => trackEvent("Clique_Rede_Contato_Mobile", { meio_contato: "Telegram_MenuMobile_CTA" })}
                >
                    Entrar em contato
                </a>
            </nav>
        </>
    )
}