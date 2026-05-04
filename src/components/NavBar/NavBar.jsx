import { NAV_LINKS } from "../../constants/Navigation"
import "./NavBar.css"

export default function NavBar({ activeSection, goToSection }) {
    return (
        <nav className="navbar">
            <ul>
                {NAV_LINKS.map(({ id, label }) => (
                    <a
                        key={id}
                        className={activeSection === id ? "active" : ""}
                        onClick={() => goToSection(id)}
                    >
                        {label}
                    </a>
                ))}

                <button onClick={() => goToSection("contato")}>
                    Entrar em contato
                </button>
            </ul>
        </nav>
    )
}