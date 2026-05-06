import { FaDesktop, FaPaintBrush, FaExchangeAlt, FaChartBar } from "react-icons/fa"
import SectionTitle from "../../components/SectionTitle/SectionTitle"
import { SERVICOS } from "../../constants/servicos"
import "./Servicos.css"

const ICON_MAP = {
    FaDesktop:     <FaDesktop />,
    FaPaintBrush:  <FaPaintBrush />,
    FaExchangeAlt: <FaExchangeAlt />,
    FaChartBar:    <FaChartBar />,
}

export default function Servicos() {
    return (
        <div className="container-servicos">
            <SectionTitle back="SERVIÇO" front="O que eu faço?" />

            <div className="servicos-grid">
                {SERVICOS.map(({ icon, title, description }) => (
                    <div key={title} className="servico-card">
                        <div className="servico-icon">
                            {ICON_MAP[icon]}
                        </div>
                        <div className="servico-content">
                            <h3 className="servico-title">{title}</h3>
                            <p className="servico-description">{description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}