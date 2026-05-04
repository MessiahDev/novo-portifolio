import SectionTitle from "../../components/SectionTitle/SectionTitle"
import "./Sobre.css"

export default function Sobre() {
    return (
        <div className="container-sobre">
            <SectionTitle back="SOBRE MIM" front="Um pouco sobre mim" />

            <div className="grid-wrapper">
                <div className="row-2col">
                    <div className="cell">Coluna A</div>
                    <div className="cell">Coluna B</div>
                </div>

                <div className="row-4col">
                    <span className="divider-75" aria-hidden="true"></span>
                    <div className="cell">Coluna C</div>
                    <div className="cell">Coluna D</div>
                    <div className="cell">Coluna E</div>
                    <div className="cell">Coluna F</div>
                </div>
            </div>
        </div>
    )
}