/* eslint-disable no-global-assign */
import './Skills.css'
import html from '../../assets/img/skills/html.svg'
import css from '../../assets/img/skills/css.svg'
import js from '../../assets/img/skills/js.svg'
import git from '../../assets/img/skills/git.svg'
import react from '../../assets/img/skills/react.svg'
import SkillCard from '../SkillCard/SkillCard'
import { useState } from 'react'

export default function Skills() {
    const [skillDesc, setSkillDesc] = useState('* passe o cursor do mouse no card para ler *');
    const [skillName, setSkillName] = useState('Minhas Skills');

    function mouseOver(descricao, name) {
        setSkillDesc(descricao);
        setSkillName(name)
    }

    function mouseLeave() {
        setSkillDesc('* passe o cursor do mouse no card para ler *');   
        setSkillName('Minhas Skills')
    }

    return (
        <section className='skills' id='skills'>
            <div className="container-skills" id='container' data-aos="fade-down">
                <div className="skill-desc">
                    <h2 className="title">{skillName}</h2>
                    <p className='desc'>{skillDesc}</p>
                </div>

                <div className="container-tech">
                    <SkillCard
                        mouseOver={() => mouseOver('HTML (HyperText Markup Language): É a linguagem de marcação padrão usada para criar a estrutura de páginas web, definindo o conteúdo e a organização de elementos como textos, imagens, links, etc.', name = 'HTML')}
                        mouseLeave={mouseLeave}
                        img={html} />

                    <SkillCard
                        mouseOver={() => mouseOver('CSS (Cascading Style Sheets): É uma linguagem de estilo usada para controlar a aparência visual de elementos HTML, permitindo definir cores, layouts, fontes, espaçamentos, entre outros aspectos de design.', name = 'CSS')}
                        mouseLeave={mouseLeave}
                        img={css} />

                    <SkillCard
                        mouseOver={() => mouseOver('JavaScrip é uma linguagem de programação que permite adicionar interatividade às páginas web, como animações, manipulação de eventos, validação de formulários, e muito mais.', name = 'Java Script')}
                        mouseLeave={mouseLeave}
                        img={js} />

                    <SkillCard
                        mouseOver={() => mouseOver('React é uma biblioteca JavaScript desenvolvida pelo Facebook para criar interfaces de usuário baseadas em componentes, facilitando o desenvolvimento de aplicações web dinâmicas e escaláveis.', name = 'React')}
                        mouseLeave={mouseLeave}
                        img={react} />

                    <SkillCard
                        mouseOver={() => mouseOver('Git é um sistema de controle de versão que permite rastrear alterações em arquivos e colaborar com outras pessoas no desenvolvimento de projetos de software de forma organizada e segura.', name = 'Git')}
                        mouseLeave={mouseLeave}
                        img={git} />
                </div>
            </div>
        </section>
    )
}
