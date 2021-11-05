import React from "react";
import Localstoragemenu from  './Localstoragemenu'

class ContadorMenu extends React.Component{
    render(props){
        return(
            <div className="container">
                <input type="number" min="0" id={this.props.Identificadordeplato}></input>
                <h3>
                    Cantidad
                    <Localstoragemenu Identificadordeplato ={this.props.Identificadordeplato} />
                </h3>
            </div>
        );
    }
}
  
export default ContadorMenu;