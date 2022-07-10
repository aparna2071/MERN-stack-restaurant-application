import {Navbar, Nav} from 'react-bootstrap';

import {BrowserRouter as Router,Switch,Route, Link} from "react-router-dom";

import Home from './Home';
import OrderPizza from './OrderPizza';
import BuildUrPizza from './BuildUrPizza';

import Button from '@restart/ui/esm/Button';
const { Component } = require("react");

 class Navigationbar extends Component{
    render(){
        return(
          <Router>
            <div>
    <Navbar  bg="dark"  variant="dark" expand="lg">
  
    <Navbar.Brand href="#home">Pizzeria</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
    <Nav.Link as={Link} to ={"/"}>
    <img src="/PizzeriaLogo.png"
    width="50"
    height="50" 
    className="d-inline-block" />
    {''}</Nav.Link> 
      
      
        <Nav.Link as={Link} to ={"/OrderPizza"}>Order Pizza</Nav.Link>
        <Nav.Link as={Link} to ={"/BuildUrPizza"}>Build Ur Pizza</Nav.Link>
        
      </Nav>
      <button className="btn btn-warning" type="submit" style={{color:"white"}}><i className="fas fa-shopping-cart"></i>&nbsp;Shopping Cart</button>
    </Navbar.Collapse>
  
</Navbar>

            </div>
          
            <div>
            <Switch>
            <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/OrderPizza">
            <OrderPizza />
          </Route>
          <Route exact path="/BuildUrPizza">
            <BuildUrPizza />
          </Route>
          
          
        </Switch>
            </div>
            </Router>
        )
    }
}
export default Navigationbar;

