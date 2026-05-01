import { useEffect, useRef } from "react"
import { FaChevronDown } from "react-icons/fa"
import "./Inicio.css"

export default function Inicio({ goToSection }) {
    const bgRef = useRef()

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY
            bgRef.current.style.transform = `translateY(${offset * 0.3}px)`
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className="inicio">
            <div className="parallax-bg" ref={bgRef}></div>

            <p>Bem-vindo</p>
            <h2>Desenvolvedor Full-Stack</h2>

            <div
                className="scroll-area"
                onClick={() => goToSection("sobre")}
            >
                <FaChevronDown className="scroll-down" />
            </div>
        </div>
    )
}