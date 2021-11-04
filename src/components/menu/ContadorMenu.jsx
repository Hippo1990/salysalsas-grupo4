import React from "react";

class ContadorMenu extends React.Component{
    render(props){
        return(
            <div className="container">
                <input type="number" min="0" id={this.props.Identificadordeplato}></input>
                <h3>
                    Cantidad
                </h3>
            </div>
        );
    }
}
  
export default ContadorMenu;