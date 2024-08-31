import './About.css'
import kaiqueImg from '../../assets/img/kaique.svg'

export default function About() {


    return (
        <section className='about' id='about'>
            <div className="container-about" id='container' data-aos="fade-down">
                <a href="https://www.linkedin.com/in/kaique--oliveira/" target='_blank'>
                    <div className="container-img">
                        <img src={kaiqueImg} alt="Imagem de Kaique Oliveira" className='img-kaique' />
                    </div>
                </a>

                <article className="about-text">
                    <h2 className='title'>Sobre mim</h2>
                    <p className='description'>Olá, me chamo Kaique Oliveira.   Amo aprender coisas novas e sonho em ser programador! Iniciei meus estudos em programação no início de 2022, durante meu curso técnico, mas foi em Outubro desse mesmo ano que realmente senti que eu precisava saber mais, e foi assim que eu criei uma paixão enorme por Front-end. <br /> <br />Amo criar coisas do zero, participar tanto do processo criativo quanto do técnico na construção de um novo site é maravilhoso! Em pouco tempo, percebi que desenvolver sistemas seria a profissão perfeita para mim, e estou determinado a lutar muito para realizar meu sonho!</p>
                </article>
            </div>
        </section>
    )
}