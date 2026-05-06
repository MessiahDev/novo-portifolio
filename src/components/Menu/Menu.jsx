import { useState, useEffect } from "react";
import "./Menu.css";

export default function Menu({ goToSection }) {
    const [isOpen, setIsOpen] = useState(false);

    const openMenu  = () => setIsOpen(true);
    const closeMenu = () => setIsOpen(false);

    const handleNavClick = (section) => {
        goToSection(section);
        closeMenu();
    };

    useEffect(() => {
        const media = window.matchMedia("(min-width: 901px)");
        const handleResize = () => {
            if (media.matches) closeMenu();
        };
        media.addEventListener("change", handleResize);
        return () => media.removeEventListener("change", handleResize);
    }, []);

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

            <nav className={`nav-drawer${isOpen ? " nav-drawer--open" : ""}`} aria-hidden={!isOpen}>
                <ul className="nav-drawer__list">
                    <li className="nav-drawer__item"><a className="nav-drawer__link" onClick={() => handleNavClick("inicio")}>Início</a></li>
                    <li className="nav-drawer__item"><a className="nav-drawer__link" onClick={() => handleNavClick("sobre")}>Sobre mim</a></li>
                    <li className="nav-drawer__item"><a className="nav-drawer__link" onClick={() => handleNavClick("servicos")}>O que eu faço</a></li>
                    <li className="nav-drawer__item"><a className="nav-drawer__link" onClick={() => handleNavClick("resumo")}>Resumo</a></li>
                    <li className="nav-drawer__item"><a className="nav-drawer__link" onClick={() => handleNavClick("depoimentos")}>Depoimentos</a></li>
                    <li className="nav-drawer__item"><a className="nav-drawer__link" onClick={() => handleNavClick("contato")}>Contato</a></li>
                </ul>
                <button
                    className="nav-drawer__cta"
                    type="button"
                    onClick={() => handleNavClick("contato")}
                >
                    Entrar em contato
                </button>
            </nav>
        </>
    );
}