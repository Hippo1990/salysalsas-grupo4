import React from 'react';
import Plantillalogin from './plantillalogin';

class Login extends React.Component{
    render(){
        return(
            <div className="container">
                <div>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>   
                <div className="row"> 
                    <div className="col-4"></div>  
                    <div className="col-4"><Plantillalogin /></div> 
                    <div className="col-4"></div> 
                </div>
                <div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div> 

            </div>
        );
    }
}
export default Login;