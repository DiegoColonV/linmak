import React from "react";
import PreviewCard from "./PreviewCard";
/* 
    Clase que muestra el conjunto de páginas en la previsualización
    return: Contenedor con las páginas que se previsualizan
    props:
        * pages: arreglo con las páginas
*/
class PreviewPag extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    
    render(){
        const comps = this.props.pages.map(pag=>{
            return <PreviewCard name={pag.nombre} img={pag.index} />
        })
        return(
            <div className="preview-cont">
                {comps}
            </div>
        );
    }
}
export default PreviewPag;