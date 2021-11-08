import React from "react";
import images from "./imagenes";
/*
    Clase que genera una tarjeta con la vista previa de las páginas 
    return: card con la vista previa
    props:
        * name: Nombre de la página que se muestra
        * img: index de la imagen de la página en el arreglo de imagenes  
*/

class PreviewCard extends React.Component{
    render(){
        return(
            <div className="preview-card">
                <div className="preview-title">
                    {this.props.name}
                </div>
                <div className="preview-body">
                    <img src={images[this.props.img]} className="preview-img"/>
                </div>
            </div>
        );
    }
}
export default PreviewCard;