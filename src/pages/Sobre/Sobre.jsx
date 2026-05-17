import { FaWhatsapp } from "react-icons/fa"
import SectionTitle from "../../components/SectionTitle/SectionTitle"
import { useCountUp } from "../../hooks/useCountUp"
import { STATS, INFO } from "../../constants/sobre"
import { useReveal } from "../../hooks/useReveal"
import "./Sobre.css"

function StatItem({ value, suffix, label }) {
    const { count, ref } = useCountUp(value)
    return (
        <div className="stat-item" ref={ref}>
            <span className="stat-number">{count}{suffix}</span>
            <span className="stat-label">{label}</span>
        </div>
    )
}

export default function Sobre() {
    const bioRef = useReveal("section")
    const infoRef = useReveal("section")
    const statsRef = useReveal("section")

    return (
        <div className="container-sobre">
            <SectionTitle
                back="SOBRE MIM"
                front="Um pouco sobre mim"
            />

            <div
                className="sobre-grid fade-up"
                ref={bioRef}
            >
                <div className="sobre-bio">
                    <h2 className="bio-headline">
                        Eu sou <span className="bio-name">Alex Messias,</span> um desenvolvedor Full-Stack
                    </h2>
                    <p className="bio-text">
                        Comecei minha trajetória em 2018 como estagiário e desde então venho acumulando experiência em desenvolvimento web e mobile, trabalhando com empresas de diferentes segmentos.
                    </p>
                    <p className="bio-text">
                        Tenho experiência prática com tecnologias como C#, .Net Core, React, Vue.js, TypeScript e bancos de dados como MySQL e PostgreSQL — sempre buscando entregar soluções completas, do back-end ao front-end.
                    </p>
                    <p className="bio-text">
                        Hoje busco novos desafios como desenvolvedor fullstack, aplicando meus conhecimentos em projetos que gerem impacto real para usuários e empresas.
                    </p>
                </div>

                <div
                    className="sobre-info fade-up"
                    ref={infoRef}
                >
                    <ul className="info-list">
                        {INFO.map(({ label, value, accent }) => (
                            <li key={label} className="info-item">
                                <span className="info-label">
                                    {label}:
                                </span>

                                <span className={`info-value${accent ? " accent" : ""}`}>
                                    {value}
                                </span>
                            </li>
                        ))}
                    </ul>

                    <a
                        className="whatsapp-btn"
                        href="https://wa.me/5521998138903"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaWhatsapp /> Enviar mensagem
                    </a>
                </div>
            </div>

            <div
                className="stats-row fade-up"
                ref={statsRef}
            >
                <span className="divider-75" aria-hidden="true" />

                {STATS.map((stat, index) => (
                    <StatItem
                        key={stat.label}
                        {...stat}
                        index={index}
                    />
                ))}
            </div>
        </div>
    )
}