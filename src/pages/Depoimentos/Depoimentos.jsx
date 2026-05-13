import { FaStar } from "react-icons/fa"
import SectionTitle from "../../components/SectionTitle/SectionTitle"
import { DEPOIMENTOS } from "../../constants/depoimentos"
import "./Depoimentos.css"

export default function Depoimentos() {
    return (
        <div className="container-depoimentos">
            <SectionTitle back="DEPOIMENTOS" front="Depoimentos" />

            <div className="depoimentos-grid">
                {DEPOIMENTOS.map(({ nome, empresa, foto, estrelas, texto }) => (
                    <div key={nome} className="depoimento-card">
                        <div className="depoimento-estrelas">
                            {Array.from({ length: estrelas }).map((_, i) => (
                                <FaStar key={i} />
                            ))}
                        </div>

                        <div className="depoimento-texto-wrapper">
                            <span className="depoimento-barra" aria-hidden="true" />
                            <p className="depoimento-texto">"{texto}"</p>
                        </div>

                        <div className="depoimento-autor">
                            <img
                                className="depoimento-foto"
                                src={foto}
                                alt={nome}
                            />
                            <div className="depoimento-info">
                                <span className="depoimento-nome">{nome}</span>
                                <span className="depoimento-empresa">{empresa}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}