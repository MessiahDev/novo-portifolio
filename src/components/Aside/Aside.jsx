import { goToSection } from "../../utils/Scroll"
import ProfileCard from "../ProfileCard/ProfileCard"
import NavBar from "../NavBar/NavBar"
import SocialIcons from "../SocialIcons/SocialIcons"
import "./Aside.css"

export default function Aside({ activeSection }) {
    return (
        <aside className="main-aside">
            <ProfileCard onClick={() => goToSection("inicio")} />
            <NavBar activeSection={activeSection} goToSection={goToSection} />
            <SocialIcons />
        </aside>
    )
}