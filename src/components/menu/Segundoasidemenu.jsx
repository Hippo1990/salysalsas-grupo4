import React from "react";

class Segundoasidemenu extends React.Component{
    render(props){
        return(
            <div className ="container">
                <img className="img-thumbnail" src={this.props.carrito} alt="carrito"  width="150px"/>
                <br></br>
                <button>Este boton guarda las variables, perdon aun no function</button>

            </div>
        );
    }
}

export default Segundoasidemenu;
