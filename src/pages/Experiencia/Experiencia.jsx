import SectionTitle from "../../components/SectionTitle/SectionTitle"
import { EXPERIENCIAS, STACK } from "../../constants/experiencia"
import { useReveal } from "../../hooks/useReveal"

import "./Experiencia.css"

function ExpCard({ periodo, cargo, empresa, descricao, stack, index }) {
    const ref = useReveal("grid", index)

    return (
        <div className="exp-card fade-up" ref={ref}>
            <span className="exp-periodo">{periodo}</span>
            <h3 className="exp-cargo">{cargo}</h3>
            <p className="exp-empresa">{empresa}</p>
            <p className="exp-descricao">{descricao}</p>

            <p className="exp-stack">
                <span className="exp-stack-label">Stack:</span>{" "}
                {stack.join(" · ")}
            </p>
        </div>
    )
}

function StackTag({ tech, index }) {
    const ref = useReveal("tags", index)

    return (
        <span className="stack-tag fade-up" ref={ref}>
            {tech}
        </span>
    )
}

export default function Experiencia() {
    return (
        <div className="container-experiencia">
            <SectionTitle back="EXPERIÊNCIAS" front="Experiências" />

            <div className="experiencias-grid">
                {EXPERIENCIAS.map((exp, index) => (
                    <ExpCard key={exp.empresa} {...exp} index={index} />
                ))}
            </div>

            <div className="stack-section">
                <h3 className="stack-titulo">Stack técnico</h3>
                <div className="stack-tags">
                    {STACK.map((tech, index) => (
                        <StackTag key={tech} tech={tech} index={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}