import ProfileCard from "../ProfileCard/ProfileCard"
import NavBar from "../NavBar/NavBar"
import SocialIcons from "../SocialIcons/SocialIcons"
import "./Aside.css"

export default function Aside({ activeSection, goToSection }) {
    return (
        <aside className="main-aside">
            {/* O ProfileCard agora usa a função rastreada para ir até o "inicio" */}
            <ProfileCard onClick={() => goToSection("inicio")} />
            
            {/* A NavBar agora usa a função correta recebida do App.js */}
            <NavBar goToSection={goToSection} activeSection={activeSection} />
            
            <div className="aside-icons">
                <SocialIcons />
            </div>
        </aside>
    )
}