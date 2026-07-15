import alex from "../../assets/alex.webp"
import { useAnalytics } from "../../hooks/useAnalytics"
import "./ProfileCard.css"

export default function ProfileCard({ onClick }) {
    const { trackEvent } = useAnalytics()

    const handleProfileClick = () => {
        trackEvent("Clique_Perfil_Card")

        if (typeof onClick === "function") {
            onClick()
        }
    }

    return (
        <div className="profile-container" onClick={handleProfileClick}>
            <div className="profile-img-wrapper">
                <img 
                    className="img-profile" 
                    src={alex} 
                    alt="Alex Messias - Desenvolvedor Full-Stack"
                    loading="eager"
                    decoding="async"
                    draggable="false"
                    fetchPriority="high"
                />
            </div>
            <h2 className="name-profile">Alex Messias</h2>
            <span className="role-profile">Full-Stack Developer</span>
        </div>
    )
}
