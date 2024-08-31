/* eslint-disable react/prop-types */
import './Modal.css';
import { IoClose } from "react-icons/io5";
import { FaGithub, FaEye } from "react-icons/fa";
export default function Modal({ isOpen, onClose, title, description, videoUrl, repoUrl, projectUrl, date, tech1, tech2, tech3 }) {
    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <button className="btn-close" onClick={onClose}>
                    <IoClose className='close-btn' />
                </button>

                <div className="project-preview">
                    <div className="project-video">

                        {videoUrl && <video src={videoUrl} controls autoPlay loop />}
                    </div>
                    <div className="container-btns" id='btns-modal'>
                        {projectUrl && <button className="btn" id='btn-modal' onClick={() => window.open(projectUrl, '_blank')}> <FaEye className='btn-icon' />Acessar projeto</button>}
                        {repoUrl && <button className="btn" id='btn-modal' onClick={() => window.open(repoUrl, '_blank')}>  <FaGithub className='btn-icon' />Acessar Repositório</button>}
                    </div>
                </div>

                <div className="project-infos">
                    <h2 className="title-project">{title}</h2>
                    <strong className='datee'>{date}</strong>
                    <div className="project-desc">
                        <p className='description' id='description-modal'>{description}</p>
                        <ul className='techs'>
                            <h3>Tecnologias utilizadas:</h3>
                            <li>{tech1}</li>
                            <li>{tech2}</li>
                            <li>{tech3}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
