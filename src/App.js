import Menu from './components/menu/Menu'
import Header from './components/header/Header';
import Footer from './components/footer/pie';
import Inicio from './components/Inicio/Inicio'
import Servicio from "./components/servicio/counter1"
import Reservas from "./components/Reservas/Reservas"
import Informacion from "./components/Nosotros/Informacion"
import Carrito from './components/Carritodecompras/Carrito';
import Login from './components/LOGIN/login';
import Recuperar from './components/Recuperar/Recuperar';
import Usuarionuevo from './components/Usuarionuevo/Usuarionuevo'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <><div className="App">
      
      
      <Router>
      <Header />
      <div>
        <Switch>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/nosotros">
            <Informacion />
          </Route>
          <Route path="/reservas">
            <Reservas />
          </Route>
          <Route path="/servicios" >
            <Servicio />
          </Route>
          <Route path="/Carrito" >
            <Carrito />
          </Route>
          <Route path="/Login" >
            <Login />
          </Route>
          <Route path="/Recuperar">
            <Recuperar />
          </Route>
          <Route path="/Crear">
            <Usuarionuevo />
          </Route>
          <Route path="/">
            <Inicio />
          </Route>

        </Switch>
        </div>
        <Footer/>
      </Router>
    </div></>
  );
}

export default App;
