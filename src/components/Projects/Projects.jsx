import { useState } from 'react';
import './Projects.css';
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
        <section className='projects' id='projects'>
            <div id='container' data-aos="fade-down">
                <h2 className="title-projects">Projetos</h2>
                <div className="highlights" >
                    <h3 className='title-category'>Destaques</h3>
                    <div className="container-projects" >
                        {data.highlights.map((project, index) => (
                            <CardProject 
                                key={index}
                                projectImg={project.projectImg}
                                projectName={project.title}
                                date={project.date}
                                onMoreInfo={() => openModal(project)} // Passa a função para abrir o modal
                            />
                        ))}

                        
                    </div>
                </div>

                <div className="highlights">
                    <h3 className='title-category'>Todos os projetos</h3>
                    <div className="container-projects" >
                        {data.projects.map((project, index) => (
                            <CardProject 
                                key={index}
                                projectImg={project.projectImg}
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
                    tech1={selectedProject.tech1}
                    tech2={selectedProject.tech2}
                    tech3={selectedProject.tech3}

                />
            )}
        </section>
    );
}
