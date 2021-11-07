import React from "react";

class NuevoTexto extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            texto:"",
            hasText:false
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        let texto = event.target.value;
        let hasText = !!texto;
        this.setState({texto:texto,hasText:hasText});
    }
    
    render(){
        return(
            <div className="new-text">
                <input type="text" placeholder="Introduzca un nuevo texto" className="input-new-text" onChange={this.handleChange}/> 
                <div className="new-text-bottom">
                    <input type="button" className={"input-new-button " + this.state.hasText} value="Enviar" disabled={this.state.hasText} />
                </div>
            </div>
        );
    }
}

export default NuevoTexto;