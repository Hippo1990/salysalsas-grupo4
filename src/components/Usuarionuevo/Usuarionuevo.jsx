import React from "react";
import Formulariousuarionuevo from "./Formulariousuarionuevo";
import Asidenuevousuario from './Asidenuevousuario'

class Usuarionuevo extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <br />
                    <br />
                </div>
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-3 border bg-warning "><Formulariousuarionuevo /></div>
                    <div className="col-3 border bg-warning"><Asidenuevousuario /></div>
                    <div className="col-3"></div>
                </div>
                <div>
                    <br />
                    <br />
                </div>
                
            </div>
        );
    }
}
export default Usuarionuevo;