import { useState, useEffect } from "react"
import { FaChevronUp } from "react-icons/fa"
import { goToSection } from "../../utils/Scroll"
import "./ScrollToTop.css"

export default function ScrollToTop() {
    const [visivel, setVisivel] = useState(false)

    useEffect(() => {
        function handleScroll() {
            setVisivel(window.scrollY > window.innerHeight * 0.5)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <button
            className={`scroll-to-top${visivel ? " scroll-to-top--visivel" : ""}`}
            onClick={() => goToSection("inicio")}
            aria-label="Voltar ao topo"
        >
            <FaChevronUp />
        </button>
    )
}