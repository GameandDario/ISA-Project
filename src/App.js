import React, { Component } from 'react';
import './App.css';
import MapApi from './Components/Map/Mapapi'
import 'bootstrap/dist/css/bootstrap.css';
import './Components/Map/Map.css';





class App extends Component {
  render() {
    return (
      <div className="App">
        <MapApi />
      </div>
    );
  }
}

export default App;
