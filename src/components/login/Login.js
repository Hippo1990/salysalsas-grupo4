import React, { Component } from "react";
import "./Login.css";

class Login extends React.Component {
  render() {
    return (
      <React.Fragment className='body'>
        <div className='sign-in'>
          <h2 className='title'>BIENVENIDO</h2>
          <input
            type='text'
            className='formulario'
            placeholder='Escribe tu usuario'
          ></input>
          <input
            type='password'
            className='formulario'
            placeholder='Escribe tu contraseña'
          ></input>
          <button className='btn'>INICIAR SECCION</button>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
