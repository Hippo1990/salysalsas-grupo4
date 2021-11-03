import React from "react";
import imagen1 from '../../Images/plato1.jpg';
import imagen2 from '../../Images/plato2.jpg';
import imagen3 from '../../Images/plato3.jpg';
import imagen4 from '../../Images/plato4.jpg';
import imagen5 from '../../Images/menu@2x.png';

const Article2inicio = () =>{
  return(
    <div className="container">
        <br></br>
        <h3>RECOMENDACIONES DEL CHEF</h3>
        <br></br>
        <div className="row">
            <div className="col-1"></div>
            <div className="col-2">
                <div className="border">
                    <h6>Wiener schnitzel</h6>
                        <img src={imagen1} width="140px"></img>
            </div>
            <br></br>
            <div className="border">
                <h6> Kartoffelsalatl</h6>
                <img src={imagen3} width="140px"></img>
            </div>
        </div>
        <div className="col-1"></div>
        <div className="col-2">
            <div className="border">
                <h6>Asado de cerdo</h6>
                <img src={imagen2} width="140px"></img>
            </div>
            <br></br>
           <div className="border">
                <h6>Backhendl</h6>
                <img src={imagen4} width="140px"></img>
            </div>
        </div>
        <div className="col-2"></div>
        <div className="col-4">
            <img src={imagen5} width="200px"></img>
            <br></br>
            <div className="container">
                <br></br>
                <button type="button" class="btn btn-warning">No estoy preogramado</button>
            </div>

            
        </div>
    </div>
</div>
    
  )}
export default Article2inicio;
