import React from "react";
import Carousel from './Carousel';
import Article1inicio from './Article1inicio';
import Article2inicio from './Article2inicio';
import Article3inicio from './Article3inicio';
import Asideinicio from './Asideinicio';
import './Inicio.css'

class Inicio extends React.Component{
    render(){
        return(
            <div className="fondomenu">
                <br></br>
                <Carousel />
                <Article1inicio />
                <Article2inicio />
                <br></br>
                <Article3inicio />
                <Asideinicio />
                <br></br>
            </div>
        )
    }
}
export default Inicio;