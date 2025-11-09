import './header.less'
import logo from '../assets/logo.svg'

function Header(){
    return (
        <header>
            <div className="container">
                <img src={logo} alt="" /> 
                <menu>
                    <li><a href="/">Main</a></li>
                    <li><a href="#about">About us</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contacts">Contacts    </a></li>
                </menu>
                <button>Оставить заявку</button>
            </div>
        </header>
    );
}

export default Header;