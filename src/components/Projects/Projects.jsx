import './Projects.css'
import sulSolidario from '../../assets/img/projects/sulSolidario.jfif'
import CardProject from '../CardProject/CardProject'
import data from '../data/data.json'
import Modal from '../Modal/Modal'

export default function Projects() {


    return (
        <section className='projects' >
            <div id='container'>
                <h2 className="title-projects">
                    Projetos
                </h2>


                <div className="highlights">
                    <h3 className='title-category'>Destaques</h3>
                    <div className="container-projects">

                        {data.projects.map(project =>
                            <CardProject key={project.title}
                                projectImg={sulSolidario}
                                projectName={project.title}
                                date={project.date} />
                        )}
                    </div>
                </div>
            </div>
            <Modal />
        </section>
    )
}