import React from "react";

class Primerasidemenu extends React.Component{
    render(props){
        return(
            <div className ="container">
                <div className ="row">
                    <div className="col-8">
                    <br></br>
                        <h1>{this.props.TituloPrimerasidemenu}</h1>
                    </div>
                    <div className="col-3">
                        <br></br>
                        <button>Este boton en un futuro descargara el menu</button>
                    </div>
                </div>

            </div>
        );
    }
}

export default Primerasidemenu;
