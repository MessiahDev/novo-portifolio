import { track } from "@vercel/analytics"
import { useCallback } from "react"

export function useAnalytics() {
    const trackEvent = useCallback((eventName, properties = {}) => {
        if (!import.meta.env.PROD) return

        track(eventName, properties).catch((error) => {
            console.error("Erro ao enviar evento:", error)
        })
    }, [])

    return { trackEvent }
}