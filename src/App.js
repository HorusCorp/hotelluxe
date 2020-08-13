import React from 'react';
import './App.scss';
import { BrowserRouter, Route,Switch} from "react-router-dom";
import Accueil from './composant/Accueil';
import Chambre from'./composant/Chambre';
import Restaurant from './composant/Restaurant';
import Service from './composant/Service';
import Gallerie from './composant/Galerie';
import Offre from './composant/Offre';
import Contact from './composant/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
            <Switch>
              <Route exact path="/"  component={Accueil} />
              <Route path="/Chambre" component={Chambre}/>
              <Route path="/Restaurant" component={Restaurant}/>
              <Route path="/Service" component={Service}/>
              <Route path="/Galerie" component={Gallerie}/>
              <Route path="/Offre" component={Offre}/>
              <Route path="/Contact" component={Contact}/>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
