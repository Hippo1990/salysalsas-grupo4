import React from "react";
import Carousel from './Carousel';
import Article1inicio from './Article1inicio';
import Article2inicio from './Article2inicio';
import Article3inicio from './Article3inicio';
import Asideinicio from './Asideinicio';

class Inicio extends React.Component{
    render(){
        return(
            <div>
                <Carousel />
                <Article1inicio />
                <Article2inicio />
                <Article3inicio />
                <Asideinicio />
            </div>
        )
    }
}
export default Inicio;