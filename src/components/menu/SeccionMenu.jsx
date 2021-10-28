import React from "react";

class SeccionMenu extends React.Component{
    
    render(props){
        return(
            <React.Fragment>
                <h1>{this.props.Nombredeplato}</h1>
                <img src={this.props.Imagendeplato} alt="Salysalsas" className ="img-thumbnail"/>
                <h3>$25.000</h3>
                <br></br>
                <br></br>
                <p>{this.props.Descripciondeplato}</p>
                <button>Hola Soy una etiqueta modal sin programar</button>
                <br></br>

            </React.Fragment>
        );
    }
} 
export default SeccionMenu;