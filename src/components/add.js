import React, { Component } from 'react';
import store from "../store/store";
import {connect} from "react-redux";
import {BrowserRouter, Route } from "react-router-dom";
import Menu from './menu.js'
const style = {
    padding: '9px 20px',
  width: 140,
  display: 'block',
  margin: '95px ',
  fontSize: '16px',
  
  }
  const st={
      margin: '100px  ',
      padding: 20,        
  }
  
class Add extends Component {


    render() {
    console.log("Store is : "+JSON.stringify(store.getState()))
        console.log("employee state :"+JSON.stringify(this.props.list))
    return (

        <div align>
<Menu/>
        <table >
            <tr>
      <td ><input style={st} type="text" onChange={(e)=>{this.props.hundelChange(e.target)}} class="form-control" placeholder="Search by name"/> </td>
      <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
      <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>

    <td><a href="/ajouter"><button style={style} class="btn btn-success">Add</button></a> </td>
      </tr>
      </table>
      
      <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Email</th>
        <th scope="col">Description</th>
    </tr>
  </thead>

        {this.props.list ? this.props.list.map(employee =>
            <tbody>

            <tr >
            <th scope="row">1</th>
      <td>{employee.firstName}Alami</td>
      <td>{employee.lastName}Ali</td>
      <td>{employee.Email}Alami.ali@gmail.com</td>
      <td>{employee.LastValue}ddddd</td>
      <td><a href="">Gestion Compétences</a></td>
      <td><button type="button" class="btn btn-warning">Modifier</button></td>
      <td><button type="button" class="btn btn-danger">Supprimer</button></td>

            </tr>
            </tbody>

        ):<tr></tr>}

    
   
</table>
    </div>
    );
  }
}
const mapStateToProps = (state) => {
    return {
       list: state.employees
    };
}
export default connect(mapStateToProps)(Add);
