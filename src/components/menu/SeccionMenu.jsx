import React from "react";
import Modalmenu from "./ModalMenu";
import ContadorMenu from "./ContadorMenu";

class SeccionMenu extends React.Component{
    
    render(props){
        return(
            <React.Fragment>
                <h1>{this.props.Nombredeplato}</h1>
                <img src={this.props.Imagendeplato} alt="Salysalsas" className ="img-thumbnail"/>
                <h3>$25.000</h3>
                <br></br>
                <ContadorMenu Identificadordeplato={this.props.Identificadordeplato} />
                <br></br>
                <p>{this.props.Descripciondeplato}</p>
                <Modalmenu Nombredeplato={this.props.Nombredeplato} Descripciondeplato={this.props.Descripciondeplato} />
                <br></br>

            </React.Fragment>
        );
    }
} 
export default SeccionMenu;