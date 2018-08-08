import React, { Component } from 'react';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <span className="App-header">Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.</span>
        <Footer />
      </div>
    );
  }
}

export default App;
