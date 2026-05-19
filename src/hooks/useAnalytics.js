import { track } from "@vercel/analytics"
import { useCallback } from "react"

export function useAnalytics() {

    const trackEvent = useCallback((eventName, properties = {}) => {
        try {
            track(eventName, properties)
        } catch (error) {
            console.error("Erro ao enviar evento de analytics:", error)
        }
    }, [])

    return { trackEvent }
}
