import { useEffect, useRef } from "react"

export function useScrollAnime(delay = 0) {
    const ref = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add("anime-init")
                    }, delay)
                } else {
                    entry.target.classList.remove("anime-init")
                }
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -60px 0px"
            }
        )

        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [delay])

    return ref
}