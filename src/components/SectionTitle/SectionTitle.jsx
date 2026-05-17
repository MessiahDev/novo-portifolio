import "./SectionTitle.css"

export default function SectionTitle({ back, front }) {
    return (
        <div className="title-wrapper">
            <div className="back-title">{back}</div>
            <div className="front-title">
                <p className="title">{front}</p>
                <span className="underline"></span>
            </div>
        </div>
    )
}