import './HeroSection.css'
import { FaGithub, FaLinkedin, FaCloudDownloadAlt } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";
import img from '../../assets/img/Programming-rafiki.svg'

export default function HeroSection() {

    return (
        <section className="hero" id='hero'>
            <div className="container-hero" data-aos="fade-down" id='container'>
                <div className="infos">
                    <div className="function">
                        <div className="detail"></div>
                        <h2>Desenvolvedor Web</h2>
                    </div>

                    <h1 className='title'>Kaique Oliveira</h1>

                    <div className="description">
                        <p>
                            Tenho 20 anos e estou em busca do meu primeiro estágio na área da tecnologia.Tenho conhecimentos em HTML, CSS, JavaScript, Java, Git, Git Hub.
                        </p>
                    </div>

                    <div className="container-btns">
                        <button className='btn'><FaCloudDownloadAlt className='btn-icon' />
                        Baixar CV</button>
                        <button className='btn' id='btn-secondary'><BsFillTelephoneFill />
                         Contatos</button>
                    </div>

                    <div className="more-info">
                        <p>Me conheça melhor: </p>

                        <div className="icons">
                            <a href="https://github.com/Ka1quee?tab=repositories" target='_blank'>
                                <FaGithub className='icon' />
                            </a>
                            <a href="https://www.linkedin.com/in/kaique--oliveira/" target='_blank'>
                                <FaLinkedin className='icon' />
                            </a>

                            <a href="https://www.instagram.com/ka1quee__/" target='_blank'>
                                <RiInstagramFill className='icon' />
                            </a>


                        </div>
                    </div>

                </div>


                <div className="img-container">
                    <img src={img} alt="Imagem temporaria" className='hero-img' />
                </div>
            </div>
        </section>
    )
}