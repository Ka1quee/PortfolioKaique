import './Header.css'

export default function Header() {
    return (
        <header>
            <div className="logo">
                <a href='#' className='name-logo'>Kaique Oliveira</a>
            </div>

            <nav className="nav-link">
                <ul className='nav-list'>
                    <li className='nav-item'><a href="#">Ínicio</a></li>
                    <li className='nav-item'><a href="#">Sobre</a></li>
                    <li className='nav-item'><a href="#">Habilidades</a></li>
                    <li className='nav-item'><a href="#">Projetos</a></li>
                </ul>
            </nav>
        </header>
    )
}