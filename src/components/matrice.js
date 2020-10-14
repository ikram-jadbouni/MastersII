import React, { Component } from 'react';
import Menu from './menu.js';

const tab={
    padding:'60px 400px',
    }
 const style = {
        padding: '10px 100px',
      width: 110,
      display: 'block',
      margin: '20px ',
      fontSize: '15px',
      
      }
class Matrice extends Component {
    render() { 
      return (     <div><Menu/>
          <form style={tab}> 
            <br></br>
            <table >
          <tr>
              <td><div class="dropdown">
    <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" id="menu1" data-toggle="dropdown">Type des compétences
    <span class="caret"></span></button>
    <ul class="dropdown-menu" role="menu" aria-labelledby="menu1">
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Compétences Fonctionnelles</a></li>
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Compétences Managériale</a></li>
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Compétences techniques</a></li>    
    </ul>
  </div> </td>&nbsp;
          <td>  <div class="dropdown">
    <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" id="menu1" data-toggle="dropdown">Liste des compétences
    <span class="caret"></span></button>
    <ul class="dropdown-menu" role="menu" aria-labelledby="menu1">
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Méthode Agile</a></li>
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Gestion projet </a></li>
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">gestion budget</a></li>
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Gestion d'equipe</a></li>
    </ul>
  </div></td></tr>
   <br></br><br></br>
 <tr> <td><div class="dropdown">
    <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" id="menu1" data-toggle="dropdown">Niveau des compétences
    <span class="caret"></span></button>
    <ul class="dropdown-menu" role="menu" aria-labelledby="menu1">
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">0</a></li>
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">1 </a></li>
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">2</a></li>
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">3</a></li>
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">4</a></li>
    </ul>
  </div></td> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
  <td> <button style={style} class="btn btn-success" onClick={()=>{this.props.add(this.props.input)}}>Add</button></td>
  </tr> 
  <tr>
      <td>
      <table class="table">
    <thead>
      <tr class="info">
        <th>Compétence</th>
        <th>Type</th>
        <th>Niveau</th>
      </tr>
    </thead>
    <tbody>
         
      <tr class="success">
        <td>Success</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      <tr class="danger">
        <td>Danger</td>
        <td>Moe</td>
        <td>mary@example.com</td>
      </tr>
      <tr class="info">
        <td>Info</td>
        <td>Dooley</td>
        <td>july@example.com</td>
      </tr>
      <tr class="warning">
        <td>Warning</td>
        <td>Refs</td>
        <td>bo@example.com</td>
      </tr>
      <tr class="active">
        <td>Active</td>
        <td>Activeson</td>
        <td>act@example.com</td>
      </tr>
    </tbody>
  </table>
      </td>
      <td></td>
  </tr>
  
  
  </table>
             </form> </div>
      )
    }
}
export default Matrice;