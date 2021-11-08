import React from "react";

/* Esta clase muestra las filas de los proyectos 
    return: un elemento tr junto a un elemento td en el que se muestra el nombre del proyecto
    props:
        * name: nombre del proyecto
        * active: nombre del proyecto activo
        * select: función que marca esta fila como seleccionada
*/

class FilaProyecto extends React.Component{
    constructor(props){
        super(props);
        this.state={};
        this.seleccionar = this.seleccionar.bind(this);
    }
    
    seleccionar(){
        let value = this.props.name==this.props.active?"":this.props.name;
        this.props.select(value);
    }

    render(){
        return(
            <tr>
               <td className={"table-row "+(this.props.name==this.props.active?"active":"")} onClick={this.seleccionar}>
                   <i className={'bx bx-folder'+(this.props.name==this.props.active?"-open":"")}></i>
                   {this.props.name}
                </td> 
            </tr>
        );
    }
}

export default FilaProyecto;