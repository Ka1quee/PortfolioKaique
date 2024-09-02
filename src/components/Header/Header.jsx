import { useRef } from 'react';
import './Header.css'
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {

    const menuMobile = useRef();
    const icon = useRef();

    function showMenu() {

        if (menuMobile.current.style.height == '320px') {
            menuMobile.current.style.height = '0px'
        } else {
            menuMobile.current.style.height = '320px'

        }

    }
    return (
        <div>
            <header className='header-desktop'>
                <div className="logo">
                    <a href='#hero' className='name-logo'>Kaique Oliveira</a>
                </div>

                <nav className="nav-link">
                    <ul className='nav-list'>
                        <li className='nav-item'><a href="#hero">Início</a></li>
                        <li className='nav-item'><a href="#about">Sobre</a></li>
                        <li className='nav-item'><a href="#skills">Habilidades</a></li>
                        <li className='nav-item'><a href="#projects">Projetos</a></li>
                        <li className='nav-item'><a href="#contacts">Contatos</a></li>
                    </ul>

                    <GiHamburgerMenu className='menu-mobile' ref={icon} onClick={showMenu} />
                </nav>
            </header>

            <header className="header-mobile" ref={menuMobile}>

                <nav className='nav-mobile'>
                    <ul className='nav-list-mobile'>
                        <a href="#hero"><li className='nav-item'><a>Início</a></li></a>
                        <li className='nav-item'><a href="#about">Sobre</a></li>
                        <li className='nav-item'><a href="#skills">Habilidades</a></li>
                        <li className='nav-item'><a href="#projects">Projetos</a></li>
                        <li className='nav-item'><a href="#contacts">Contatos</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}