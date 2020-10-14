import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addToTable} from "../store/actions/actions";
import Menu from './menu.js'
import {Link} from "react-router-dom";
const st={
    margin: '10px 20px ',
    padding: 23, 
    //margin: '20px',
    width: 350,      
}
const style = {
    padding: '9px 175px',
  width: 110,
  display: 'block',
  margin: '20px ',
  fontSize: '15px',
  
  }
  const tab={
padding:'60px 500px',
}
class Formulaire extends Component {

    state={
        //id:1,
        firstName:'',
        lastName:'',
        Email:'',
        LastValue:''
        //employee:{}
    };
    handleChange = (event) => {

        // if(event.target.getAttribute('name') === 'a'){
        //     this.setState({
        //         ...this.state.employee,firstName : event.target.value
        //     })
        //
        // }
        // if(event.target.getAttribute('name') === 'b') {
        //     this.setState({
        //         ...this.state.employee,lastName: event.target.value
        //     })
        // }
        // if(event.target.getAttribute('name') === 'c') {
        //     this.setState({
        //         ...this.state.employee,Email: event.target.value
        //     })
        // }
        // if(event.target.getAttribute('name') === 'd') {
        //     this.setState({
        //         ...this.state.employee, LastValue: event.target.value
        //     })
        // }
        if(event.target.getAttribute('name') === 'a'){
            this.setState({
                firstName : event.target.value
            })

        }
        if(event.target.getAttribute('name') === 'b') {
            this.setState({
                lastName: event.target.value
            })
        }
        if(event.target.getAttribute('name') === 'c') {
            this.setState({
                Email: event.target.value
            })
        }
        if(event.target.getAttribute('name') === 'd') {
            this.setState({
                LastValue: event.target.value
            })
        }

    }
    // addToTable = (employee) => {
    //     console.log("employee info : "+JSON.stringify(employee))
    //     this.props.addToTable(employee);
    // }
    addToTable = (firstName,lastName,Email,LastValue) => {
        console.log("employee info : "+firstName+" "+lastName+" "+Email+" "+LastValue)

        this.props.addToTable(firstName,lastName,Email,LastValue);
    }
    render() {
        const firstName = this.state.firstName;
        const lastName = this.state.lastName;
        const Email = this.state.Email;
        const LastValue = this.state.LastValue;
    return (<div>
    <Menu/>
        <div style={tab} class="form-group col-md-2">

        {/*<input name="a" style={st} type="text" class="form-control" onChange={(e)=>{this.props.hundelChange(e.target)}}/>*/}
        {/*<input name="b" style={st} type="text" class="form-control"  onChange={(a)=>{this.props.hundelChange(a.target)}}/>*/}
        {/*<input  name="c" style={st} type="text" class="form-control" onChange={(e)=>{this.props.hundelChange(e.target)}}/>*/}
        {/*<input  name="d" style={st} type="text" class="form-control" onChange={(e)=>{this.props.hundelChange(e.target)}}/>*/}
        {/*<button style={style} class="btn btn-success" onClick={()=>{this.props.add(this.props.input)}}>Add</button>*/}


            <input name="a" placeholder="first name" style={st} type="text" className="form-control" value={this.state.firstName} onChange={this.handleChange}/>
            <input name="b" placeholder="Last name" style={st} type="text" className="form-control" value={this.state.lastName} onChange={this.handleChange}/>
            <input name="c" placeholder="Email" style={st} type="text" className="form-control" value={this.state.Email} onChange={this.handleChange}/>
            <input name="d" placeholder="Discription" style={st} type="text" className="form-control" value={this.state.LastValue} onChange={this.handleChange}/>
            <button style={style} className="btn btn-success" onClick={() => {
                this.addToTable(firstName,lastName,Email,LastValue)
            }}>Add
            </button>
            <Link to={'/add' }>back</Link>
      </div></div>
      
    );
  }
}
// const mapDispatchToProps=(dispatch)=>{
//     return {
//       hundelChange:(target)=>{
//         dispatch ({type:'SET_INPUT',value:target.value})
//       },
//       add:(input)=>{
//         let obj={}
//         let inputValue=input
//         obj={inputValue}
//         dispatch ({type:'ADD_INPUT',value:obj})
//       }
//     }
//     }

const mapDispatchToProps = (dispatch) => {
    return {
        addToTable: (firstName,lastName,Email,LastValue) => dispatch(addToTable(firstName,lastName,Email,LastValue)),
    };
}
    const mapStateToProps=(state)=>{
      return{
        input:state.input
      }
    }
    export default connect(mapStateToProps,mapDispatchToProps) (Formulaire);
