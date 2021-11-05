import React from "react";
import imagen1 from '../../Images/logo@2x.png'
class Plantillacarrito extends React.Component{
    
    render(props){
        const nPla1 = "Wiener schnitzel";
        const nPla2 = "Asado de cerdo";
        const nPla3 = "Kartoffelsalat";
        const nPla4 = "Backhendlt";
        const nPla5 = "Frittatensuppet";
        const nPla6 = "Gulash estilo austríaco";
        const nPla7 = "Semmelknödelt";
        const nPla8 = "Tafelspitz";
        const nPla9 = "Brettljause";
        const nPla10 = "Vanillekipferl";
        const nPla11 = "Powidl";
        const nPla12 = "Krautfleckerlo";
        var Ppla1 = localStorage.getItem(nPla1);
        var Ppla2 = localStorage.getItem(nPla2);
        var Ppla3 = localStorage.getItem(nPla3);
        var Ppla4 = localStorage.getItem(nPla4);
        var Ppla5 = localStorage.getItem(nPla5);
        var Ppla6 = localStorage.getItem(nPla6);
        var Ppla7 = localStorage.getItem(nPla7);
        var Ppla8 = localStorage.getItem(nPla8);
        var Ppla9 = localStorage.getItem(nPla9);
        var Ppla10 = localStorage.getItem(nPla10);
        var Ppla11 = localStorage.getItem(nPla11);
        var Ppla12 = localStorage.getItem(nPla12);
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-1">Soy una perra margen</div>
                    <div className="col-5">
                        < h1>{this.props.Nombredeplato}</h1>
                        <img src={this.props.Imagendeplato} alt="Salysalsas" className ="d-block" width="450px"/>
                        <h3>$25.000</h3>
                        <br></br>
                    </div>
                    <div className="col-5">
                        <h6>Confirmacion del pedido</h6>
                         <input type="num" value={Ppla2 }></input>
                         <br></br>
                        <button>Agregar</button>
                        <button>Sustraer</button>
                        <button>Eliminar</button>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <img src={imagen1} width="250px"></img>
                    </div>
                     <div className="col-1">x2</div>
                </div>
            </React.Fragment>
        );
    }
} 
export default Plantillacarrito;