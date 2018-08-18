import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header/Header';
import Mainsection from './Mainsection/Mainsection';
import Footer from './Footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Mainsection/>
        <Footer/>
      </div>
      
    );
  }
}

export default App;
