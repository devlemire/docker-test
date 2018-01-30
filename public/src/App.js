import React, { Component } from 'react';
import './App.css';

import axios from 'axios';


class App extends Component {
  constructor() {
    super();

    this.state = {
      carsCount: 0,
      trucksCount: 0
    };
  }

  componentDidMount() {
    axios.all([
      axios.get('http://localhost:3001/api/cars'),
      axios.get('http://localhost:3001/api/trucks')
    ]).then( results => {
      this.setState({ carsCount: results[0].data.count, trucksCount: results[1].data.count });
    });
  }

  render() {
    console.log( this.state );
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to docker land!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <h1>Cars Count: { this.state.carsCount }</h1>
        <h1>Trucks Count: { this.state.trucksCount }</h1>
      </div>
    );
  }
}

export default App;
