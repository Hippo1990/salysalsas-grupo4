import React from "react";
import "../servicio/estilos 1.css"
import Targetas from "./targetas"
import foto from "../../Images/icono1@2x.png";
import foto2 from "../../Images/Boda.jpg";
import foto3 from "../../Images/icono4@2x.png";
import foto4 from "../../Images/declaraciones.jpg";
import foto5 from "../../Images/despedidas.jpg";
import foto6 from "../../Images/cena.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap";
class servicios extends React.Component{
    render(){
        return(
  
<>
<div className="container">
<div className="row">
<div className="col"><Targetas Imagen={foto} Titulo="Cumpleaños" texto="En este servicio contamos de una gran variedad de decoraciones;
        cumpleaños para niños, jovenes , padres de familia y abuelos. 
        lo ideal de aqui es adeacuar todo."
        /></div>
<div className="col">
<Targetas Imagen={foto2} Titulo="Aniversario" texto="Este servicio te ofrece todo lo relacionado 
          a una buena cena, que puedas disfrutar con tu pareja una noche estupenda con un ambiente
          acordado y comida a su gusto."/> </div>

</div>

<div className="row espacio">
<div className="col"><Targetas Imagen={foto3} Titulo=" Fiestas infantiles" texto=" En este servicio contamos con unas serie de estilos o 
      temas para adecuar los espacios conforme a la variedad de gustos de los niños. ademas con la invitacion de personajes. "/></div>
<div className="col">
<Targetas Imagen={foto4} Titulo="Declaraciones o Propuestas" texto="Este servicio te ofrece todo lo relacionado 
          a un momento especial donde puedas expresar a tu pareja un bonita experiencia."/> </div>

</div>
<div className="row espacioabajo espacio">
<div className="col"><Targetas Imagen={foto5} Titulo="Despedidas" texto="En este servicio contamos con todo lo referente a al ambiente de una buena Despedidas,
          segun la tradición, pero con el estilo y formalidad de restaurante salsa y salsa. 
        "/></div>
<div className="col">
<Targetas Imagen={foto6} Titulo="Cena con amigos" texto="Nuestro restaurante quiere generar ese ambiente para un buen 
          encuentro entre amigos. el parche de todos es nuestro compromiso. La felicidad tambien es nuesta intención
           "/> </div>

</div>


</div>



</>

        );
    }


}
export default servicios;
