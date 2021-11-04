import React from "react";

class Segundoasidemenu extends React.Component{
    render(props){
        return(
            <div className ="container">
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">
                        <br></br>
                        <img className="img-responsive" src={this.props.carrito} alt="carrito"  width="300px"/>
                        <br></br>
                        <button>Este boton guarda las variables, perdon aun no function</button>
                    </div>
                    <div className="col-4"></div>
                </div>
            </div>
        );
    }
}

export default Segundoasidemenu;
