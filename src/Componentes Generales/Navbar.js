import { Link } from "react-router-dom";



function Navbar (){
    return(
        <nav id="navbar" className="navbar">
            <ul>
            <li><a href="/" className="nav-link active float-left">Crear interfaz</a></li>
            <li><a href="elegir" className="nav-link">Conócenos</a></li>
            <li><a href="elegir" className="nav-link">Iniciar sesión</a></li>
            <li><a href="elegir" className="getstarted" >Registrarse</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;