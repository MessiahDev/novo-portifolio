import { FaStar } from "react-icons/fa"
import SectionTitle from "../../components/SectionTitle/SectionTitle"
import { DEPOIMENTOS } from "../../constants/depoimentos"
import { useReveal } from "../../hooks/useReveal"
import "./Depoimentos.css"

function DepoimentoCard({
    nome,
    empresa,
    foto,
    estrelas,
    texto,
    index
}) {
    const ref = useReveal("grid", index)

    return (
        <div
            className="depoimento-card fade-up"
            ref={ref}
        >
            <div className="depoimento-estrelas">
                {Array.from({ length: estrelas }).map((_, i) => (
                    <FaStar key={i} />
                ))}
            </div>

            <div className="depoimento-texto-wrapper">
                <span
                    className="depoimento-barra"
                    aria-hidden="true"
                />

                <p className="depoimento-texto">
                    "{texto}"
                </p>
            </div>

            <div className="depoimento-autor">
                <img
                    className="depoimento-foto"
                    src={foto}
                    alt={`Foto de ${nome} da empresa ${empresa}`}
                    loading="lazy"
                    decoding="async"
                />

                <div className="depoimento-info">
                    <span className="depoimento-nome">
                        {nome}
                    </span>

                    <span className="depoimento-empresa">
                        {empresa}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default function Depoimentos() {
    return (
        <div className="container-depoimentos">
            <SectionTitle
                back="DEPOIMENTOS"
                front="Depoimentos"
            />

            <div className="depoimentos-grid">
                {DEPOIMENTOS.map((depoimento, index) => (
                    <DepoimentoCard
                        key={depoimento.nome}
                        {...depoimento}
                        index={index}
                    />
                ))}
            </div>
        </div>
    )
}