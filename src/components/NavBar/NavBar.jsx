import { NAV_LINKS } from "../../constants/Navigation"
import { useAnalytics } from "../../hooks/useAnalytics"
import "./NavBar.css"

export default function NavBar({ activeSection, goToSection }) {
    const { trackEvent } = useAnalytics()

    const handleNavClick = (id) => {
        goToSection(id)
    }

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                {NAV_LINKS.map(({ id, label }) => (
                    <li key={id}>
                        <a
                            href="#"
                            className={`navbar-link${activeSection === id ? " navbar-link--active" : ""}`}
                            onClick={() => handleNavClick(id)}
                        >
                            {label}
                        </a>
                    </li>
                ))}

                <li className="navbar-cta-item">
                    <a
                        className="navbar-cta"
                        href="https://telegram.me/messiasalex"
                        title="Telegram"
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => trackEvent("Clique_Rede_Contato", { meio_contato: "Telegram_NavBar_CTA" })}
                    >
                        Entrar em contato
                    </a>
                </li>
            </ul>
        </nav>
    )
}