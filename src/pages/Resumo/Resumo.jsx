import SectionTitle from "../../components/SectionTitle/SectionTitle"
import { EXPERIENCIAS, STACK } from "../../constants/resumo"
import "./Resumo.css"

export default function Resumo() {
    return (
        <div className="container-resumo">
            <SectionTitle back="RESUMO" front="Resumo" />

            <div className="experiencias-grid">
                {EXPERIENCIAS.map(({ periodo, cargo, empresa, descricao, stack }) => (
                    <div key={empresa} className="exp-card">
                        <span className="exp-periodo">{periodo}</span>
                        <h3 className="exp-cargo">{cargo}</h3>
                        <p className="exp-empresa">{empresa}</p>
                        <p className="exp-descricao">{descricao}</p>
                        <p className="exp-stack">
                            <span className="exp-stack-label">Stack:</span>{" "}
                            {stack.join(" · ")}
                        </p>
                    </div>
                ))}
            </div>

            <div className="stack-section">
                <h3 className="stack-titulo">Stack técnico</h3>
                <div className="stack-tags">
                    {STACK.map((tech) => (
                        <span key={tech} className="stack-tag">{tech}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}