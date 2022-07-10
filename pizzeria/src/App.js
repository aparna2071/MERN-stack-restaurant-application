 /* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */
 
/* import './App.css';
import React from 'react';
/* import logo from './logo.svg'; */

/* import {Link} from 'react-router-dom';

function App() {
  
    return (
      <div className="App">
  
  <ul>
  <li><Link to='/product'>Product</Link></li>
    <li><Link to='/contact'>Contact</Link></li>
    <li><Link to='/about'>About</Link></li>
    <li><Link to="/category">Category</Link></li>
    
  </ul>
        
          
          
          
      </div>
    );
  }
  

export default App; */ 
import { Component } from 'react';
import Home3 from './images/Home3.png';
//import NavigationBar from './NavigationBar';
class App extends Component{
  render(){
    return(
      <div>
        <img src={Home3}/>
        
      </div>
    )
  }
}
export default App;