/* eslint-disable react/prop-types */
import { useRef } from 'react';
import './CardProject.css';

export default function CardProject({ projectImg, projectName, date, onMoreInfo }) {
    const info = useRef();
    const card = useRef();


    function openInfo() {
        info.current.style.transition = '0.5s all';

        if(window.innerWidth < 1064){
            info.current.style.top = '0';
            card.current.style.transform ='translateY(0)';

        }else{
            info.current.style.top = '260px';
            card.current.style.transform =  'translateY(-65px)';

        }
       

    }

    function hiddenInfo() {
        info.current.style.transition = '0.5s all';
        info.current.style.top = '100px';
        card.current.style.transform =  'translateY(0px)';

    }

    return (
        <div className="card-project" onMouseOver={openInfo} onMouseLeave={hiddenInfo} ref={card} onClick={onMoreInfo}>
            <img src={projectImg} alt="Imagem do Projeto" className='project-img' />
            <h3 className='project-name'>{projectName}</h3>
            <div className='project-info' ref={info}>
                <span className='date'>{date}</span>
                <button className="btn-more" onClick={onMoreInfo}>
                    Saiba mais
                </button>
            </div>
        </div>
    );
}
