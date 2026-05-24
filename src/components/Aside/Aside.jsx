import ProfileCard from "../ProfileCard/ProfileCard"
import NavBar from "../NavBar/NavBar"
import SocialIcons from "../SocialIcons/SocialIcons"
import "./Aside.css"

export default function Aside({ activeSection, goToSection }) {
    return (
        <aside className="main-aside">
            <ProfileCard onClick={() => goToSection("inicio")} />

            <NavBar goToSection={goToSection} activeSection={activeSection} />
            
            <div className="aside-icons">
                <SocialIcons />
            </div>
        </aside>
    )
}