import React from "react";
import prueba1 from "./img/prueba 1.png";
import prueba2 from "./img/prueba 2.png";
import prueba3 from "./img/prueba 3.png";

/* 
    Clase que muestra las previsualizaciones de una interfaz
    recibe como propiedades:
     * number: Número de la opción
     * isSelected(selected): Propiedad del componente padre, marca que un componente ha sido seleccionado
        selected: es el número del componente seleccionado
     * selectable: número que marca si es un item ya seleccionado o no     
    Cuenta con las funciones:
        * showActive(): Coloca al contenedor la clase "active"
        
*/

class PrevItem extends React.Component{
    constructor(props){
        super(props);
        this.state={};
        this.showActive = this.showActive.bind(this);
    }
    
    showActive() {
        this.props.isSelected(this.props.selectable==0?this.props.number:0);
    }
    
    render(){
        return(
            <div className={"preview-component "+(this.props.selectable==0?"activable":this.props.selectable!=this.props.number?"unactive":"active")} 
                onClick={this.showActive} 
                id={"option_"+this.props.number}>
                <div className="preview-title">
                    Opción {this.props.number}
                </div>
                <div className="preview-cont">
                    <img src={this.props.number==1?prueba1:this.props.number==2?prueba2:prueba3} className="preview-img" /> 
                </div>
            </div>
        );
    }
}

export default PrevItem;