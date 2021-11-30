import React from "react";

class DatosUsuario extends React.Component{
    render(){
        return(
            <div className="profile-card">
                <div className="profile-card-title">
                    <div className="profile-card-name">
                        Nombre del usuario
                    </div>
                    <div className="profile-card-title-button">
                        <input type="button" value="Modificar datos" className="profile-card-button" />
                    </div>
                </div>
                <div className="profile-card-body">
                    <p>Correo electrónico: example@example.com</p>
                    <p>Tipo de plan: Plan Linmak </p>
                    <hr></hr>
                </div>
            </div>
        );
    }
}

export default DatosUsuario;