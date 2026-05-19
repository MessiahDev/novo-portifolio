import { useEffect, useRef, useState } from "react"

export function useCountUp(target, duration = 1200) {
    const [count, setCount] = useState(0)
    const ref = useRef()
    const started = useRef(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true
                    const startTime = performance.now()

                    function tick(now) {
                        const elapsed = now - startTime
                        const progress = Math.min(elapsed / duration, 1)
                        const ease = 1 - Math.pow(1 - progress, 2)
                        setCount(Math.round(ease * target))
                        if (progress < 1) requestAnimationFrame(tick)
                        else setCount(target)
                    }

                    requestAnimationFrame(tick)
                }
            },
            { threshold: 0.4 }
        )

        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [target, duration])

    return { count, ref }
}