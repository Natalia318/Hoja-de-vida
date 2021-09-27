import './App.css';
import Portafolio from './pages/Portafolio';
import Home from './pages/Home';
import Error404 from './pages/Error404';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (

    <Router>
    <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/portafolio">
          <Portafolio/>
        </Route>

        <Route path="*">
          <Error404/>
        </Route>

    </Switch>
  </Router>
           
  );
}

export default App;

