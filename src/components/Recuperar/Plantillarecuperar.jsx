import React from 'react';
import imagen1 from '../../Images/logo@2x.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Plantillarecuperar extends React.Component{
    render(){
        function alerta(){    
            alert("aun no funciono ");
            
                   }   
                   
        return(
            <div className="container border bg-warning">
                <img src={imagen1} height="150px"></img>
                <h5>Buscaremos tu correo en la base de datos</h5>
                <label>Correo electronico <br></br><input type="email" required></input> </label>
                <br></br>
                <br></br>
                <button onClick={() => alerta()}>Ingresar</button>
                <br></br>
                <br></br>
                <p>Si su correo esta dentro de nuestra base de datos le llegara un correo, con los pasos para restableces su contraseña</p>
                <Link to="Crear">crear cuenta</Link>


                 
            </div>
        );
    }
}
export default Plantillarecuperar;