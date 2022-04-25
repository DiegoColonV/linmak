import React from "react";
import { useSelector } from 'react-redux';

function DatosUsuario(){
    const user = useSelector((state) => state.usrData)
    var plann = "";
    if (user.plan == "I") {
        plann = "Inicial"
    } else if (user.plan == "A") {
        plann = "Avanzada"
    } if (user.plan == "LM") {
        plann = "Linma"
    }
        return (
            <div className="profile-card">
                <div className="profile-card-title">
                    <div className="profile-card-name">
                        { user.user }
                    </div>
                    <div className="profile-card-title-button">
                        <input type="button" value="Modificar datos" className="profile-card-button" />
                    </div>
                </div>
                <div className="profile-card-body">
                    <p>Correo electrónico: {user.mail} </p>
                    <p>Tipo de plan: {plann} </p>
                    <hr></hr>
                </div>
            </div>
        );
}

export default DatosUsuario;