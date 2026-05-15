import { NAV_LINKS } from "../../constants/Navigation"
import "./NavBar.css"

export default function NavBar({ activeSection, goToSection }) {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                {NAV_LINKS.map(({ id, label }) => (
                    <li key={id}>
                        <a
                            className={`navbar-link${activeSection === id ? " navbar-link--active" : ""}`}
                            onClick={() => goToSection(id)}
                        >
                            {activeSection === id && <span className="navbar-link-dot" aria-hidden="true" />}
                            {label}
                        </a>
                    </li>
                ))}

                <button className="navbar-cta" onClick={() => goToSection("contato")}>
                    Entrar em contato
                </button>
            </ul>
        </nav>
    )
}