import react from "react";
import Plantillacarrito from './Plantillacarrito'
import Imagen1 from '../../Images/plato1.jpg'
import Imagen2 from '../../Images/plato2.jpg'
import Imagen3 from '../../Images/plato3.jpg'
import Imagen4 from '../../Images/plato4.jpg'
import Imagen5 from '../../Images/plato5.jpg'
import Imagen6 from '../../Images/plato6.jpg'
import Imagen7 from '../../Images/plato7.jpg'
import Imagen8 from '../../Images/plato8.jpg'
import Imagen9 from '../../Images/plato9.jpg'
import Imagen10 from '../../Images/plato10.jpg'
import Imagen11 from '../../Images/plato11.jpg'
import Imagen12 from '../../Images/plato12.jpg'


class Carrito extends react.Component{
    render(){
        return(
            <div className="container-xl">
                <div className="container-sm">
                  <Plantillacarrito Nombredeplato= "Wiener schnitzel" Imagendeplato={Imagen1} Descripciondeplato="El escalope vienés o wiener schnitzel es uno de los platos más conocidos de la cocina de Austria. Se prepara con un fino filete de carne de ternera que se ablanda con un mazo de cocina y se reboza antes de freír." />
                </div>
                <div className="container-sm">
                  <Plantillacarrito Nombredeplato= "Asado de cerdo" Imagendeplato={Imagen2} Descripciondeplato="El escalope vienés o wiener schnitzel es uno de los platos más conocidos de la cocina de Austria. Se prepara con un fino filete de carne de ternera que se ablanda con un mazo de cocina y se reboza antes de freír." />
                </div>
                <div className="container-sm">
                  <Plantillacarrito Nombredeplato= "Kartoffelsalat" Imagendeplato={Imagen3} Descripciondeplato="El escalope vienés o wiener schnitzel es uno de los platos más conocidos de la cocina de Austria. Se prepara con un fino filete de carne de ternera que se ablanda con un mazo de cocina y se reboza antes de freír." />
                </div>
                <div className="container-sm">
                  <Plantillacarrito Nombredeplato= "Backhendlt" Imagendeplato={Imagen4} Descripciondeplato="El escalope vienés o wiener schnitzel es uno de los platos más conocidos de la cocina de Austria. Se prepara con un fino filete de carne de ternera que se ablanda con un mazo de cocina y se reboza antes de freír." />
                </div>
                <div className="container-sm">
                  <Plantillacarrito Nombredeplato= "Frittatensuppet" Imagendeplato={Imagen5} Descripciondeplato="El escalope vienés o wiener schnitzel es uno de los platos más conocidos de la cocina de Austria. Se prepara con un fino filete de carne de ternera que se ablanda con un mazo de cocina y se reboza antes de freír." />
                </div>
                <div className="container-sm">
                  <Plantillacarrito Nombredeplato= "Gulash austríaco" Imagendeplato={Imagen6} Descripciondeplato="El escalope vienés o wiener schnitzel es uno de los platos más conocidos de la cocina de Austria. Se prepara con un fino filete de carne de ternera que se ablanda con un mazo de cocina y se reboza antes de freír." />
                </div>
                <div className="container-sm">
                  <Plantillacarrito Nombredeplato= "Semmelknödelt" Imagendeplato={Imagen7} Descripciondeplato="El escalope vienés o wiener schnitzel es uno de los platos más conocidos de la cocina de Austria. Se prepara con un fino filete de carne de ternera que se ablanda con un mazo de cocina y se reboza antes de freír." />
                </div>
                <div className="container-sm">
                  <Plantillacarrito Nombredeplato= "Tafelspitz" Imagendeplato={Imagen8} Descripciondeplato="El escalope vienés o wiener schnitzel es uno de los platos más conocidos de la cocina de Austria. Se prepara con un fino filete de carne de ternera que se ablanda con un mazo de cocina y se reboza antes de freír." />
                </div>
                <div className="container-sm">
                  <Plantillacarrito Nombredeplato= "Brettljause" Imagendeplato={Imagen9} Descripciondeplato="El escalope vienés o wiener schnitzel es uno de los platos más conocidos de la cocina de Austria. Se prepara con un fino filete de carne de ternera que se ablanda con un mazo de cocina y se reboza antes de freír." />
                </div>
                <div className="container-sm">
                  <Plantillacarrito Nombredeplato= "Vanillekipferl" Imagendeplato={Imagen10} Descripciondeplato="El escalope vienés o wiener schnitzel es uno de los platos más conocidos de la cocina de Austria. Se prepara con un fino filete de carne de ternera que se ablanda con un mazo de cocina y se reboza antes de freír." />
                </div>
                <div className="container-sm">
                  <Plantillacarrito Nombredeplato= "Powidl" Imagendeplato={Imagen11} Descripciondeplato="El escalope vienés o wiener schnitzel es uno de los platos más conocidos de la cocina de Austria. Se prepara con un fino filete de carne de ternera que se ablanda con un mazo de cocina y se reboza antes de freír." />
                </div>
                <div className="container-sm">
                  <Plantillacarrito Nombredeplato= "Powidl" Imagendeplato={Imagen12} Descripciondeplato="El escalope vienés o wiener schnitzel es uno de los platos más conocidos de la cocina de Austria. Se prepara con un fino filete de carne de ternera que se ablanda con un mazo de cocina y se reboza antes de freír." />
                </div>


                      
            </div>
        );
    }
}
export default Carrito;