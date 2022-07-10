import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavigationBar from './NavigationBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Order from './Order';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import BuildPizza from './BuildPizza';

import OrderPizza from './OrderPizza';
import Shop from './Shop';
import Navbar1 from './Navbar1';
//import Navigation from './Navigation';

ReactDOM.render(
	
  <Router>
	<Navbar1/>
	<Switch>
		<Route path='/' exact component={Home} />
		<Route path='/OrderPizza' component={OrderPizza} />
		<Route path='/BuildPizza' component={BuildPizza} />
		
	</Switch>
	</Router>,
  /* <React.StrictMode> */
  /* <App /> */
  
    
  /* </React.StrictMode>, */
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
