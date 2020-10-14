import React, { Component } from 'react';
import Menu from './menu.js'


class Competence extends Component {
  render() { 
    return (  
      
        <div >
          <Menu/>
        
      <br/><br/><br/>
      <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Reference</th>
      <th scope="col">Equipe</th>
      <th scope="col">Méthode Agile</th>
      <th scope="col">Gestion projet</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>     
      <td>Sii</td>
      
      
    </tr>
    
   
  </tbody>
</table>
    </div>
    );
  }
}
export default Competence;