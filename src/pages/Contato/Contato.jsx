import { FaWhatsapp, FaEnvelope, FaLinkedinIn } from "react-icons/fa"
import SectionTitle from "../../components/SectionTitle/SectionTitle"
import { CONTATO_INFO } from "../../constants/contato"
import "./Contato.css"

const ICON_MAP = {
    FaWhatsapp:   <FaWhatsapp />,
    FaEnvelope:   <FaEnvelope />,
    FaLinkedinIn: <FaLinkedinIn />,
}

export default function Contato() {
    return (
        <div className="container-contato">
            <SectionTitle back="CONTATO" front="Contato" />

            <div className="contato-content">
                <h2 className="contato-titulo">Tem um projeto em mente?</h2>
                <p className="contato-descricao">
                    Estou disponível para projetos freelance, consultorias e parcerias.
                    Respondo geralmente em poucas horas. A forma mais rápida é pelo WhatsApp.
                </p>

                <ul className="contato-lista">
                    {CONTATO_INFO.map(({ icon, label, valor, href }) => (
                        <li key={label} className="contato-item">
                            <a href={href} target="_blank" rel="noreferrer" className="contato-link">
                                <span className="contato-icone">
                                    {ICON_MAP[icon]}
                                </span>
                                <div className="contato-texto">
                                    <span className="contato-label">{label}</span>
                                    <span className="contato-valor">{valor}</span>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}