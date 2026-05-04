import alex from "../../assets/alex.jpg"
import "./ProfileCard.css"

export default function ProfileCard({ onClick }) {
    return (
        <div className="profile-container" onClick={onClick}>
            <img className="img-profile" src={alex} alt="Profile" />
            <a onClick={onClick}>
                <h2 className="name-profile">
                    <strong>Alex Messias</strong>
                </h2>
            </a>
        </div>
    )
}