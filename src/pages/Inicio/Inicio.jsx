import { FaChevronDown, FaWhatsapp } from "react-icons/fa"
import { FaArrowDown } from "react-icons/fa6"
import backgroundImg from "../../assets/background.webp"
import "./Inicio.css"

export default function Inicio({ goToSection }) {
    return (
        <section className="inicio">
            <img 
                src={backgroundImg}
                alt="Vista do Rio de Janeiro ao pôr do sol"
                className="hero-background"
                fetchPriority="high"
                loading="eager"
                decoding="async"
            />

            <div className="inicio-overlay" />

            <div className="inicio-content">
                <span className="inicio-badge">
                    <span className="inicio-badge-dot" />
                    Disponível para projetos
                </span>

                <p className="intro-text">
                    Olá, eu sou
                </p>

                <h1 className="main-title">
                    Alex Messias
                </h1>

                <p className="sub-title">
                    Desenvolvedor <span>Full-Stack</span>
                </p>

                <p className="inicio-desc">
                    Criando aplicações web e mobile modernas,
                    <br />
                    performáticas e com foco na experiência do usuário.
                </p>

                <div className="inicio-actions">
                    <a
                        className="cta-btn cta-btn--primary"
                        href="https://wa.me/5521998138903"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Entrar em contato pelo WhatsApp"
                    >
                        <FaWhatsapp />
                        Fale comigo
                    </a>

                    <button
                        className="cta-btn cta-btn--outline"
                        onClick={() => goToSection("experiencia")}
                        aria-label="Ver experiências"
                    >
                        Ver experiências
                        <FaArrowDown />
                    </button>
                </div>
            </div>

            <div
                className="scroll-area"
                onClick={() => goToSection("sobre")}
                aria-label="Rolar para seção sobre"
            >
                <FaChevronDown className="scroll-down" />
            </div>
        </section>
    )
}