import { useEffect, useState } from "react"

export function useActiveSection() {
    const [activeSection, setActiveSection] = useState("inicio")

    useEffect(() => {
        function handleScroll() {
            let current = ""

            document.querySelectorAll("section").forEach(section => {
                const top    = section.offsetTop - 150
                const height = section.clientHeight

                if (window.scrollY >= top && window.scrollY < top + height) {
                    current = section.getAttribute("id")
                }
            })

            if (current) setActiveSection(current)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return activeSection
}