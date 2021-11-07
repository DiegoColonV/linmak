import React from "react";
import NuevoTexto from "./NuevoTexto";
import Previsualizacion from "./Previsualizacion";
import "./styles.css";
import TextoAnterior from "./TextoAnterior";

/* 
    CLASE ElegirInterfaz
    Clase que mostrará una interfaz de acuerdo a lo que especifique el texto introducido por el usuario
    Cuenta con:
        * Un campo de texto donde se muestra el texto que se introdujo anteriormente
        * Una previsualización de 3 opciones de diseños
        * Botones para guardar, descargar o visualizar
        * Un cuadro de texto para que el usuario introduzca su texto
        * Botón para utilizar el nuevo texto ingresado
*/

class ElegirInterfaz extends React.Component{
    render(){
        return(
            <div className="container int-box">
                <div className="choose-int">
                    Elige una interfaz
                </div>
                <TextoAnterior text="Una interfaz bien bonita jeje apoco no?" />
                <Previsualizacion />
                <NuevoTexto />
            </div>
        );
    }

}
export default ElegirInterfaz;