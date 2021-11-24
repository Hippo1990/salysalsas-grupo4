import react from "react";
import Logo from '../../Images/logo.png'
import "./Header.css"
import imagen1 from '../../Images/carrito.jpgU'
import imagen2 from '../../Images/iconopersona.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Header extends react.Component{
    render(){
        return(
            <div className="Contenedroheader">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-2">
                            <img src={Logo} alt="Salysalsas" className ="imagenheader" width="150px"/>
                        </div>
                        <div className="col-1">
                            <br></br>
                            <Link to="/">Inicio</Link>
                        </div>
                        <div className="col-1">
                            <br></br>
                            <Link to="/nosotros">Nosotros</Link>
                        </div>
                        <div className="col-1">
                            <br></br>
                            <Link to="menu">Menu</Link>
                        </div>
                        <div className="col-1">
                            <br></br>
                            <Link to="reservas">Reservas</Link>
                        </div>
                        <div className="col-1">
                            <br></br>
                            <Link to="servicios">Servicios</Link>
                        </div>
                            <div className="col-2">
                            <br></br>
                            <Link to="carrito"><img src={imagen1} width="30px"></img></Link>
                        </div>
                        <div className="col-2">
                            <br></br>
                            <Link to="Login"><button className="btn btn-outline-warning"><img src={imagen2}  width="30px" /> ACCEDER</button></Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}
export default Header;