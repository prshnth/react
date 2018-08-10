import React, { Component } from 'react';
import Footer from './components/Footer';
import ConnectDots from './components/ConnectDots';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <span className="App-header">You can’t connect the dots looking forward,
         you can only connect them looking backward. So you have to trust that the dots will somehow connect in your future.
          <span className="app-author">Steve Jobs</span>
         </span>
        <ConnectDots />
        <Footer />
      </div>
    );
  }
}

export default App;
