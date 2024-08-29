import './SkillCard.css'

// eslint-disable-next-line react/prop-types
export default function SkillCard({ img, mouseOver, mouseLeave }) {
    return (
        <div className="skill-card" onMouseOver={mouseOver} onMouseLeave={mouseLeave}>
            <img src={img} alt="Tecnologia" className='skill-img' />
        </div>
    )
}