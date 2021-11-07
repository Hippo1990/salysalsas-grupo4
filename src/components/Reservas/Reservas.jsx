import React from "react";

class Reservas extends React.Component{
    render(){
        return(
            <div className="App2">
            <main>
        
            <form id="f1">
            <h1>CONTACTO</h1>
                <label for="Asunto">Asunto:</label>            
                <input name="nom" id="Asunto" maxlength="20" minlength="10" type="text" placeholder="Asunto" required pattern="[a-z A-Z]+"></input>
                <label for="Nombre">Nombre Completo:</label>            
                <input name="nom" id="Nombre" maxlength="20" minlength="10" type="text" placeholder="Ingrese su Combre completo" required pattern="[a-z A-Z]+"></input>
    
                <label for="Correo">Correo electronico:</label>             
                <input name="mail" id="Correo" maxlength="30" minlength="10" type="email" placeholder="Ingrese su correo electronico" required  ></input>
    
                
    
                <label for="sel">Nuestros servicios</label>
                <select name="servicios" id="sel" size="1" required>
                    <option value="Seleccione el servicio que desea">Seleccione el servicio que desea</option>
                    <option value="Celebracion de Cumpleaños">Celebracion de Cumpleaños</option>
                    <option value="Aniversario">Aniversario</option>
                    <option value="Fiestas infantiles">Fiestas Infantiles</option>
                    <option value="Declaraciones o Propuestas">Declaraciones o Propuestas</option>
                    <option value="Despedidas">Despedidas</option>
                    <option value="Cena con Amigos">Cena con amigos</option>            
                </select>
    
                
                    
                
                
                
                <label for="cm">Comentarios o Solicitudes especiales:</label>
               
                <textarea maxlength="390" minlength="10" name="Comentarios" id="cm" cols="30" rows="10" placeholder="Indicaciones" required pattern="[a-z A-Z]+"></textarea>
                <label id="lchk"><input id= "chk1"type="checkbox" required/> Acepta el Tratamiento de sus datos personales?</label>
               
                <input type="submit" name="enviar" id="but"></input>
    
    
            </form>
            
          
          </main>
          
    
    
    
    
          
    
    
    
    
    
    
        </div>
    
        );
    }
}
export default Reservas;