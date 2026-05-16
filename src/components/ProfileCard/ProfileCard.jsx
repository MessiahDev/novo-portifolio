import alex from "../../assets/alex.png"
import "./ProfileCard.css"

export default function ProfileCard({ onClick }) {
    return (
        <div className="profile-container" onClick={onClick}>
            <div className="profile-img-wrapper">
                <img className="img-profile" src={alex} alt="Alex Messias" />
            </div>
            <h2 className="name-profile">Alex Messias</h2>
            <span className="role-profile">Full-Stack Developer</span>
        </div>
    )
}