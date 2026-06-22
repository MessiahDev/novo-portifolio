import SectionTitle from "../../components/SectionTitle/SectionTitle"
import { FiAlertTriangle, FiExternalLink, FiGithub } from "react-icons/fi"
import { PROJETOS } from "../../constants/projetos"
import { useReveal } from "../../hooks/useReveal"
import "./Projetos.css"

function ProjetoCard({ nome, periodo, imagem, descricao, destaques, stack, links, aviso, index }) {
    const ref = useReveal("grid", index)

    return (
        <div className="projeto-card fade-up" ref={ref}>
            {imagem && (
                <div className="projeto-imagem">
                    <img src={imagem} alt={nome} loading="lazy" />
                </div>
            )}

            <div className="projeto-conteudo">
                {aviso && (
                    <div className="projeto-aviso">
                        <FiAlertTriangle size={14} />
                        {aviso}
                    </div>
                )}

                <div className="projeto-header">
                    <span className="projeto-periodo">{periodo}</span>
                    <div className="projeto-links">
                        {links.demo && (
                            <a href={links.demo} target="_blank" rel="noopener noreferrer" className="projeto-link">
                                <FiExternalLink size={16} />
                                Projeto
                            </a>
                        )}
                        {links.backRepo && (
                            <a href={links.backRepo} target="_blank" rel="noopener noreferrer" className="projeto-link">
                                <FiGithub size={16} />
                                Backend
                            </a>
                        )}
                        {links.frontRepo && (
                            <a href={links.frontRepo} target="_blank" rel="noopener noreferrer" className="projeto-link">
                                <FiGithub size={16} />
                                Frontend
                            </a>
                        )}
                    </div>
                </div>

                <h3 className="projeto-nome">{nome}</h3>
                <p className="projeto-descricao">{descricao}</p>

                <ul className="projeto-destaques">
                    {destaques.map((d, i) => (
                        <li key={i} className="projeto-destaque-item">{d}</li>
                    ))}
                </ul>

                <p className="projeto-stack">
                    <span className="projeto-stack-label">Stack:</span>{" "}
                    {stack.join(" · ")}
                </p>
            </div>
        </div>
    )
}

export default function Projetos() {
    return (
        <div className="container-projetos">
            <SectionTitle back="PROJETOS" front="Projetos" />
            <div className="projetos-grid">
                {PROJETOS.map((projeto, index) => (
                    <ProjetoCard key={projeto.nome} {...projeto} index={index} />
                ))}
            </div>
        </div>
    )
}