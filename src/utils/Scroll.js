function easeInOutCubic(t) {
    return t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2
}

export function goToSection(sectionId) {
    const target = document.getElementById(sectionId)
    if (!target) return

    const start = window.scrollY
    const headerOffset = window.innerWidth <= 900 ? 65 : 0

    const end =
        target.getBoundingClientRect().top +
        window.scrollY -
        headerOffset

    const distance = end - start

    const duration = Math.min(
        Math.max(Math.abs(distance) * 0.3, 400),
        850
    )

    let startTime = null

    function animate(currentTime) {
        if (!startTime) startTime = currentTime

        const progress = Math.min(
            (currentTime - startTime) / duration,
            1
        )

        const eased = easeInOutCubic(progress)

        window.scrollTo(0, start + distance * eased)

        if (progress < 1) {
            requestAnimationFrame(animate)
        }
    }

    requestAnimationFrame(animate)
}