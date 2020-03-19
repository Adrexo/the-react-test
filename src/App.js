import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Accueil from './components/Accueil';
import Formulaire from './components/Formulaire';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/Accueil" component={ Accueil } />
        <Route exact path="/Formulaire" component={ Formulaire } />
        <Route path="*" component={ Accueil } />
      </Switch>
    </Router>
  );
}

export default App;
