import React, { Component } from "react";
import foto from "../../Images/foto.jpg";
import "./informacion.css";
import personal1 from "../../Images/personal1@2x.png";
import personal2 from "../../Images/personal2@2x.png";
import personal3 from "../../Images/personal3@2x.png";
import personal4 from "../../Images/personal1.2.jpg";
import personal5 from "../../Images/personal1.3.jpg";
import personal6 from "../../Images/personal1.4.jpg";
import Carousel from "../Inicio/Asideinicio"

class Informacion extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className='head_nosotros'>
          <img src={foto} className='nosotros_img' alt='foto' />
          <div className='title_p'>
            <h2 className='title'>
              Nuestra <br />
              <span className='title2'>historia</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequuntur ad aut sed cumque maxime obcaecati veritatis animi
              similique nostrum dolore. Unde, exercitationem quaerat quibusdam
              maxime labore quas quisquam voluptate ex? <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              deserunt debitis explicabo recusandae. Voluptatum, nisi tenetur
              illum distinctio facere qui omnis quaerat? Ut accusamus nam et
              impedit id dolor recusandae!
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              asperiores ipsum fuga perspiciatis sint dolor est dolorem sed,
              voluptatum amet aliquid accusamus autem atque eligendi pariatur
              doloribus molestiae assumenda modi!
              <br /> Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Magni laborum, facilis architecto amet perspiciatis eum sapiente
              cum tenetur, dolor unde mollitia animi quibusdam nobis fugit nulla
              soluta? Magnam, labore pariatur.
            </p>
          </div>
        </div>
        <div className='empleados'>
          <div>
            <img src={personal1} className='personal' alt='personal1' />
            <h2>Juan Manuel Gomez B.</h2>
            <span>-------o--------------</span>
            <p>Chef ejecutivo</p>
          </div>
          <div>
            <img src={personal2} className='personal' alt='personal1' />
            <h2>Ana Isabel Casallas B.</h2>
            <span>-------o--------------</span>
            <p>Chef repostero</p>
          </div>
          <div>
            <img src={personal3} className='personal' alt='personal2' />
            <h2>Maria Paula Veloza G..</h2>
            <span>-------o--------------</span>
            <p>Chef repostero</p>
          </div>
          <div>
            <img src={personal4} className='personal' alt='personal4' />
            <h2>Maria Antonieta De las N.</h2>
            <span>-------o--------------</span>
            <p>Gerente general</p>
          </div>
          <div>
            <img src={personal5} className='personal' alt='personal1' />
            <h2>Pedro picapiedra M.</h2>
            <span>-------o--------------</span>
            <p>jefe de calidad</p>
          </div>
          <div>
            <img src={personal6} className='personal' alt='personal1' />
            <h2>Arnold Schwarzenegger.</h2>
            <span>-------o--------------</span>
            <p>Contador</p>
          </div>
        </div>
        <div >
          <Carousel />
        </div>
      </React.Fragment>
    );
  }
}

export default Informacion;
