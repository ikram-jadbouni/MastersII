import React from 'react';
import { Component } from 'react';
import Add from './components/add.js'
import Menu from './components/menu.js'
import Formulaire from './components/ajouter.js'
import { BrowserRouter as Router , Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Matrice from './components/matrice.js';
import Competence from './components/competence.js'

class App extends Component {
    
    render(){
        return (
        <Router>
        <div className="App">
          <Switch>

          <Route exact path="/" component={Menu} />
          <Route exact path="/add" component={Add} />
          <Route exact path="/ajouter" component={Formulaire} />
          <Route exact path="/matrice" component={Matrice} />
          <Route exact path="/competence" component={Competence} />
           </Switch>
           </div>
           </Router>
       
      
   )
    }
}

export default App;
