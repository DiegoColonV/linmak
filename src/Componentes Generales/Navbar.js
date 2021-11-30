import {Link } from "react-router-dom";



function Navbar (){
    return(
        <nav id="navbar" className="navbar">
            <ul>
            <li><Link to="/" className="nav-link active float-left">Crear interfaz</Link></li>
            <li><Link to="/conocenos" className="nav-link">Conócenos</Link></li>
            <li><Link to="/perfil" className="nav-link">Iniciar sesión</Link></li>
            <li><Link to="/loginreg" className="getstarted" >Registrarse</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;