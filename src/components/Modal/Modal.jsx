/* eslint-disable react/prop-types */
import './Modal.css';
import { IoClose } from "react-icons/io5";
import { FaGithub, FaEye } from "react-icons/fa";

export default function Modal({ isOpen, onClose, title, description, videoUrl, repoUrl, projectUrl, date }) {
    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <button className="btn-close" onClick={onClose}>
                    <IoClose className='close-btn' />
                </button>

                <div className="project-preview">
                    <div className="project-video">

                        {videoUrl && <video src={videoUrl} controls />}
                    </div>
                    <div className="container-btns">
                        {projectUrl && <button className="btn" onClick={() => window.open(projectUrl, '_blank')}> <FaEye className='btn-icon' />Acessar projeto</button>}
                        {repoUrl && <button className="btn" onClick={() => window.open(repoUrl, '_blank')}>  <FaGithub className='btn-icon' />Acessar Repositório</button>}
                    </div>
                </div>

                <div className="project-infos">
                    <h2 className="title-project">{title}</h2>
                    <strong className='datee'>{date}</strong>
                    <div className="project-desc">
                        <p className='description'>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
