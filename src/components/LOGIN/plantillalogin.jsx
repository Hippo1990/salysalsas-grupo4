import React from 'react';
import imagen1 from '../../Images/logo@2x.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Plantillalogin extends React.Component{
    render(){
        function alerta(){    
            alert("aun no funciono ");
            
                   }   
                   
        return(
            <div className="container border bg-warning">
                <img src={imagen1} height="150px"></img>
                <h5>Bienvenido nuevamente</h5>
                <label>Correo electronico <br></br><input type="email" required></input> </label>
                <br></br>
                <br></br>
                <label>Contraseña <br></br><input type="password" required></input> </label>
                <br></br>
                <Link to="Recuperar">¿Olvido su contraseña?</Link>
                <br></br>
                <button onClick={() => alerta()}>Ingresar</button>
                <br></br>
                <br></br>
                <Link to="Crear">crear cuenta</Link> 


                 
            </div>
        );
    }
}
export default Plantillalogin;