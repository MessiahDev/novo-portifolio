import { useEffect, useRef } from "react"

const REVEAL_CONFIG = {
    section: {
        delay: 0,
    },
    grid: {
        delayStep: 120,
    },
    list: {
        delayStep: 60,
    },
    tags: {
        delayStep: 40,
    }
}

export function useReveal(type = "section", index = 0) {
    const ref = useRef(null)

    useEffect(() => {
        const config = REVEAL_CONFIG[type] || REVEAL_CONFIG.section
        const el = ref.current
        if (!el) return

        const delay = config.delayStep ? index * config.delayStep : (config.delay ?? 0)
        el.style.setProperty("--fade-delay", `${delay}ms`)

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    requestAnimationFrame(() => {
                        entry.target.classList.add("fade-up-init")
                    })
                } else if (entry.boundingClientRect.top > 0) {
                    entry.target.classList.remove("fade-up-init")
                }
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -60px 0px",
            }
        )

        observer.observe(el)

        return () => observer.disconnect()
    }, [type, index])

    return ref
}