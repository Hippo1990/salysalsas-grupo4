import Menu from './components/menu/Menu'
import Header from './components/header/Header';
import Inicio from './components/Inicio/Inicio'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router> 
        <Header />
        <Switch>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/nosotros">
            nostros
          </Route>
          <Route path="/reservas">
            reservas
          </Route>
          <Route path="/servicios">
            servicios
          </Route>
          <Route path="/">
           <Inicio />
          </Route>
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
