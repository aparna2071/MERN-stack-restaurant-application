import React, { Component } from 'react'
//import PizzeriaLogo from './PizzeriaLogo.png';
import { Link } from 'react-router-dom';
class Navbar1 extends Component {
    render() {
        return (
            <div>

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Pizzeria</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                           
                            <a className="navbar-brand" href="#">
                            
                                <Link to="/"> <img src="./PizzeriaLogo.png"  alt="Logo" height="40px" width="40px" /></Link>
                            
                            </a>
                            <ul className="navbar-nav">
                                <Link className="nav-item nav-link" to="/OrderPizza">Order Pizza</Link>
                                <Link className="nav-item nav-link" to="/BuildPizza">Build Ur Pizza</Link>

                               
                            </ul>
                            <div>
                                
                            <nav className="navbar-right">
                            
                                 <button type="button" class="btn btn-warning">
                                   Shopping cart
                                </button>
                           
                            </nav>
                            
                            </div>



                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Navbar1;