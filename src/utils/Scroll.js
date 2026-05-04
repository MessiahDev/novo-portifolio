function easeInOutQuart(t) {
    return t < 0.5
        ? 8 * t * t * t * t
        : 1 - Math.pow(-2 * t + 2, 4) / 2
}

export function goToSection(sectionId) {
    const target = document.getElementById(sectionId)
    if (!target) return

    const start        = window.scrollY
    const headerOffset = window.innerWidth <= 900 ? 65 : 0
    const end          = target.offsetTop - headerOffset
    const duration     = 1400
    let startTime      = null

    function animate(currentTime) {
        if (!startTime) startTime = currentTime

        const elapsed  = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)

        window.scrollTo(0, start + (end - start) * easeInOutQuart(progress))

        if (elapsed < duration) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
}