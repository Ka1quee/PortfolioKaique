import { useState } from 'react';
import './Projects.css';
import sulSolidario from '../../assets/img/projects/sulSolidario.jfif';
import CardProject from '../CardProject/CardProject';
import Modal from '../Modal/Modal';
import data from '../data/data.json';

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <section className='projects'>
            <div id='container'>
                <h2 className="title-projects">Projetos</h2>
                <div className="highlights">
                    <h3 className='title-category'>Destaques</h3>
                    <div className="container-projects">
                        {data.projects.map((project, index) => (
                            <CardProject 
                                key={index}
                                projectImg={sulSolidario}
                                projectName={project.title}
                                date={project.date}
                                onMoreInfo={() => openModal(project)} // Passa a função para abrir o modal
                            />
                        ))}

                        
                    </div>
                </div>

                <div className="highlights">
                    <h3 className='title-category'>Todos os projetos</h3>
                    <div className="container-projects">
                        {data.projects.map((project, index) => (
                            <CardProject 
                                key={index}
                                projectImg={sulSolidario}
                                projectName={project.title}
                                date={project.date}
                                onMoreInfo={() => openModal(project)} // Passa a função para abrir o modal
                            />
                        ))}

                        
                    </div>
                </div>
            </div>

            {selectedProject && (
                <Modal 
                    isOpen={selectedProject !== null} 
                    onClose={closeModal}
                    title={selectedProject.title}
                    description={selectedProject.description} 
                    videoUrl={selectedProject.videoUrl} 
                    repoUrl={selectedProject.repoUrl} 
                    projectUrl={selectedProject.projectUrl} 
                    date={selectedProject.date}
                />
            )}
        </section>
    );
}
