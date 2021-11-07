import React from "react";

/* 
    Clase que muestra el texto previo con el que se crean las interfaces
    Recibe el texto anterior como una propiedad
    props:
        * text: El texto previo que se ha de mostrar, lo recibe desde otro componente mediante una operación
*/

class TextoAnterior extends React.Component{
    render(){
        return(
            <div className="prev-text">
                <div className="prev-title">
                    Texto anterior:
                </div>
                <div className="prev-desc">
                    {this.props.text}
                </div>
            </div>
        );
    }
}

export default TextoAnterior;