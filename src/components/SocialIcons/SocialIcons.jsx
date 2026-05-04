import { SOCIAL_LINKS } from "../../constants/Navigation"
import "./SocialIcons.css"

export default function SocialIcons() {
    return (
        <div className="social-icons">
            {SOCIAL_LINKS.map(({ href, icon, title }) => (
                <a key={title} href={href} target="_blank" rel="noreferrer" title={title}>
                    {icon}
                </a>
            ))}
        </div>
    )
}