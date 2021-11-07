


function Navbar (){
    return(
        <nav id="navbar" className="navbar">
            <ul>
            <li><a className="nav-link scrollto active float-left" href="#hero">Crear interfaz</a></li>
            <li><a className="nav-link scrollto" href="#features">Conócenos</a></li>
            <li><a className="nav-link scrollto" href="#gallery">Iniciar sesión</a></li>
            <li><a className="getstarted scrollto" href="#features">Registrarse</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
        </nav>
    );
}

export default Navbar;