import carpetas from "./carpetas.json";
import React from "react";
import FilaProyecto from "./FilaProyecto";
import PreviewPag from "./PreviewPag";

/*
    Clase que muestra los proyectos en las carpetas almacenadas por el usuario
    return: Contenedor con una tabla y una sección de previsualización
    props: none
    state:
        * selected : nombre de la carpeta seleccionada
        * contActive: (true|false) si el contenedor debe estar o no activo
        * paginas : Arreglo que contiene las paginas correspondientes al proyecto seleccionado
*/

class Carpetas extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            selected : "",
            contActive : false,
            paginas : []
        }
        this.seleccionar = this.seleccionar.bind(this);
    }

    seleccionar(nombre){
        let value = !!nombre;
        let pags = [];
        if (value) {
            carpetas.forEach(carp=>{
                if (carp.nombre == nombre)
                    pags = carp.paginas;
            });
        }
        this.setState({
            selected:nombre,
            contActive:value,
            paginas : pags
        });
    }

    render(){
        let rows = carpetas.map(carp=>{
            return <FilaProyecto name={carp.nombre} active={this.state.selected} select={this.seleccionar} />
        });
        return(
            <div className="contenedor-carpetas">
                <div className="tabla-carpetas">
                    <table>
                        <thead>
                            <tr>
                                <th>Nombre del proyecto</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </table>
                </div>
                <div className={"show-content "+(this.state.contActive?"active":"")}>
                    <PreviewPag pages={this.state.paginas}/>
                </div>
            </div>
        );
    }
}

export default Carpetas;