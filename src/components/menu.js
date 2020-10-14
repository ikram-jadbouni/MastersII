import React, { Component } from 'react';
import { Link, NavLink} from 'react-router-dom';
class Menu extends Component{
    render(){
        return(
       
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#"><b>SII MAROC</b></a>
    </div>
    <ul className="nav navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/">Home</NavLink>
        </li>
      <li className="nav-item">
      <NavLink className="nav-link" exact to="/add">Collaborateurs</NavLink></li>
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/competence">Compétences</NavLink>
      </li>
      <li  className="nav-item">
        <NavLink className="nav-link" exact to="/matrice">Matrice Compétences</NavLink></li>
      <li><a href="#">Seuil équipe</a></li>
    </ul>
  </div>
</nav>

);
}
}
export default Menu;