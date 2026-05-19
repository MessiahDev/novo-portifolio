import { SOCIAL_LINKS } from "../../constants/Navigation.jsx"
import { useAnalytics } from "../../hooks/useAnalytics"
import "./SocialIcons.css"

export default function SocialIcons() {
    const { trackEvent } = useAnalytics()

    return (
        <div className="social-icons-wrapper">
            <span className="social-icons-separator" />
            <div className="social-icons">
                {SOCIAL_LINKS.map(({ href, icon, title }) => (
                    <a
                        key={title}
                        className="social-icons__link"
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        title={title}
                        onClick={() => trackEvent("Clique_Icone_Social", { rede: title })}
                    >
                        {icon}
                    </a>
                ))}
            </div>
        </div>
    )
}