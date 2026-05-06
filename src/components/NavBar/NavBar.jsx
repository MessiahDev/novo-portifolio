import { NAV_LINKS } from "../../constants/navigation.jsx"
import "./NavBar.css"

export default function NavBar({ activeSection, goToSection }) {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                {NAV_LINKS.map(({ id, label }) => (
                    <a
                        key={id}
                        className={`navbar-link${activeSection === id ? " navbar-link--active" : ""}`}
                        onClick={() => goToSection(id)}
                    >
                        {label}
                    </a>
                ))}

                <button
                    className="navbar-cta"
                    onClick={() => goToSection("contato")}
                >
                    Entrar em contato
                </button>
            </ul>
        </nav>
    )
}