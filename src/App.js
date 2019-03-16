import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Slider from './components/Slider/Slider';
import Menu from './components/Menu/Menu';
import Contact from './components/Contact/Contact';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faFeather, faPhone, faComments, faEnvelope } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faEnvelope, faFeather, faPhone, faComments)
class App extends Component {
  render() {
    return (
      <div className="App">
        {
          <img src={logo} className="App-logo" alt="logo" />
          
          /* <header className="App-header">
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
        </header> */}
        <Menu/>
        <Home/>
        <Slider/>
        <Contact/>
      </div>
    );
  }
}

export default App;
