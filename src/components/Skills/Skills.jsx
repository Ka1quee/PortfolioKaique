/* eslint-disable no-global-assign */
import './Skills.css'
import html from '../../assets/img/skills/html.svg'
import css from '../../assets/img/skills/css.svg'
import js from '../../assets/img/skills/js.svg'
import git from '../../assets/img/skills/git.svg'
import react from '../../assets/img/skills/react.svg'
import typescript from '../../assets/img/skills/typescript.svg'
import java from '../../assets/img/skills/java.svg'
import sass from '../../assets/img/skills/sass.svg'
import sqlserver from '../../assets/img/skills/sqlserver.svg'
import mysql from '../../assets/img/skills/mysql.svg'
import aws from '../../assets/img/skills/aws.svg'


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
                        mouseOver={() => mouseOver('Git é um sistema de controle de versão que permite rastrear alterações em arquivos e colaborar com outras pessoas no desenvolvimento de projetos de software de forma organizada e segura.', name = 'Git e Git Hub')}
                        mouseLeave={mouseLeave}
                        img={git} />

                    <SkillCard
                        mouseOver={() => mouseOver('O Sass (Syntactically Awesome Style Sheets) é uma linguagem de extensão do CSS que adiciona recursos poderosos, como variáveis, aninhamento, mixins e funções, permitindo escrever estilos de forma mais organizada e eficiente. Ele é pré-processado, o que significa que o código Sass é compilado em CSS antes de ser aplicado ao seu site. Isso facilita a manutenção e reutilização do código em projetos maiores.', name = 'Sass')}
                        mouseLeave={mouseLeave}
                        img={sass} />

                    <SkillCard
                        mouseOver={() => mouseOver('TypeScript é uma linguagem que adiciona tipos ao JavaScript, ajudando a prevenir erros e melhorar a manutenção do código. Ela é compilada para JavaScript e oferece recursos como interfaces e classes.', name = 'Type Script')}
                        mouseLeave={mouseLeave}
                        img={typescript} />


                    <SkillCard
                        mouseOver={() => mouseOver('AWS (Amazon Web Services) é uma plataforma de serviços em nuvem da Amazon que oferece infraestrutura, armazenamento, banco de dados, e ferramentas de desenvolvimento escaláveis e seguras para criar e gerenciar aplicações na nuvem.', name = 'AWS')}
                        mouseLeave={mouseLeave}
                        img={aws} />

                    <SkillCard
                        mouseOver={() => mouseOver('SQL Server é um sistema de gerenciamento de banco de dados relacional desenvolvido pela Microsoft. Ele armazena e gerencia dados, permitindo consultas e manipulação de informações usando SQL (Structured Query Language).', name = 'SQL Server')}
                        mouseLeave={mouseLeave}
                        img={sqlserver} />

                    <SkillCard
                        mouseOver={() => mouseOver('MySQL é um sistema de gerenciamento de banco de dados relacional de código aberto. Ele usa SQL para acessar e gerenciar dados e é amplamente utilizado em aplicações web para armazenar e recuperar informações de maneira eficiente.', name = 'MySQL')}
                        mouseLeave={mouseLeave}
                        img={mysql} />


                    <SkillCard
                        mouseOver={() => mouseOver('Java é uma linguagem de programação orientada a objetos, conhecida por sua portabilidade, permitindo que o mesmo código rode em diferentes plataformas. É amplamente usada para desenvolver aplicações web, desktop, móveis e sistemas corporativos.', name = 'Java')}
                        mouseLeave={mouseLeave}
                        img={java} />
                </div>
            </div>
        </section>
    )
}
