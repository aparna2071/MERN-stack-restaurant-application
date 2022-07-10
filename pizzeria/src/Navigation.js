import { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons"
//import image from '.PizzeriaLogo.png'
import './Navigation.css'
import {Link} from "react-router-dom"

class Navigation extends Component{


    constructor(){
        super();
        this.state={
            show:true
        }
    }
    render(){
        return(
            <nav className="navbar navbar-expand-lg fixed-top" style={{"backgroundColor":"black","position":"sticky",'width':'100%','opacity':'0.9'}}>
            <Link to="/" className="navbar-brand" style={{"padding":"10px","color":"white","fontSize":"30px",'textDecoration':'none'}} >Pizzeria</Link>
            <img src='./PizzeriaLogo.png' style={{"height":"50px","width":"70px"}}/>
            <button className="navbar-toggler border border-info text-info" type="button" onClick={()=>{this.setState({show:!this.state.show}) }} >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={this.state.show ? 'collapse navbar-collapse' : 'collapse navbar-collapse active'}>
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to="/" className="nav-link" style={{"padding":"10px","color":"white",'textDecoration':'none'}}> Home </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/orderPizza" style={{"padding":"10px","color":"white",'textDecoration':'none'}} > Order Pizza </Link>
                </li>
                <li className="nav-item">
                  <Link to="/BuildPizza" className="nav-link"  style={{"padding":"10px","color":"white",'textDecoration':'none'}}> Build your Pizza </Link>
                </li>
              </ul>
            </div>
            <button type="button" className="btn btn-warning" style={{"marginRight":"15px","color":"white"}}><FontAwesomeIcon icon={faShoppingCart}/> Shopping Cart</button>
          </nav>
        )
    }
}

export default Navigation;