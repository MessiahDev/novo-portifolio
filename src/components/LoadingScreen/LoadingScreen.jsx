import { useEffect, useState } from "react"
import "./LoadingScreen.css"

const TEXTO = "Alex Messias"

export default function LoadingScreen({ onComplete }) {
    const [texto, setTexto] = useState("")
    const [saindo, setSaindo] = useState(false)

    useEffect(() => {
        let i = 0
        const intervalo = setInterval(() => {
            setTexto(TEXTO.slice(0, i + 1))
            i++
            if (i === TEXTO.length) {
                clearInterval(intervalo)
                setTimeout(() => setSaindo(true), 1300)
                setTimeout(() => onComplete(), 1900)
            }
        }, 60)

        return () => clearInterval(intervalo)
    }, [])

    return (
        <div className={`loading-screen${saindo ? " loading-screen--saindo" : ""}`}>
            <div className="loading-texto">
                {texto}
                <span className="loading-cursor" />
            </div>
        </div>
    )
}
