import './Projects.css'
import sulSolidario from '../../assets/img/projects/sulSolidario.jfif'
import CardProject from '../CardProject/CardProject'


export default function Projects() {
    return (
        <section className='projects' id='container'>
            <h2 className="title-projects">
                Projetos
            </h2>


            <div className="highlights">
                <h3 className='title-category'>Destaques</h3>
                <div className="container-projects">

                    <CardProject
                        projectImg={sulSolidario}
                        projectName={'Sul Solidário'} />

                    <CardProject
                        projectImg={sulSolidario}
                        projectName={'Sul Solidário'} />

                    <CardProject
                        projectImg={sulSolidario}
                        projectName={'Sul Solidário'} />

                    <CardProject
                        projectImg={sulSolidario}
                        projectName={'Sul Solidário'} />
                </div>
            </div>

        </section>
    )
}