import {Link } from "react-router-dom";



function Navbar (){
    return(
        <nav id="navbar" className="navbar navbar-expand-lg">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <i className="bx bx-menu"/>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li><Link to="/" className="nav-link active float-left">Crear interfaz</Link></li>
                <li><Link to="/conocenos" className="nav-link ">Conócenos</Link></li>
                <li><Link to="/perfil" className="nav-link">Iniciar sesión</Link></li>
                <li><Link to="/loginreg" className="getstarted" >Registrarse</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;