import "./SectionTitle.css"

export default function SectionTitle({ back, front }) {
    return (
        <div className="title-wrapper">
            <span className="back-title" aria-hidden="true">{back}</span>
            <div className="front-title">
                <h2 className="title">{front}</h2>
                <span className="underline"></span>
            </div>
        </div>
    )
}