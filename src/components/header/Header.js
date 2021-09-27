import './Header.css';
import foto from './foto2.png';
function Header(){
    return (
        <header>
            <div className="foto">
                <img src={foto} alt="foto David Martin" />
            </div>
            <div className="texto">
                <h1> <span>NATALIA</span> CASTRO BEJARANO </h1>
                <h3>Aprendiz SENA de Análisis y Desarrollo de Sistemas de Información (ADSI)</h3>
            </div>
        </header>
    );
}

export default Header;