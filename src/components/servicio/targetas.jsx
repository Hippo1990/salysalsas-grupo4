import React, { Component } from "react";
import "../servicio/estilos 1.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap";

class Targetas extends React.Component{
    render(props){
        return(
  
<>

<div className="container p-.2 ">
<div className="row">
    
<div className="col relleno" >
<img src={this.props.Imagen} alt="hola" width="230px" height="240px" ></img>
</div>

<div  className="col">
  
<div className="volar"className="border margin"> 
                                 <h4>{this.props.Titulo} </h4>
                                 <p>{this.props.texto}<p className="volar"><button type="button" className="btn btn-warning">Reserva</button></p></p>
                                
        </div>
        </div>  


</div>
</div>


  



</>

        );
    }


}
export default Targetas;
