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
                            {label}
                        </a>
                    </li>
                ))}

                <a
                    className="navbar-cta"
                    href="https://wa.me/5521998138903"
                    target="_blank"
                    rel="noreferrer"
                >
                    Entrar em contato
                </a>
            </ul>
        </nav>
    )
}