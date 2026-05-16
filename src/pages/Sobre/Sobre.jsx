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
                    <h3 className="bio-headline">
                        Eu sou <span className="bio-name">Alex Messias,</span> um desenvolvedor Full-Stack
                    </h3>
                    <p className="bio-text">
                        Já estou na área há mais de 5 anos profissionalmente, mas comecei a programar desde os 14 anos de idade, movido pela curiosidade de entender como as coisas funcionam por trás das telas.
                    </p>
                    <p className="bio-text">
                        Ao longo da minha trajetória, desenvolvi soluções para empresas de diferentes segmentos — desde startups em fase inicial até corporações consolidadas no mercado, sempre com foco em qualidade, desempenho e experiência do usuário.
                    </p>
                    <p className="bio-text">
                        Hoje atuo como desenvolvedor fullstack, combinando habilidades sólidas em front-end e back-end para criar aplicações completas, escaláveis e com interfaces que realmente fazem sentido para quem usa.
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
                        <FaWhatsapp /> Enviar via WhatsApp
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