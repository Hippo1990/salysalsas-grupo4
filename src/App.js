import Menu from './components/menu/Menu'
import Header from './components/header/Header';
import Footer from './components/footer/pie';
import Inicio from './components/Inicio/Inicio'
import Servicio from "./components/servicio/counter1"
import Reservas from "./components/Reservas/Reservas"
import Informacion from "./components/Nosotros/Informacion"
import Carrito from './components/Carritodecompras/Carrito';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/login/Login';


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
          <Route path="/login">
            <Login />
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
