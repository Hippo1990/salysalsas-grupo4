import react from "react";
import Logo from '../../Images/logo.png'
import "./Header.css"
import imagen1 from '../../Images/carrito.jpgU'
import lg from "../../Images/16363.png"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Header extends react.Component{
    render(){
        return (
          
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-style">
              <div class="container-fluid">
              
               
                
              <Link to="/" class="navbar-brand">
              <img src={Logo} alt="" width="160" height="60" />

              </Link>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div class="navbar-nav  ms-auto text-end" >
                    <Link class="nav-link active" aria-current="page" to="/inicio">
                      Inicio
                    </Link>
                    <Link class="nav-link active" aria-current="page" to="/nosotros">Nosotros</Link>
                    <Link class="nav-link active" aria-current="page" to="menu">Menu</Link>
                    <Link class="nav-link active" aria-current="page" to="reservas">Reservas</Link>
                    <Link class="nav-link active" aria-current="page" to="servicios">Servicios</Link>
                    
                    
                    
                    <div class="d-flex justify-content-around">
                    <Link  id="cpr" class="btn btn-light ms-2" to="/carrito" role="button">
                      <img id="usrl" src={imagen1} height="30px" alt="Logo" width="30px" class="rounded-circle"></img>
                        Carrito
                    </Link>

                                            
                    <Link  id="btlg" class="btn btn-light ms-2" to="/login" role="button">
                      <img id="usrl" src={lg} height="30px" alt="Logo" width="30px" class="rounded-circle"></img>
                        Login
                    </Link>


                    </div>
                    
                  </div>
                </div>
              </div>
            </nav>
          
        );
    }
}
export default Header;