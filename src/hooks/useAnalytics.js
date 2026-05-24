import { track } from "@vercel/analytics/react"
import { useCallback } from "react"

export function useAnalytics() {
    const trackEvent = useCallback((eventName, properties = {}) => {
        if (!import.meta.env.PROD) return

        track(eventName, properties)
    }, [])

    return { trackEvent }
}