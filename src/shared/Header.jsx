import { Link } from "react-router-dom";
import '../shared/ui/header.less';

function Header(){
    return (
        <header>
            <div className="container">
                {/* <img src="" alt="" />  LOGOTYPE*/}
                <menu>
                    <Link to="/" className="list">Главная</Link>
                    <Link to="/about"className="list">О нас</Link>
                    <Link to="/services" className="list">Услуги</Link>
                    <Link to="/projects"className="list">Портфолио</Link>
                    <Link to="/contacts" className="list">Контакты</Link>
                </menu>
                <button>Оставить заявку</button>
            </div>
        </header>
    );
}

export default Header;