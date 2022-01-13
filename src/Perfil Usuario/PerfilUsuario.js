import React from "react";
import Carpetas from "./Carpetas";
import DatosUsuario from "./DatosUsuario";
/* 
    Clase para mostrar el Perfil del usuario
    En esta clase se muestran los siguientes componentes:
        * Tarjeta con los datos del usuario
        * Listado de carpetas
        * Contenedor de las páginas para cada carpeta
    
*/

class PerfilUsuario extends React.Component{
    render(){
        return(
            <div className="container profile">
                <DatosUsuario />
                <Carpetas />
            </div>
        );
    }
}

export default PerfilUsuario;