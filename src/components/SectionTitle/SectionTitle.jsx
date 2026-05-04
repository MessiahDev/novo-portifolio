import "./SectionTitle.css"

export default function SectionTitle({ back, front }) {
    return (
        <div className="title-wrapper">
            <h1 className="back-title">{back}</h1>
            <div className="front-title">
                <p className="title">{front}</p>
                <span className="underline"></span>
            </div>
        </div>
    )
}