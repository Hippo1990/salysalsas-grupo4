import React from 'react';
import imagen1 from '../../Images/logo.png'

class Formulariousuarionuevo extends React.Component{
    render(){
        function alerta(){    
            alert("aun no funciono ");
            
                   }   
                   
        return(
            <div>
                <br />
                <img src={imagen1}  width="150px"/>
                <br />
                <br />
                <h6>Crea tu cuenta salysalsas</h6>
                <label>nombre<br /><input type="text" required></input></label>
                <label>apellido<br /><input type="text" required></input></label>
                <label>Correo electronico <br></br><input type="email" required></input> </label>
                <br />
                <h6>EL correo no puede estar registrado en nuestra base de datos</h6>
                <br />
                <label>Contraseña<br /><input type="password" required></input></label>
                <label>confirmacion de contraseña<br /><input type="password" required></input></label>
                <br />
                <button onClick={() => alerta()}>Finalizar</button>
                
            </div>
        );
    }
}
export default Formulariousuarionuevo;