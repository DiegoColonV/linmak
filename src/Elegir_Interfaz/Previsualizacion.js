import React from "react";
import PrevItem from "./PrevItem";
/* 
    Clase que almacena los componentes para la vista previa de las interfaces creadas
    En este componente se muestran:
     * 3 Vistas previas de interfaces 
*/

class Previsualizacion extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            selected : false,
            itemSelected : 0,
        }
        this.isSelected = this.isSelected.bind(this);
    }

    isSelected(selected){
        this.setState({
            selected: (this.state.selected?false:true),
            itemSelected: selected, 
        });
    }

    render(){
        return(
            <div className="preview">
                <div className="preview-comps">
                    <PrevItem number="1" isSelected={this.isSelected} selectable={this.state.itemSelected}/>
                    <PrevItem number="2" isSelected={this.isSelected} selectable={this.state.itemSelected}/>
                    <PrevItem number="3" isSelected={this.isSelected} selectable={this.state.itemSelected}/>
                </div>
                <div className={"preview-icons "+(this.state.selected?"active":"")}>
                    <i class='bx bx-download preview-icon bx-md'></i>
                    <i class='bx bx-show preview-icon bx-md'></i>
                    <i class='bx bx-save preview-icon bx-md' ></i>
                </div>
            </div>
        );
    }
}

export default Previsualizacion;