import { useState, useEffect } from "react"
import { FaChevronUp } from "react-icons/fa"
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

    function scrollTopo() {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <button
            className={`scroll-to-top${visivel ? " scroll-to-top--visivel" : ""}`}
            onClick={scrollTopo}
            aria-label="Voltar ao topo"
        >
            <FaChevronUp />
        </button>
    )
}