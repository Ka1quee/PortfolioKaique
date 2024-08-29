/* eslint-disable react/prop-types */
import { useRef } from 'react'
import './CardProject.css'

export default function CardProject({ projectImg, projectName, date }) {


    const info = useRef()

    // const [modalIsOpen, setModalIsOpen] = useState('modal-open')


    function openInfo() {
        info.current.style.transition = '0.5s all'
        info.current.style.top = '260px'
    }

    function hiddenInfo() {
        info.current.style.transition = '0.5s all'
        info.current.style.top = '100px'
    }

    return (
        <div className="card-project" onMouseOver={openInfo} onMouseLeave={hiddenInfo}>
            <img src={projectImg} alt="Imagem do Projeto" className='project-img' />
            <h3 className='project-name'>{projectName}</h3>

            <div className='project-info' ref={info}>
                <span className='date'>{date}</span>
                <button className="btn-more">
                    Saiba mais
                </button>
            </div>


        </div>
    )
}