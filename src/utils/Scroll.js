function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3)
}

export function goToSection(sectionId) {
    const target = document.getElementById(sectionId)
    if (!target) return

    const start        = window.scrollY
    const headerOffset = window.innerWidth <= 900 ? 65 : 0
    const end          = target.offsetTop - headerOffset
    const distance     = Math.abs(end - start)
    const duration     = Math.min(Math.max(distance * 0.25, 350), 700) // ✅ mais rápido
    let startTime      = null

    function animate(currentTime) {
        if (!startTime) startTime = currentTime

        const elapsed  = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)

        window.scrollTo(0, start + (end - start) * easeOutCubic(progress))

        if (elapsed < duration) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
}