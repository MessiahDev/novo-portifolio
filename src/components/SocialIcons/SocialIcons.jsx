import { SOCIAL_LINKS } from "../../constants/Navigation.jsx"
import "./SocialIcons.css"

export default function SocialIcons() {
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
                    >
                        {icon}
                    </a>
                ))}
            </div>
        </div>
    )
}