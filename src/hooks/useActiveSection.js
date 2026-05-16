import { useEffect, useState, useRef } from "react"

export function useActiveSection() {
    const [activeSection, setActiveSection] = useState("inicio")
    const sectionsRef = useRef([])

    useEffect(() => {
        sectionsRef.current = Array.from(document.querySelectorAll("section"))

        function handleScroll() {
            let current = "inicio"
            const scrollY = window.scrollY

            for (const section of sectionsRef.current) {
                const sectionTop = section.offsetTop - 180
                const sectionHeight = section.clientHeight

                if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                    current = section.getAttribute("id")
                    break
                }
            }

            setActiveSection(current)
        }

        handleScroll()

        window.addEventListener("scroll", handleScroll, { passive: true })
        
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return activeSection
}