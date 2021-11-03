import react from "react";
import Logo from '../../Images/logo.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Header extends react.Component{
    render(){
        return(
            <div>
                <div className="container-sm">
                    <div className="row">
                        <div className="col-2">
                        <img src={Logo} alt="Salysalsas" className ="img-thumbnail"/>
                        </div>
                        <div className="col-2"><Link to="/">Inicio</Link></div>
                        <div className="col-2"><Link to="/nosotros">Nosotros</Link></div>
                        <div className="col-2"><Link to="menu">Menu</Link></div>
                        <div className="col-2"><Link to="reservas">Reservas</Link></div>
                        <div className="col-2"><Link to="servicios">Servicios</Link></div>
                    </div>
                </div>

            </div>
        );
    }
}
export default Header;