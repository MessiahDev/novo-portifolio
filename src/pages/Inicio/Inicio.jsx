import { FaChevronDown, FaWhatsapp } from "react-icons/fa"
import { FaArrowDown } from "react-icons/fa6";
import "./Inicio.css"

export default function Inicio({ goToSection }) {
    return (
        <div className="inicio">
            <div className="parallax-bg"></div>
            <div className="inicio-overlay"></div>

            <div className="inicio-content">
                <span className="inicio-badge">
                    <span className="inicio-badge-dot"></span>
                    Disponível para projetos
                </span>

                <p className="intro-text">Olá, eu sou</p>

                <h1 className="main-title">Alex Messias</h1>

                <p className="sub-title">Desenvolvedor <span>Full-Stack</span></p>

                <p className="inicio-desc">
                    Criando aplicações web e mobile modernas,<br />
                    performáticas e com foco na experiência do usuário.
                </p>

                <div className="inicio-actions">
                    <button className="cta-btn cta-btn--primary" onClick={() => goToSection("contato")}>
                        <FaWhatsapp /> Fale comigo
                    </button>
                    <button className="cta-btn cta-btn--outline" onClick={() => goToSection("experiencia")}>
                        Ver experiências <FaArrowDown />
                    </button>
                </div>
            </div>

            <div className="scroll-area" onClick={() => goToSection("sobre")}>
                <FaChevronDown className="scroll-down" />
            </div>
        </div>
    )
}